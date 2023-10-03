import { ChatBubbleLeftRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid";


export default function Contact() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] ">
            <div className="h-[400px] sm:h-auto">
                <iframe
                    className="w-full h-full"
                    title="Current Location"

                    src="https://maps.google.com/maps?width=800&height=500&hl=en&q=Office No 28 First Floor Amol Sagar State Poona College Road, Hidayatulla Rd, Agarwal Colony, Camp, Pune, Maharashtra 411001&t=&z=19&ie=UTF8&iwloc=B&output=embed"
                />
            </div>
            <div className='flex items-center justify-start'>
                <div className='w-1/2 bg-white h-full flex justify-start items-start p-16'>
                    <div className="space-y-6">
                        <ChatBubbleLeftRightIcon className='w-12 h-12 m-2 text-gray-600 bg-gray-200 p-2 rounded-full' />
                        <div className="mb-2 space-y-4">
                            <div className="text-gray-600 text-base">
                                <span className="text-gray-900 text-lg font-bold">Get in touch</span>
                                <div className=" leading-6">
                                    Work and general inquiries
                                    <br />
                                    <b>+1.809.120.6705</b>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 space-y-1">
                            <h6 className="text-gray-900 text-base font-bold">Assistance hours:</h6>
                            <div className="text-gray-600 text-base">
                                <span> Monday – Friday.</span>
                                <div>
                                    6 am to 8 pm EST
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-1/2 bg-gray-100 h-full flex justify-start items-start p-16'>
                    <div className="space-y-6">
                        <EnvelopeIcon className='w-12 h-12 m-2 text-gray-600 bg-gray-200 p-2 rounded-full' />
                        <div className="mb-2 space-y-4">
                            <div className="text-gray-600 text-base">
                                <span className="text-gray-900 text-lg font-bold">Post address</span>
                                <div className=" leading-6">
                                    541 Melville Ave, Palo Alto,<br />
                                    CA 94301,<br />
                                    United States
                                </div>
                            </div>
                        </div>



                    </div></div>
            </div>
        </div>
    )
}
