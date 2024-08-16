import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const CreatorSection = () => {
    const CreatorsData = [
        { image: 'https://www.xplainerr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzwxa4kttt%2F1661931118137.jpeg&w=256&q=75',
            name: 'Deepak Kumar',
            href: 'https://www.linkedin.com/in/dipakkr',
            about: 'Deepak currently works as a Software engineer 2 at Airmeet and has taught API to 100s of aspiring product managers and software engineers with API Masterclass series.',
        },
        { image: 'https://www.xplainerr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzwxa4kttt%2F1621098083610.jpeg%3FupdatedAt%3D1677357898740&w=256&q=75',
            name:'Venkatesh Gupta',
            href: 'https://www.linkedin.com/in/venkateshgupta5',
            about: 'Venkatesh currently works as a fintech Product Manager at Razorpay. He excels in building API products and has written a famous blog - API for Product Managers which has 1Mn+ impressions. You can reach out to him on LinkedIn. ',
        },
    ]
  return (
    <section>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:py-12">
            <div>
                <div className="mx-auto max-w-3xl pb-12 text-center ">
                    <h2 className="mt-8 text-center text-3xl font-semibold text-[#101828DE] lg:mt-1 lg:text-[36px] ">Meet the creators</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {CreatorsData.map((v,i)=>{
                    return(
                <div key={i} className="rounded-xl border px-2 py-5 shadow-lg lg:px-16 ">
                    <div className="mb-4 mt-2 lg:flex">
                        <figure className="mb-8 flex max-w-none shrink-0 rounded sm:mb-0 sm:max-w-xs lg:max-w-none">
                            <img src={v.image} alt="" />
                        </figure>
                        <div className="sm:ml-4 sm:mt-4 lg:ml-16">
                            <div className="flex items-center space-x-2">
                                <h4 className="mb-2 text-base font-medium lg:text-lg lg:font-semibold">{v.name} </h4>
                                <Link href={`${v.href}`}><FaLinkedin className="fill-[rgb(37,99,235)] w-6 h-5 mb-1 "/></Link>
                            </div>
                                
                            <p className="text-md lg:text-md mb-8 text-gray-800">{v.about}<br/></p>
                        </div>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default CreatorSection