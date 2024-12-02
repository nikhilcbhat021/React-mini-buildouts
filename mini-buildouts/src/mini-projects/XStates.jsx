import { useState, useEffect } from "react";

const XStates = () => {

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");


    useEffect(() => {console.log(country!=="" , "," , state!=="" , "," , city!=="")});

    useEffect(() => {
        fetch('https://crio-location-selector.onrender.com/countries')
            .then(raw => raw.json())
            .then(countries => {
                console.log(countries);
                setCountries(countries);
                // setState("");
            })
            .catch(err => console.error(`Error occured while fetching countries - ${err}`));
    }, []);

    useEffect(() => {
        if (country) {
            fetch(`https://crio-location-selector.onrender.com/country=${country}/states`)
                .then(raw => raw.json())
                .then(states => {
                    console.log(states);
                    setStates(states);
                    setCities([]);
                })
                .catch(err => console.error(`Error occured while fetching states - ${err}`));
        }
        setState("");
    }, [country]);

    useEffect(() => {
        if (state) {
            fetch(`https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`)
                .then(raw => raw.json())
                .then(cities => {
                    console.log(cities);
                    setCities(cities);
                })
                .catch(err => console.error(`Error occured while fetching cities - ${err}`));
        }
        setCity("");
    }, [state]);

    useEffect(() => {
        // alert(country, state, city);
    }, [city]);

    return (<>
        <h1>Select Location</h1>
        <div
            style={{
                display: "flex",
                gap: "1.5rem",
            }}
        >
            <select name="country" id="country" value={country} onChange={(e) => {console.log(e.target.value); setCountry(e.target.value)}}>
                <option value="">
                    Select Country
                </option>
                {
                    countries.map(entry => {
                        return <option value={entry}>
                            {entry}
                        </option>
                    })
                }
            </select>

            <select name="state" 
                disabled={country===""}
                id="state" value={state} onChange={(e) => setState(e.target.value)}
            >
                <option value="" disabled>
                    Select State
                </option>
                {
                    states.map(entry => {
                        return <option value={entry}>
                            {entry}
                        </option>
                    })
                }
            </select>
            <select name="city" 
                disabled={state===""} 
                id="city" value={city} onChange={(e) => setCity(e.target.value)}
            >
                <option value="" disabled>
                    Select City
                </option>
                {
                    cities.map(entry => {
                        return <option value={entry}>
                            {entry}
                        </option>
                    })
                }
            </select>
        </div>
        <div style={city ? {display: 'block'} : {display: ' none'}}>
            <p> You selected <strong>{country}</strong>, {state}, {city} </p>
        </div>
    </>);
};

export default XStates;
