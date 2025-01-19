import React from 'react'
import PMSuryaGhar from '../assets/images/PMSuryaGhar.jpg';
import GCZMA from '../assets/images/GCZMA.jpg';
import Pizza from '../assets/images/pizza.webp';
import psychometricImage from '../assets/images/psychometric.png';
import whiteboardImage from '../assets/images/whiteboard.png';

export default function Projects() {

    const projects = [
        {
            name: 'PMSuryaGhar',
            description: 'FlexiForms is a dynamic platform that empowers individuals and teams to create custom forms, collect data in real-time, and analyze insights instantly. Whether for feedback, surveys, registration, or data collection, FlexiForms’s tools make the process easy and effective.',
            link: 'https://www.pmsuryaghar.gov.in/',
            image: PMSuryaGhar,
        },
        {
            name: 'GCZMA',
            description: 'GCZMA is a platform under the Department of Environment and Climate Change, Government of Goa, focused on managing coastal resources and enforcing environmental regulations. As a Full Stack Developer, I contributed to backend development and integrated Razorpay for payment processing. The platform helps streamline digital governance for environmental policies like CRZ and noise pollution.',
            link: 'https://gczma.in/',  // Replace with the actual URL
            image: GCZMA,
        },
        {
            name: 'Pizza Application',
            description: 'A web application for pizza ordering, featuring an Admin Panel for management by Admins and Restaurant Managers. It integrates multiple services like authentication, catalog management, payments, delivery, and notifications. Built with React.js, Next.js, Node.js, and other modern technologies to provide a seamless user and admin experience.',
            link: '#',  // Replace with the actual URL
            image: Pizza,  // Replace with the actual image URL
        },
    ]

    return (
        <>
            <div className="row resume m-3 pb-3" style={{ backgroundColor: 'var(--color-1)', borderRadius: '20px' }}>
                <div className="col-12 text-center">
                    <h1 className='my-4' style={{ color: 'var(--color-6)', fontWeight: '900', fontSize: '55px' }}>My Projects</h1>
                </div>
                <div className="row d-flex justify-content-center flex-wrap m-auto">
                    {
                        projects.map((project) => {
                            return (
                                <div key={project.name} className="card px-0 m-2" style={{ width: '20rem', backgroundColor: 'var(--color-2)', borderRadius: '20px', overflow: 'hidden' }}>
                                    <img src={project.image} className="card-img-top w-full" alt="..." />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title text-center mb-3" style={{ fontSize: '25px', fontWeight: '700', color: 'var(--color-6)' }}>{project.name}</h5>
                                        <p className="card-text text-center" style={{ color: 'var(--color-5)' }}>{project.description}</p>
                                        <a href={project.link} target="_blank" rel="noreferrer" className="btn" style={{ border: '2px solid var(--color-6)', color: 'red' }}>View Live <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
