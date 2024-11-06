import { Suspense, useEffect, useState } from "react";

export default function XFlags() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`https://xcountries-backend.azurewebsites.net/all`)
            .then(res => res.json())
            .then(ctry => setCountries(ctry))
            .catch(err => console.error(`Error fetching data: ${err}`));
    }, [])

    return (<>
        <h1 style={{textAlign: 'center'}}>XFlags</h1>
        <hr />
        <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap:'1rem', paddingTop:'20px'}}>
            {countries.map((c) => {
                return <Card key={c.abbr} image={c.flag} name={c.name} abbr={c.abbr}/>
            })}
        </div>
    </>)
}

function Card({image, name, abbr="Image not found"}) {
    return (<>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', border: '1px solid black', borderRadius:'10px', justifyContent:'space-evenly', padding:'5px', textAlign:'center', textWrap:'wrap'}}>
            <img style={{height:'50px', width:'50px', objectFit:'contain'}} src={image} alt={abbr} />
            <p>{name}</p>
            <p>{abbr}</p>
        </div>
    </>)
}
