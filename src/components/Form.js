import React, {useState} from "react";

const Form = () => {
    let [username, setUsername] = useState()
    let [password, setPassword] = useState()
    let [err, setErr] = useState("")

    function validate(){
        if(!username || !password){
            setErr("Both username and password are required.")
        }
        else {
            setErr();
        }
    }

    return (
       <div>
          <form>
             <p>
                 <label htmlFor="username">Username:</label>
                 <input
                    id="username"
                    onChange={(e) => setUsername(e.target.value.trim())}
                    type="text"
                 />
             </p>


             <p>
                 <label htmlFor="pass">Password:</label>
                 <input
                    onChange={(e) => setPassword(e.target.value.trim())}
                    type="password"
                    id="pass"
                 />
             </p>
          </form>
          {err && <p id="errorMessage">{err}</p>}
          <button onClick={validate}>Login</button>
       </div>
    );
}

export default Form;