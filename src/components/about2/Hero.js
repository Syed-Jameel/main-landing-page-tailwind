export default function Hero() {
    return (
        <div className="bg-yellow-0 px-4 sm:px-4 py-10 grid grid-cols-1 lg:grid-cols-1 sm:gap-y-6 lg:gap-x-4">
            <div className="  bg-white flex flex-col justify-center items-start space-y-6">
                <h1 className="text-gray-800 text-4xl sm:text-7xl font-bold pr-24">
                    About 3
                </h1>
                <p className="text-gray-900 opacity-90  text-lg font-normal leading-6">
                    Leave us a little info, and we’ll be in touch.
                </p>
                <button className="bg-blue-600 group  flex  items-center transition duration-500 hover:bg-gray-800 text-white text-base font-semibold py-1 px-3 mt-6 rounded">
                    Contact Us
                </button>
            </div>
        </div>

    )
}