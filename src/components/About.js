/* --------------------------------- Renders About page --------------------------------- */
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className="about-container">
            <h1> About Us</h1>
            <p>Nika is a 26 year old Sushi Monster (kinda like the Cookie Monster ... but fishier? 🍣).
            She lives in The Hague, where she works as a part-time waitress - well, not so much "working" right now,
            cause y'know Corona enz. So, now that she has a lot of free time she likes learning cool new skills,
            like: juggling, skateboarding, how to sleep with your eyes open and CODING.</p>

            <p>Which brings us to this lil playlist here:
            Since she loves music, and has a lot of (perhaps questionably obtained) music files on her old computer.
            She thought it could be helpful to build a tool that helps her organise her music.
            And though the playlist doesn't actually play music (😅ikr? you had ONE job) she hopes you'll
            still find the project interesting and have a nice time interacting with it.</p>
            <Link to='/'>
                Return to Playlist
            </Link>
        </div>);

}

export default About;