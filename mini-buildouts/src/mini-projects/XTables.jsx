import { useEffect, useState } from "react"

const table = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
]


export default function XTables () {

    const [filteredTable, setFilteredTable] = useState([]);

    useEffect(() => {
        setFilteredTable(table.map(row => {
            return {
                // "date": new Date(row.date),
                ...row
            }
        }))
    }, [])

    const sortByDate = () => {
        setFilteredTable((table) => {
            return [...table.sort(byFields("date", "views"))];
        })
    };

    const sortByViews = () => {
        setFilteredTable((table) => {
            return [...table.sort(byFields("views", "date"))];
        })
    };

    const byFields = (f1, f2) => {

        return (row1, row2) => {
            console.log(row1[f1] , row2[f1]);
            if (row1[f1] < row2[f1]) {
                console.log("1", (typeof row1[f1]) )
                return 1;
            } else if (row1[f1] > row2[f1]) {
                console.log("-1")
                return -1;
            } else {
                const res = (row2[f2]) > (row1[f2]) ? 1 : -1;
                console.log(res);
                return res;
            }
        }
    }


    return <div style={{textAlign:"start"}}>
        <h1>Date and Views Table</h1>
        <button className="btn_xtables" onClick={sortByDate}>Sort By Date</button>
        <button className="btn_xtables" style={{marginLeft: "8px"}} onClick={sortByViews}>Sort By Views</button>
        <table style={{marginTop: "8px"}}>
            <thead>
                <tr>
                    <th scope="row">Date</th>
                    <th scope="row">Views</th>
                    <th scope="row">Article</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredTable.map((row, id) => {
                        return <tr key={id + row.date}>
                            <td>{row.date}</td>
                            <td>{row.views}</td>
                            <td>{row.article}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}