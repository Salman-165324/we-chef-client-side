// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefPage = () => {

    const chefData = useLoaderData(); 
    const {chefName, id, likes, numberOfRecipes, picture, yearsOfExperience, recipes} = chefData;
    console.log(chefData); 
    console.log(recipes); 
    return (
        <div>
            <h1>This is Chef Page</h1>
        </div>
    );
};

export default ChefPage;