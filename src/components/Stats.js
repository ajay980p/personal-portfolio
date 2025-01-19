import React from 'react';

export default function Stats() {
    const username = 'ajay980p';

    return (
        <div
            className="d-flex flex-row flex-wrap justify-content-center align-items-center m-3"
            style={{ backgroundColor: 'black', borderRadius: '5px', padding: '20px' }}
        >
            <h1
                className="text-center w-100 my-4"
                style={{ color: 'white', fontWeight: '900', fontSize: '55px' }}
            >
                GitHub Stats
            </h1>
            <img
                style={{ height: '250px', margin: '10px' }}
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true`}
                alt="GitHub Streak"
            />
            <img
                style={{ height: '250px', margin: '10px' }}
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true`}
                alt="Top Languages"
            />
            <img
                style={{ height: '250px', margin: '10px' }}
                src={`https://github-readme-stats.vercel.app/api?username=${username}&include_all_commits=true&show_icons=true&count_private=true&theme=dark&hide_border=true`}
                alt="GitHub Stats"
            />
            <img
                style={{ height: '250px', margin: '10px' }}
                src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=onestar&no-frame=true`}
                alt="Trophies"
            />
        </div>
    );
}