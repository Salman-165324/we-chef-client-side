// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaArrowRight, FaThumbsUp } from 'react-icons/fa';
import { BiDish } from "react-icons/bi";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const FeaturedChefCard = ({ chef }) => {

    function cutTextTo30Words(text) {
        const words = text.split(' ');

        // Return the first 30 words joined by spaces
        return words.slice(0, 30).join(' ');
    }

    const { chefName, id, likes, numberOfRecipes, picture, yearsOfExperience, bio } = chef;
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* <img className="lg:h-[650px] md:h-72 w-full object-cover object-top" src={picture} alt="blog" /> */}
                <LazyLoad height={650}>
                     <img className="lg:h-[650px] md:h-72 w-full object-cover object-top" src={picture} alt="blog" />
                </LazyLoad>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Experience: {yearsOfExperience} years</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{chefName}</h1>
                    <p className="leading-relaxed mb-3">{`${cutTextTo30Words(bio)}...`}</p>
                    <div className="flex items-center flex-wrap ">
                        <Link to={`/chef/${id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">View Recipe <FaArrowRight className='ml-2 mt-0.5'></FaArrowRight>

                        </Link >
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <FaThumbsUp className='mr-2'></FaThumbsUp>{likes}
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <BiDish className='mr-2 text-lg'></BiDish> {numberOfRecipes}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedChefCard;