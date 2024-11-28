import { Suspense, useEffect, useState } from "react";

export default function XFlags() {
    const [countries, setCountries] = useState([]);
    const [filterCountry, setFilterCountry] = useState("");

    useEffect(() => {
        // fetch(`https://xcountries-backend.azurewebsites.net/all`)
        (async () => {
            try {
                const countriesRaw = await fetch(`https://restcountries.com/v3.1/all`);
                const countriesJSON = await countriesRaw.json();
                setCountries(countriesJSON);
            } catch (e) {
                console.error(`Error fetching data: ${e}`)
            }

        })();
        // fetch(`https://restcountries.com/v3.1/all`)
        //     .then(res => res.json())
        //     .then(ctry => setCountries(ctry))
        //     .catch(err => console.error(`Error fetching data: ${err}`));
    }, [])

    return (<>
        <h1 style={{textAlign: 'center'}}>XFlags</h1>
        <hr />
        <input style={{height: '2rem', width: '75%', border: '1px solid lightslategray'}} placeholder="Search for countries" type="text" id="text" value={filterCountry} onChange={e => setFilterCountry(e.target.value)}/>
        {countries.length === 0 ? 
            (<div style={{display:'block'}}> <h1> Loading...</h1> </div>) : 
            (<div style={{
                display:'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
                gap:'1rem', 
                paddingTop:'20px'
            }}>
                {
                    filterCountry !== '' ? (
                        countries.map((c) => {
                            if (filterCountry) {
                                if ( c.name.common.toLowerCase().includes(filterCountry.toLowerCase()) ) {
                                    return <Card key={c.name.common} image={c.flags.svg} name={c.name.common} abbr={c.name.common} />
                                    // return <Card key={c.abbr} image={c.flag} name={c.name} abbr={c.abbr}/>
                                }
                            }
                        })
                    ) : (
                        countries.map((c) => {
                            return <Card key={c.name.common} image={c.flags.svg} name={c.name.common} abbr={c.name.common} />
                            // return <Card key={c.abbr} image={c.flag} name={c.name} abbr={c.abbr}/>
                        })
                    )
                }
            </div>
        )}
    </>)
}

function Card({image, name, abbr="Image not found"}) {
    return (<>
        <div className="countryCard" style={{display:'flex', flexDirection:'column', alignItems:'center', border: '1px solid black', borderRadius:'10px', justifyContent:'space-evenly', padding:'5px', textAlign:'center', textWrap:'wrap'}}>
            <img style={{height:'50px', width:'50px', objectFit:'contain'}} src={image} alt={abbr} />
            <p>{name}</p>
            {/* <p>{abbr}</p> */}
        </div>
    </>)
}
