import Image from "next/image";

export default function Leads() {
    return (

        <div className=" px-4 py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-2 gap-y-6 sm:gap-x-4">
            <div className="flex flex-col sm:flex-row  justify-start items-center space-y-10 sm:space-y-0  py-6 sm:py-10">
                <div className='bg-[#D20C2B] w-[300px] p-10 space-y-2 text-white'>
                    <div className='flex justify-start items-center space-x-2'>
                        <i className="bi bi-box-fill text-2xl "></i>
                        <span className=" text-4xl font-bold ">
                            28+
                        </span>
                    </div>

                    <p className="  text-lg font-semibold">
                        designers and<br />
                        developers
                    </p>
                </div>

                <div className='bg-[#181517]  w-[300px] p-10 space-y-2 text-white'>
                    <div className='flex justify-start items-center  space-x-2'>
                        <i className="bi bi-pentagon-half text-2xl"></i>
                        <span className="text-4xl font-bold ">
                            35+
                        </span>
                    </div>

                    <p className="text-lg font-semibold">
                        awards for digital<br />
                        innovation
                    </p>
                </div>
            </div>
        </div>
    )
}
