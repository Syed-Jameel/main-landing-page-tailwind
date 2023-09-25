import PricingChild from './PricingChild';

export default function Pricing() {

    return (
        <div className="">
            <div className="mx-auto max-w-2xl mt-12 sm:mt-2 px-4 py-0 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                <div className=" sm:py-6 grid grid-cols-1 lg:grid-cols-5 gap-4">

                    {/* Left section */}
                    <div className="col-span-2 bg-gray-0">
                        <div className=" px-16 flex flex-col justify-center items-start space-y-6 ">
                            <h3 className="text-gray-700 uppercase font-medium -mb-4">no hidden fees</h3>

                            <h1 className="text-white text-5xl font-bold pr-24">
                                Simple pricing.
                            </h1>
                            <p className="text-gray-300 opacity-90  text-lg font-normal leading-6">
                                Offer valid on January 5, 2022 for a limited time only.
                            </p>
                        </div>

                    </div>

                    {/* Right section */}
                    <div className="col-span-3 flex ms-14 pe-16 bg-gray-0 space-x-4">
                        <PricingChild />
                    </div>

                </div>
            </div>
        </div>
    )
}
