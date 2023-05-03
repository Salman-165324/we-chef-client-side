import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../shared/Navbar';
import FeaturedChefs from '../components/FeaturedChefs';

const Home = () => {


    return (
        <div>
            <Header></Header>
            <FeaturedChefs></FeaturedChefs>
        </div>
    );
};

export default Home;