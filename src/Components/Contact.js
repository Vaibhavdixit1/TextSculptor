import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Contact(props) {
    const navigate = useHistory();
    const [showMessage, setShowMessage] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const { firstName, lastName, email, message } = formData;

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Check if all required fields are filled
        if (firstName && lastName && email && message) {
            // Handle form submission logic if needed

            // Show the message
            setShowMessage(true);

            // Optionally, navigate to another page after a delay
            setTimeout(() => {
                navigate.push('/');
            }, 3000); // 3000 milliseconds (3 seconds) delay, adjust as needed
        } else {
            alert('Please fill in all  fields.');
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>Contact Us</h1>
            <form>
                <div className="row g-3 my-5">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            name='firstName'
                            aria-label="First name"
                            value={firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            name='lastName'
                            aria-label="Last name"
                            value={lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name='email'
                            placeholder="name@example.com"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name='message'
                        placeholder="Your message..."
                        value={message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto my-4">
                    <button
                        className="btn btn-outline-info"
                        type="button"
                        onClick={handleSubmit}
                        disabled={showMessage} // Disable the button once clicked to prevent multiple submissions
                    >
                        Submit
                    </button>
                </div>
            </form>

            {showMessage && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p>Thanks for your time! We will contact you shortly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
