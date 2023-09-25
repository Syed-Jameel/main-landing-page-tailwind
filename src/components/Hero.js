import React from 'react'
import { PlayIcon } from "@heroicons/react/20/solid";
import appStore from "../../public/appstore.webp"
import iphoneMockup from "../../public/iPhoneMockup.png"
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="min-h-screen ">
            <div className="mx-auto max-w-2xl mt-12 sm:mt-2 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="bg-gray-0 sm:py-14 grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* Left section */}
                    <div className="bg-gray-0 space-y-10 px-16 py-4">
                        <div className="flex items-center justify-between  gap-x-4">
                            <div className="flex items-center justify-center space-x-2">
                                <button className="w-16 h-16 bg-gray-900 hover:bg-blue-700 shadow-md hover:shadow-lg rounded-full flex justify-center items-center"><PlayIcon className='w-8 h-8 text-white' /></button>
                                <h3 className="text-purple-900 font-medium">Play Promo</h3>
                            </div>
                        </div>
                        <h1 className="text-purple-900 text-5xl font-bold">
                            Get more, <br />
                            make less
                        </h1>
                        <p className="text-purple-900 opacity-90  text-lg font-normal leading-6">
                            A mobile data tracking experience for your online business budegt.
                        </p>
                        <div className="space-y-2">
                            <p className="text-purple-900 opacity-90  text-lg font-normal leading-6">Available now</p>
                            <Image src={appStore} width={150} height={100} alt="app store" />
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="bg-gray-0 relative col-span-2 flex justify-center ">
                        <div className="bg-red-100 absolute z-10 w-[70%] min-h-full">&nbsp;</div>
                        <Image src={iphoneMockup} className="bsolute z-20 w-[90%]" alt="iphoneMockup" />
                    </div>
                </div>
            </div>
        </div>
    )
}
