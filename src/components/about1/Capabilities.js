"use client"
import React, { useState } from 'react'
import Accordion from '../common/Accordion';

const accordionData = [
    {
        id: 1,
        title: "Website & Mobile App Design",
        description: "Using year-over-year design approaches and latest techs, we will ensure that your new website will be visible, accessible, and treads lightly.",
    },
    {
        id: 2,
        title: "Motion Graphics & Animation",
        description:
            "Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.",
    },
    {
        id: 3,
        title: "User Experience",
        description:
            "Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.",
    }

];


export default function WebAndMobile() {
    const [activeId, setActiveId] = useState(null);


    return (

        <div className="px-4 py-6  grid grid-cols-1 lg:grid-cols-2 gap-y-6 sm:gap-x-4">

            {/* Left section */}
            <div className="">
                <div className="flex flex-col justify-start items-start space-y-4 sm:pr-4 ">
                    <h3 className="text-gray-600 uppercase font-medium">capabilities</h3>
                    <h1 className="text-gray-800 text-4xl sm:text-5xl font-bold ">
                        Putting our focus on
                        changing the way people
                        think of mobile
                        experience.
                    </h1>

                </div>
            </div>

            {/* Right section */}
            <div className="flex justify-center items-baseline ">
                <div className='w-full sm:w-[60%]'>
                    {accordionData.map((item) => {
                        return (
                            <Accordion
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                activeId={activeId}
                                setActiveId={setActiveId}
                            ></Accordion>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}
