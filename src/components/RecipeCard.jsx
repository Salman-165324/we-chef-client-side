import React from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { FaHeart } from 'react-icons/fa';
const RecipeCard = ({ recipe }) => {

    const handleFavoriteRecipe = () => {

        
    }

    const { id, cookingMethod, ingredients, picture, ratings, recipeName } = recipe
    console.log(recipeName);
    return (
        <div>
            <div className='w-[300px] md:w-[360px] mx-auto pb-4 border-4 '>
                <div className='relative'>
                    <img className='h-72 object-cover w-full' src={picture} alt="" />
                    <FaHeart className='text-5xl text-[#d6766f] absolute top-1 left-2 stroke-slate-900 stroke-2 hover:text-red-600'></FaHeart>
                </div>
                

                <div className='px-3 py-2'>
                    <div className='w-24'>
                        <Rating className='h-9' isRequired value={ratings} readOnly />
                    </div>
                    <h4 className='font-semibold text-lg'>{recipeName}</h4>
                    <div className='mt-4'>
                        <h5 className='font-semibold'>Cooking Method:</h5>
                        <p className='mt-1'>{cookingMethod}</p>
                    </div>
                    <div>
                        <h5 className='mt-4 font-semibold'>Ingredients: </h5>
                        <ul className='mt-2 flex gap-x-10 flex-wrap list-disc ml-6'>

                            {
                                ingredients.map( (ingredient, index) => {

                                    return( 
                                        <li 
                                            className=''
                                            key={index}
                                        >{ingredient}</li>
                                        
                                        )
                                })
                            }

                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RecipeCard;