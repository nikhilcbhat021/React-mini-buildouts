import React from "react";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";

const EmployeePagination = () => {
    const [entries, setEntries] = useState([]);
    const perPageCount = 10;
    const [currPage, setCurrPage] = useState(0);
    const [totalPages, seTotalPages] = useState(0);
    const [filteredEntries, setFilteredEntries] = useState([]);


    useEffect(() => {
        fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)
            .then(raw => raw.json())
            .then(entries => {
                setEntries(entries);
                seTotalPages(Math.ceil(entries.length/perPageCount));
                setFilteredEntries(entries.slice(currPage*perPageCount, (currPage+1)*perPageCount))
            })
            .catch(err => console.error(`failed to fetch data : ${err}`))
    }, []);

    useEffect(() => {
        seTotalPages(Math.ceil(entries.length/perPageCount));
        const slicedArr = entries.slice(currPage*perPageCount, (currPage+1)*perPageCount);
        if (!slicedArr.length && currPage>0) {
            setCurrPage(c => c-1)
            return;
        }
        setFilteredEntries(slicedArr);
    }, [currPage, entries]);

    useEffect(() => {
        console.log("totalpages = ",totalPages);
        console.log("currpage = ",currPage);
        console.log("filteredentries :- ");
        console.log(filteredEntries);
    })

    return (
        <div className="pagination">
            <div className="table">
                <table>
                    <thead className="tableHeader">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEntries.map((entry, idx) => {
                            return <tr key={entry.id}>
                                <td scope="row">{entry.id}</td>
                                <td scope="row">{entry.name}</td>
                                <td scope="row">{entry.email}</td>
                                <td scope="row">{entry.role}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div style={{display:'flex', flexDirection:'row', gap: '.5rem'}}>
                    <button onClick={() => {
                        currPage > 0 && setCurrPage(c => c-1);
                    }}>Previous</button>

                    <p>{currPage}</p>
                    
                    <button onClick={() => {
                        currPage < totalPages-1 && setCurrPage(c => c+1);
                    }}>Next</button>
                </div>
                <hr />
                <button
                    onClick={() => {
                        setEntries(e => {
                            const sliced = e.slice(0, e.length - 1);
                            console.log(sliced);
                            return sliced;
                        });
                    }}
                >Delete from end</button>
                {/* <Pagination totalPages={totalPages}  /> */}
            </div>
        </div>
    );
};

export default EmployeePagination;
