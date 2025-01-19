import React from 'react'

export default function Resume() {

    const ResumeLink = "https://drive.google.com/drive/folders/1-aAx0rVZBKbwpzjjmJLkhxHI3WJeDkKk"

    return (
        <>
            <div className="row resume m-3" style={{ backgroundColor: 'var(--color-1)', borderRadius: '5px' }}>
                <div className="col-12 text-center">
                    <h1 className='my-4' style={{ color: 'var(--color-6)', fontWeight: '900', fontSize: '55px' }}>Resume</h1>
                </div>
                <div className="resume" style={{ height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a style={{ padding: '10px', color: 'var(--color-6)', backgroundColor: 'var(--color-2)', textDecoration: 'none', borderRadius: '8px', fontSize: '20px' }} target="blank" href={ResumeLink}>View Resume</a>
                </div>
            </div>
        </>
    )
}
