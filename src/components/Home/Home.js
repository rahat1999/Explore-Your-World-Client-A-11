import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import OurTours from '../OurTours/OurTours';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurTours></OurTours>
            <Services></Services>
            <About></About>
            <Blog></Blog>

            <Contact></Contact>

        </div>
    );
};

export default Home;