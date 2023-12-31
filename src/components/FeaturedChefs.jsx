import React, { useContext, useEffect, useState } from 'react';
import FeaturedChefCard from './FeaturedChefCard';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigation } from 'react-router-dom';
import Loader from '../shared/Loader'

const FeaturedChefs = () => {
    const [allChefs, setAllChefs] = useState([]);
    const navigation = useNavigation(); 
    const [loading, setLoading] = useState(false); 
    console.log(navigation.state); 
    useEffect(() => {
        
        setLoading(true); 
        fetch('https://chef-recipe-hunter-server-side-salman-165324.vercel.app/allChefs')
            .then(res => res.json())
            .then(data => {
                setAllChefs(data)
                setLoading(false)
            })
            .catch(error => {
                console.log('Error fetching chefs:', error);
                setLoading(false)
            });
    }, []);

    if(loading){

        return <Loader></Loader>
    }

    console.log('Is loading', loading); 

    return (
        <section className="text-gray-600 body-font">
            
            <div className="container px-5 py-24 mx-auto">
            <h2 className='text-4xl font-bold text-center mb-8 lg:mb-12'>Our Top Chefs</h2>
                <div className="flex flex-wrap -m-4">

                    {
                        allChefs.map( chef => <FeaturedChefCard
                        
                            key={chef.id}
                            chef = {chef}
                        
                        ></FeaturedChefCard>)
                    }

                </div>
            </div>
        </section>
    );
};

export default FeaturedChefs;