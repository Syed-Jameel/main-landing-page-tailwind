export default function Leads() {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl mt-0 sm:mt-0 px-4 py-0 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                <div className=" px-2 py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-5 gap-y-6 sm:gap-x-4">

                    {/* Left section */}
                    <div className="col-span-3 ">
                        <div className="flex flex-col sm:flex-row  justify-start items-center space-y-10 sm:space-x-16 py-6 sm:py-10">
                            <div className='bg-gray-0 space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <i className="bi bi-box-fill text-2xl text-red-600"></i>
                                    <span className="text-gray-700 text-4xl font-bold ">
                                        28+
                                    </span>
                                </div>

                                <p className="text-gray-900 opacity-90  text-lg font-semibold">
                                    designers and<br />
                                    developers
                                </p>

                                <p className="text-gray-700 opacity-90  text-base font-normal">
                                    Using year-over-year approaches and the latest technologies, we will ensure that your new website will be <b>visible, accessible, and treads lightly.</b>
                                </p>
                            </div>
                            <div className='bg-gray-0 space-y-2'>
                                <div className='flex justify-start items-center space-x-2'>
                                    <i className="bi bi-pentagon-half text-2xl text-red-600"></i>
                                    <span className="text-gray-700 text-4xl font-bold ">
                                        35+
                                    </span>

                                </div>


                                <p className="text-gray-900 opacity-90  text-lg font-semibold">
                                    awards for digital<br />
                                    innovation
                                </p>
                                <p className="text-gray-700 opacity-90 text-base font-normal">
                                    We’ve structured our workflow processes were from the funny <b>the century rather</b>, initial all the made, have spare to negatives.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="col-span-2">

                    </div>

                </div>
            </div>
        </div>
    )
}
