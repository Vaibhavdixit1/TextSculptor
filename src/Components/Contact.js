import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
export default function About(props) {
    const navigate = useHistory()
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

    return (
        <div classNameName="container my-5">
            <h1 className="text-center" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>Contact Us</h1>
            <form action="">
                <div className="row g-3 my-5">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" name='First name' aria-label="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" name='Last name' aria-label="Last name" />
                    </div>
                    <div className="form-group">

                        <input type="email" className="form-control" id="exampleFormControlInput1" name='Email' placeholder="name@example.com" />
                    </div>
                </div>
                <div className="form-group">
                    <textarea className="form-control " id="exampleFormControlTextarea1" rows="3" name='Message' placeholder="Your message..." x></textarea>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto my-4">
                    <button class="btn btn-outline-info" type="button" onClick={()=>navigate.push("/")}>Submit </button>

                </div>
            </form>
        </div>
    )
}
