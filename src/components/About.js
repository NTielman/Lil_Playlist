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
            like: juggling, skateboarding, how to sleep with your eyes open and CODING.
            Which brings us to this lil playlist here: This is a project she made for the "React eindopdracht" of Winc Academy.
            And though the playlist doesn't actually play music (😅ikr? you had ONE job) she hopes you'll
            still find the project interesting and have a nice time interacting with it.</p>
            <Link to='/'>
                Return to Playlist
            </Link>
        </div>);

}

export default About;