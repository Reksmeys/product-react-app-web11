// create login component

import { useState } from "react"

function Login(){

    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    const onInputChangeHanler = (e) => {
        const {name, value} = e.target
        setUser(prevState => 
            {
                return{
                    ...prevState,
                    [name]:value 
                }
            }
        )
    }

    const handleSubmit = () => {
        // call action login
    }
    return(
        <main className="vh-100 d-flex justify-content-center align-items-center mw-100">
                <form onSubmit={handleSubmit}>
                    {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 className="h3 mb-3 fw-normal mt-5">Please sign in</h1>

                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            name="email"
                            onChange={onInputChangeHanler}
                            className="form-control" 
                            placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input 
                            type="password"
                            name="password" 
                            onChange={onInputChangeHanler}
                            className="form-control"  
                            placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
                </form>
        </main>
    )
}

export default Login