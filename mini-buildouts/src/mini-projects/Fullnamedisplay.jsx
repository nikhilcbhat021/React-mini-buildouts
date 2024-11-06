import { useState } from "react"

export default function FullNameDisplayForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nameAvailable, setNameAvailable] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // const formdata = new FormData(e.target);
        // console.log([...formdata.keys()]);
        // console.log([...formdata.values()]);
        setNameAvailable(true);
    }

    return(<>
        <h1>Full Name Display</h1>
        <form 
            onSubmit={e => onSubmitHandler(e)}
            // action={onSubmitHandler}
        >
            <div>
                <label htmlFor="first_name">
                    First Name:<input type="text" required name="first_name" id="first_name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                </label>
            </div>
            <div>
                <label htmlFor="last_name">
                    Last Name:<input type="text" required name="last_name" id="last_name" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        {nameAvailable && <p>Full Name: {firstName} {lastName}</p>}
    </>)
}