import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../shared/Navbar';
import FeaturedChefs from '../components/FeaturedChefs';
import TeamMembers from '../components/TeamMembers';
import Footer from '../shared/Footer';

const Home = () => {


    return (
        <div>
            <Header></Header>
            <FeaturedChefs></FeaturedChefs>
            <TeamMembers></TeamMembers>
            <Footer></Footer>
        </div>
    );
};

export default Home;