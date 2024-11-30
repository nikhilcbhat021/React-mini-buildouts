import React, { useState } from "react";

const XLogin = () => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const [isUserValid, setIsUserValid] = useState("unknown");
    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'Crio' && password === 'password') {
            setIsUserValid('success')
        } else {
            setIsUserValid('failure')
        }
        console.log("onsubmit ", e.target.id);
    }

    return (
        <div>
            <h1>Login Page</h1>
            {
                (isUserValid === 'unknown' || isUserValid === 'failure') ? (<>
                    {
                        isUserValid === 'failure' && <div>Invalid username or password</div>
                    }
                    <form action="" onSubmit={handleLogin} style={{display:'flex', flexDirection:'column', placeItems:'center', gap: '1rem'}}>
                        <br /><br />
                        <div>
                            <label htmlFor="username" >Username: </label>
                            <input required type="text" id="username" name="username" value={username} onChange={e => setusername(e.target.value)} />
                            <br />
                            <br />
                        </div>
                        <div>
                            <label htmlFor="password" >Password: </label>
                            <input required type="password" id="password" name="password" value={password} onChange={e => setpassword(e.target.value)} />
                            <br />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </>) : (
                    isUserValid === 'success' &&  (
                        <div>
                            <p>Welcome, user!</p>
                        </div>
                    )
                )
            }
            
        </div>
    );
};

export default XLogin;
