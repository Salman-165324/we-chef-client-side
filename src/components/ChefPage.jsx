// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefPage = () => {

    const chefData = useLoaderData();
    const { chefName, id, likes, numberOfRecipes, picture, yearsOfExperience, recipes, bio
    } = chefData;
    console.log(chefData);
    console.log(recipes);
    return (
        <div>
            <div className="text-gray-600 body-font overflow-hidden">
                <div className="container max-w-[1280px] px-5 lg:px-0 py-24 mx-auto">

                    <div className=" mx-auto flex flex-wrap">
                        {/* Profile Part */}
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[650px] md:h-72 object-cover object-top rounded" src={picture} />
                        <div className="lg:w-1/2 flex flex-col justify-center w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Experience: {yearsOfExperience} years</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{chefName}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <FaThumbsUp className='mb-0.5'></FaThumbsUp>
                                    <span className="text-gray-600 ml-1">{likes}</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed text-lg">{bio}</p>
                            <div className='mt-3'>
                                <h4 className='text-xl font-semibold'>Total number of Recipe:
                                    <span className='ml-2 font-normal text-lg'>{numberOfRecipes}</span>
                                </h4>
                            </div>

                        </div>



                    </div>
                </div>

            </div>
            {/* Recipe Card */}
            <div className='container max-w-[1280px] mx-auto px-5 lg:px-0 pb-16'>
                            <h2 className='text-center text-4xl font-bold'>Top Recipes</h2>
                            <div className=' mt-8 md:mt-10 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 '>
                                {
                                    recipes.map(recipe => <RecipeCard
                                        key={recipe.id}
                                        recipe={recipe}

                                    >
                                    </RecipeCard>)
                                }
                            </div>
            </div>

        </div>
    );
};

export default ChefPage;