import Image from "next/image"
import W from '../../../public/W.png'
import Webby from '../../../public/Webby.png'
import FWA from '../../../public/FWA.png'

export default function Awards() {
    return (
        <div className="mx-auto max-w-2xl mt-0 sm:mt-0 px-6 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
            <div className=" grid grid-cols-1 lg:grid-cols-2 sm:gap-x-4 space-y-4">
                <div className='space-y-4'>
                    <h3 className="text-gray-500 uppercase font-medium">awards & honors</h3>
                    <h1 className="text-gray-800 text-3xl sm:text-4xl pb-4  font-bold">
                        The awards won<br />
                        by our project.
                    </h1>


                </div>

                <div className='space-y-10'>
                    <p className="text-gray-600  text-lg font-normal leading-6">
                        Our clients describe us as a product team which <b>creates amazing UI/UX</b> experiences, <b>by crafting top-notch</b> user experience.
                    </p>

                    <div className="flex flex-wrap justify-between  gap-y-10 ">
                        <div className=' pe-4 space-y-2'>
                            <Image src={W} alt="SelectionAll" className='w-[150px] h-[50px] hover:scale-110 transition duration-300' />
                            <p className='text-gray-500 text-base '>5x Developer Award</p>

                        </div>
                        <div className=' pe-4 space-y-2'>
                            <Image src={Webby} alt="SelectionAll" className='w-[150px] h-[50px] hover:scale-110 transition duration-300' />
                            <p className='text-gray-500 text-base'>3x Site of the Day</p>

                        </div>
                        <div className=' pe-4 space-y-2'>
                            <Image src={FWA} alt="SelectionAll" className='w-[150px] h-[50px] hover:scale-110 transition duration-300' />
                            <p className='text-gray-500 text-base'>5x Mobile of the Day</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
