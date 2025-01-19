import React from 'react'

export default function About() {
    return (
        <>
            <div className="row about m-3 mb-5">
                <div className="col-12 col-md-3 m-auto d-flex justify-content-center align-items-center my-5">
                    <img src="https://avatars.githubusercontent.com/ajay980p?v=4" alt="Ajay Prajapati" style={{ width: '90%', borderRadius: '50%' }} />
                </div>
                <div className="col-12 col-md-8 mx-auto mb-5">
                    <h1 className='text-center my-5' style={{ color: 'var(--color-6)', fontSize: '55px', fontWeight: '900' }}>My Overview</h1>
                    <p style={{ color: 'var(--color-5)', fontSize: '20px', textAlign: 'justify' }}>
                        I am a results-driven Full Stack Developer with 1 year of experience building scalable web applications using the MERN stack. I hold an MCA from VIT Vellore and a BCA from MCRPV University, with expertise in React.js, Node.js, MySQL, MongoDB, and modern tools like Docker and Kubernetes.
                        I thrive on solving complex problems, optimizing user experiences, and collaborating with dynamic teams. I have contributed to large-scale projects, including government initiatives like PM Suryaghar Muft Bijli Yojana and GCZMA, where I developed robust systems, integrated secure payment solutions, and optimized performance.
                        A fast learner and proactive team player, I am passionate about exploring modern tools and building impactful solutions that drive technological advancements and create seamless digital experiences.
                    </p>

                    <div className="col-md-12 d-flex justify-content-around edu-hobby mt-5">
                        <div className="col-md-4 p-3" style={{ backgroundColor: 'var(--color-2)', borderRadius: '10px' }}>
                            <h3 className='mb-4 text-center' style={{ color: 'var(--color-6)', fontSize: '35px', fontWeight: '700' }}>Education</h3>
                            <ul>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Master's of Computer Applications (MCA) from VIT Vellore, Tamil Nadu.
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Bachelor's of Computer Applications (BCA) from MCRPV Bhopal, Madhya Pradesh
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 p-3" style={{ backgroundColor: 'var(--color-2)', borderRadius: '10px' }}>
                            <h3 className='mb-4 text-center' style={{ color: 'var(--color-6)', fontSize: '35px', fontWeight: '700' }}>Hobbies</h3>
                            <ul>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Web Development
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Hacking
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Reading Books
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Playing Games
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Listening to Music
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Travelling
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
