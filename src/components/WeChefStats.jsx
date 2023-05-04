import React from 'react';
import { BiDish } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import {TbArticle, TbChefHat} from 'react-icons/tb'
const WeChefStats = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">We Chef in numbers</h1>

                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center justify-center">
                            <div>
                                <FaUsers className='text-5xl text-center text-[#d6766f]'></FaUsers>
                            </div>
                            <h2 className="mt-3 title-font font-medium text-3xl text-gray-900">5 Million</h2>
                            <p className="leading-relaxed">Members</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center justify-center">
                            <div>
                                <BiDish className='text-5xl text-center text-[#d6766f]'></BiDish>
                            </div>
                            <h2 className="mt-3 title-font font-medium text-3xl text-gray-900">10 Million</h2>
                            <p className="leading-relaxed">Recipes</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center justify-center">
                            <div>
                                <TbChefHat className='text-5xl text-center text-[#d6766f]'></TbChefHat>
                            </div>
                            <h2 className="mt-3 title-font font-medium text-3xl text-gray-900">50K </h2>
                            <p className="leading-relaxed">Chefs</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center justify-center">
                            <div>
                                <TbArticle className='text-5xl text-center text-[#d6766f]'></TbArticle>
                            </div>
                            <h2 className="mt-3 title-font font-medium text-3xl text-gray-900">10K</h2>
                            <p className="leading-relaxed">Articles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeChefStats;