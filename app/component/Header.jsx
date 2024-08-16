'use client'
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const Header = () => {
    const [opensideBar, setOpenSideBar] = useState(false)
    const [courses, setCourses] = useState(true)
    const [cohort, setCohort] = useState(true)
    const [quiz, setQuiz] = useState(false)
    // console.log(opensideBar)
    return (
        <header className='border border-[#EAECF0] sticky z-20 bg-white top-0'>
            <div className='container mx-auto flex justify-between px-5 my-2 lg:hidden'>
                <div><h2 className='font-semibold text-xl'>Xplainerr</h2></div>
                <div>
                    <img onClick={() => setOpenSideBar(!opensideBar)} src="/images/menu.png" alt="menu" className='w-[27px] h-[27px] cursor-pointer ' />
                </div>
                <div className={`absolute left-0 top-0 w-[75%] max-w-[375px] h-screen bg-white z-20 ${opensideBar ? 'block' : 'hidden'}`}>
                    <div className="flex justify-between p-2 shadow-sm">
                        <h4 className="text-xl font-bold">Xplainerr</h4>
                        <button onClick={() => setOpenSideBar(!opensideBar)}><IoCloseCircleOutline className="w-[26px] h-[28px] " /></button>
                    </div>
                    <div className="relative flex flex-col gap-4 pt-4">
                        <div onClick={() => setCourses(!courses)} className="flex items-center text-md font-semibold cursor-pointer">
                            <div className="  ml-2 mr-2">Courses</div>
                            <div>
                                {courses ?
                                    <IoIosArrowUp className="w-[22px] h-[22px] " /> :
                                    <IoIosArrowDown className="w-[22px] h-[22px]" />
                                }
                            </div>
                        </div>
                        <div className={`${courses ? 'block' : 'hidden'} border-b border-gray-200 px-2`}>
                            <div className="flex gap-3 items-center ml-2 px-2 py-2 hover:bg-[#EAFCFF] hover:text-[#006BC2] "><img className="w-[30px] h-[20px] " src="https://www.xplainerr.com/images/shared/apiForPm.svg" alt="" /><h4 className="cursor-pointer text-[12px] font-medium">Api for Product Manager</h4></div>
                            <div className="flex gap-3 items-center ml-2 px-2 py-2 hover:bg-[#EAFCFF] hover:text-[#006BC2] "><img className="w-[30px] h-[20px] " src="https://www.xplainerr.com/images/shared/pricing.svg" alt="" /><h4 className="cursor-pointer text-[12px] font-medium">Pricing & Monetization</h4></div>
                            <div className="flex gap-3 items-center ml-2 px-2 py-2 hover:bg-[#EAFCFF] hover:text-[#006BC2] "><img className="w-[30px] h-[20px] " src="https://www.xplainerr.com/images/shared/users.svg" alt="" /><h4 className="cursor-pointer text-[12px] font-medium">UX Writing 101</h4></div>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-4 pt-4">
                        <div onClick={() => setCohort(!cohort)} className="flex items-center text-md font-semibold cursor-pointer">
                            <div className="  ml-2 mr-2">Cohort</div>
                            <div>
                                <div className="flex gap-2">
                                    <button className="flex h-[16px] w-[40px] items-center justify-center rounded-sm bg-[#E7E1FF] px-[2px] mt-1 text-[8px] font-bold text-[#9868FF]">New</button>
                                    {cohort ?

                                        <IoIosArrowUp className="w-[22px] h-[22px] " /> :
                                        <IoIosArrowDown className="w-[22px] h-[22px] " />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`${cohort ? 'block' : 'hidden'} border-b border-gray-200 px-2`}>
                            <div className="flex gap-3 items-center ml-2 px-2 py-2 hover:bg-[#EAFCFF] hover:text-[#006BC2] "><img className="w-[30px] h-[20px] " src="https://www.xplainerr.com/images/shared/noCode.svg" alt="" /><h4 className="cursor-pointer text-[12px] font-medium">Tech for Product Manager</h4></div>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-4 pt-4">
                        <div onClick={() => setQuiz(!quiz)} className="flex items-center text-md font-semibold cursor-pointer">
                            <div className="  ml-2 mr-2">Quiz</div>
                            <div>
                                {quiz ?
                                    <IoIosArrowUp className="w-[22px] h-[22px] " /> :
                                    <IoIosArrowDown className="w-[22px] h-[22px] " />
                                }
                            </div>
                        </div>
                        <div className={` ${quiz ? 'block' : 'hidden'} border-b border-gray-200 px-2`}>
                            <div className="flex flex-col gap-3 items- ml-2 ">
                                <h4 className="cursor-pointer text-[12px] font-medium p-2 hover:bg-[#EAFCFF] hover:text-[#006BC2]">Product Management</h4>
                                <h4 className="cursor-pointer text-[12px] font-medium p-2 hover:bg-[#EAFCFF] hover:text-[#006BC2]">Growth & GTM</h4>
                                <h4 className="cursor-pointer text-[12px] font-medium p-2 hover:bg-[#EAFCFF] hover:text-[#006BC2]">Software engineering</h4>
                            </div>
                        </div>
                        <p className="text-md px-3 font-semibold pt-0">
                            <Link className="" href={'/'}>PM Interview Prep <span className="rounded-[4px] bg-[#FF8C00] px-1.5 py-[1px] text-xs font-medium text-[#fff] ">New</span>
                            </Link>
                        </p>
                        <p className="text-md mb-1 px-3 font-semibold">
                            <Link className="" href={'/'}>Blog</Link>
                        </p>
                        <div className="px-3 "><button className="text-md rounded-md bg-[#0070F4] px-[51px] py-[10px] font-semibold text-white">Login</button></div>
                    </div>
                </div>

                {/* shadow for small devices upto lg */}
                <div onClick={() => setOpenSideBar(!opensideBar)} className={`absolute top-0 right-0 w-full z-10 h-screen bg-black/75 ${opensideBar ? 'block' : 'hidden'}`}>
                </div>
            </div>

            {/* Above Lg Devices */}
            <div className='hidden lg:block container mx-auto px-[63px] pb-1 '>
                <div className='flex justify-between items-center gap-12'>
                    <div className='flex justify-center items-center'>
                        <img src="https://www.xplainerr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzwxa4kttt%2Fxplainer-logo.png&w=32&q=75" alt="" />
                        <h2 className='ml-2 text-2xl font-bold text-[#101828de] '>Xplainerr</h2>
                    </div>
                    <div className='flex gap-5 space-x-2 '>
                        <div className="relative group">
                            <button className='flex justify-center items-center gap-x-1 py-3 outline-none border-b-2 border-[hsl(220,89%,53%)] text-[rgb(28,100,242)] '>Courses <IoIosArrowDown className="transform group-hover:rotate-180 transition-transform duration-200" /></button>
                            <div className=" hidden group-hover:block absolute w-[265px] mt-1 border border-gray-200 bg-white shadow-xl ">
                                <h4 className="py-2 pl-4 pr-5 text-inherit hover:text-[rgb(28,100,242)] hover:bg-[rgb(234,252,255)] border-b text-nowrap cursor-pointer ">API for Product Manager</h4>
                                <h4 className="py-2 pl-4 pr-5 text-inherit hover:text-[rgb(28,100,242)] hover:bg-[rgb(234,252,255)] border-b text-nowrap cursor-pointer">A to Z of Pricing & Monetization</h4>
                                <h4 className="py-2 pl-4 pr-5 text-inherit hover:text-[rgb(28,100,242)] hover:bg-[rgb(234,252,255)] border-b text-nowrap cursor-pointer">UX Writing</h4>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className='flex justify-center items-center gap-x-1 py-3 outline-none hover:text-[rgb(28,100,242)] '>Cohort <IoIosArrowDown className="transform group-hover:rotate-180 transition-transform duration-200" /></button>
                            <div className="hidden group-hover:block cursor-pointer absolute w-[311px] mt-1 border border-gray-200 bg-white shadow-xl ">
                                <div className="group flex gap-x-3 py-2 pl-4 pr-[64px] hover:bg-[rgb(234,252,255)] ">
                                    <div>
                                        <img src="https://www.xplainerr.com/_next/static/media/noCode.b851be91.svg" alt="" className="w-[30px] h-[48px]  scale-150 " />
                                    </div>
                                    <div>
                                        <h4 className="group-hover:text-[rgb(0,107,194)] text-nowrap">Tech For Product Manager</h4>
                                        <button className="h-[20px] rounded-sm bg-[#E0EBFF] px-2 text-[12px] font-bold text-[#4B73FF]">Save ₹7,000</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className='flex justify-center items-center gap-x-1 py-3 outline-none hover:text-[rgb(28,100,242)] '>Quiz <IoIosArrowDown className="transform group-hover:rotate-180 transition-transform duration-200" /></button>
                            <div className=" hidden group-hover:block absolute w-[234px] mt-1 border border-gray-200 bg-white shadow-xl  ">
                                <h4 className="py-2 pl-4 pr-5 text-inherit hover:text-[rgb(28,100,242)] hover:bg-[rgb(234,252,255)]  text-nowrap cursor-pointer">Product Management</h4>
                                <h4 className="py-2 pl-4 pr-5 text-inherit hover:text-[rgb(28,100,242)] hover:bg-[rgb(234,252,255)]  text-nowrap cursor-pointer">Growth & GTM</h4>
                                <h4 className="py-2 pl-4 pr-5 text-inherit hover:text-[rgb(28,100,242)] hover:bg-[rgb(234,252,255)]  text-nowrap cursor-pointer">Software engineering</h4>
                            </div>
                        </div>
                        <Link href={'/'} className="hover:text-[rgb(30,66,159)] py-3">
                            PM INterview Prep <span className="rounded-[4px] bg-[#FF8C00] px-1.5 py-[1px] text-xs font-medium text-[#fff] ">New</span>
                        </Link>
                        <Link href={'/'} className="hover:text-[rgb(30,66,159)] py-3">Blog</Link>
                    </div>
                    <div>
                        <div className="space-x-5">
                            <button className="py-3  text-[rgb(28,100,242)] hover:text-black ">Signup</button>
                            <button className=" px-[25px] py-2 text-sm font-semibold bg-[rgb(28,100,242)] hover:bg-[rgb(30,66,159)] rounded-lg ">
                                <span className="text-white">Login</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header