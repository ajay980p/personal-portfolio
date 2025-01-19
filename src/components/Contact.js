import React, { useState } from 'react'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function validateForm() {
        if (!name || !email || !message) {
            setError('All fields are required.');
            return false;
        }
        // Simple email validation regex
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return false;
        }
        setError('');
        return true;
    }

    function onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!validateForm()) {
            return;
        }

        fetch("https://formkeep.com/f/f6d6e695ed8f", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    setSuccessMessage("We received your submission, thank you!");
                    setName('');
                    setEmail('');
                    setMessage('');
                } else if (response.code === 422) {
                    setError(response.message);
                } else {
                    setError(response.message);
                }
            })
            .catch(error => {
                setError(error.message || error);
            });
    }

    return (
        <>
            <div className="row resume m-3" style={{ backgroundColor: 'var(--color-1)', borderRadius: '20px' }}>
                <div className="col-12 text-center">
                    <h1 className='my-4' style={{ color: 'var(--color-6)', fontWeight: '900', fontSize: '55px' }}>Contact</h1>
                </div>
                <div className="d-flex cont justify-content-evenly mb-5">
                    <div className="card p-3 m-3 col-md-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'var(--color-2)', border: 'none', borderRadius: '20px' }}>
                        <div className="card-body mobile w-50">

                            <div className="contact mb-3 d-flex justify-content-between">
                                <div className='col-md-6' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    <b>Mobile no. : </b>
                                </div>
                                <div className='col-mr-6 d-flex justify-content-center' style={{ color: 'var(--color-3)', }}>
                                    <img className='m-0' src="https://img.shields.io/badge/9919929782-%230077B5.svg?style=for-the-badge" alt="" />
                                </div>
                            </div>

                            <div className="contact mb-3 d-flex justify-content-between">
                                <div className='col-md-6' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    <b>Email : </b>
                                </div>
                                <div className='col-mr-6 d-flex justify-content-center' style={{ color: 'var(--color-3)', }}>
                                    <a href="mailto:ajay980p@gmail.com">
                                        <img className='m-0' src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className="contact mb-3 d-flex justify-content-between">
                                <div className='col-md-6' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    <b>LinkedIn : </b>
                                </div>
                                <div className='col-mr-6 d-flex justify-content-center' style={{ color: 'var(--color-3)', }}>
                                    <a target="blank" href="https://www.linkedin.com/in/ajay980p/">
                                        <img className='m-0' src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className="contact mb-3 d-flex justify-content-between">
                                <div className='col-md-6' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    <b>WhatsApp : </b>
                                </div>
                                <div className='col-mr-6 d-flex justify-content-center' style={{ color: 'var(--color-3)', }}>
                                    <a target="blank" href="https://wa.me/+919919929782">
                                        <img className='m-0' src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className="contact mb-3 d-flex justify-content-between">
                                <div className='col-md-6' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    <b>GitHub : </b>
                                </div>
                                <div className='col-mr-6 d-flex justify-content-center' style={{ color: 'var(--color-3)', }}>
                                    <a target="blank" href="https://www.github.com/ajay980p">
                                        <img className='m-0' src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className="contact mb-3 d-flex justify-content-between">
                                <div className='col-md-6' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    <b>Instagram : </b>
                                </div>
                                <div className='col-mr-6 d-flex justify-content-center' style={{ color: 'var(--color-3)', }}>
                                    <a target="blank" href="https://instagram.com/ajay980p/">
                                        <img className='m-0' src="https://img.shields.io/badge/instagram-%23E4405F.svg?style=for-the-badge&logo=instagram&logoColor=white" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="card p-3 m-3 col-md-5" style={{ backgroundColor: 'var(--color-2)', border: 'none', borderRadius: '20px' }}>
                        <h3 className='text-center' style={{ color: 'var(--color-6)', fontSize: '30px' }}>Contact Form</h3>
                        <form onSubmit={onSubmit}>
                            {error && <div className="alert alert-danger">{error}</div>}
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}

                            <div className="form-group formcarry-block">
                                <label style={{ color: 'var(--color-5)' }} htmlFor="name">Full Name</label>
                                <input className='mb-2' style={{ backgroundColor: 'var(--color-2)', padding: '7px', color: 'var(--color-6)', borderRadius: '5px', width: '100%', border: '1px solid var(--color-6)', outline: 'none' }} type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" required />
                            </div>

                            <div className="form-group formcarry-block">
                                <label style={{ color: 'var(--color-5)' }} htmlFor="email">Your Email Address</label>
                                <input className='mb-2' style={{ backgroundColor: 'var(--color-2)', padding: '7px', color: 'var(--color-6)', borderRadius: '5px', width: '100%', border: '1px solid var(--color-6)', outline: 'none' }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required />
                            </div>

                            <div className="form-group formcarry-block">
                                <label style={{ color: 'var(--color-5)' }} htmlFor="message">Your message</label>
                                <textarea className='mb-2' style={{ backgroundColor: 'var(--color-2)', padding: '7px', color: 'var(--color-6)', borderRadius: '5px', width: '100%', border: '1px solid var(--color-6)', outline: 'none', height: '150px' }} value={message} onChange={(e) => setMessage(e.target.value)} id="message" required></textarea>
                            </div>

                            <div className="formcarry-block d-flex justify-content-center">
                                <button type="submit" style={{ width: '100%', backgroundColor: 'var(--color-1)', borderRadius: '5px', border: 'none', padding: '5px 20px', color: 'var(--color-6)', fontSize: '20px' }}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
