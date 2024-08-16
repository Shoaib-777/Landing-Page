import Link from "next/link"

const Pricing = () => {
  return (
    <div className="container mx-auto mb-[5rem]">
        <div className="flex flex-col md:flex-row gap-5 lg:px-12 2xl:items-center 2xl:gap-0 justify-between pt-[4rem]">
            <div className="hidden basis-1/2 md:flex lg:basis-6/12 justify-center items-start py-2 ">
                <img src="https://www.xplainerr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzwxa4kttt%2Fcourses%2Fapi-review.webp&w=640&q=75" alt="" className="w-[237px] h-[268px] " />
            </div>
            <div className="basis-1/2 lg:basis-7/12 px-6 mx-auto  flex flex-col justify-center md:justify-normal">
                <div className="flex justify-center md:justify-normal">
                    <img src="https://ik.imagekit.io/zwxa4kttt/courses/api-badge.svg" alt="" />
                </div>
                <h1 className="mb-4 mt-3 text-4xl font-bold lg:font-extrabold">API Product Manager course</h1>
                <div>
                    <p className="lg:text-md pb-4 text-lg font-[400]">✔️ Trusted by 7300+ PMs. Lifelong access. 10+ chapters</p>
                    <p className="lg:text-md pb-4 text-lg font-[400]">✔️ Crack PM interview technical rounds with ease</p>
                    <p className="lg:text-md pb-4 text-lg font-[400]">✔️ Transform your product strategy with API skills</p>
                    <p className="lg:text-md pb-4 text-lg font-[400]">✔️ Elevate your career with API knowledge</p>
                </div>
                <div className="mb-4 mt-2">
                    <p className=""><span className="text-3xl font-bold">₹ 999</span> <span className="text-[#7b7b7b] line-through">₹1,999</span> <span className="rounded-[4px] bg-[#FF8C00] px-1.5 py-[3px] text-xs font-medium text-[#fff] ">50% OFF</span>
                    </p>
                </div>
                <div className="flex cursor-pointer flex-row gap-6 lg:flex-row lg:items-center">
                    <div className="w-full">
                        <Link href={'/'}><button className="w-full rounded-md bg-[rgb(28,100,242)] py-4 font-medium text-white hover:bg-[rgb(30,66,159)] lg:mt-0 lg:w-[196px] lg:px-9">Buy Now</button></Link>
                    <p className="mt-2">Interested in a free chapter?<span className="text-blue-600 "> Get it now</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing