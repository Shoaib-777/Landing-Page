'use client'
import { useState } from "react"
import { IoIosArrowUp } from "react-icons/io"

const CourseContent = () => {
    const [show,setShow]=useState(true)
    const CourseLessons = [
        { Chapters : 'Introduction to API'},
        { Chapters : 'Types of APIs - REST vs SOAP'},
        { Chapters : 'HTTP Request and Response'},
        { Chapters : 'Working with APIs'},
        { Chapters : 'Postman guide'},
        { Chapters : 'Working on API Integration'},
        { Chapters : 'Handling errors'},
        { Chapters : 'API security'},
        { Chapters : 'Web Hooks'},
        { Chapters : 'API vs SDK'},
        { Chapters : 'Miscellaneous'},
    ]
  return (
    <div className="bg-[#fafafa] mb-[4rem]">
        <div className="container mx-auto">
        <h2 className="pb-5 text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px]  ">Course Content</h2>
        <div className="container mx-auto w-full lg:w-[793px]">
            <div className="mb-5 rounded-md pt-2 lg:px-2">
                <div onClick={()=>setShow(!show)} className="space-x- flex cursor-pointer items-center justify-between rounded-t-xl border border-[#E5E7EB] bg-[rgb(28,100,242)] px-3 py-4 font-semibold text-white hover:bg-[rgb(30,66,159)]  lg:py-[21px] lg:pl-6 lg:pr-5 md:text-md text-base">
                    <p className="text-[17px] font-semibold lg:text-[22px]">Api Lessons</p>
                    <div>
                        <div className="flex items-center justify-center space-x-2 rounded-[10px] bg-[#6394f8] px-2 py-3 text-sm lg:text-lg">
                            <span>11 lessons</span><IoIosArrowUp className="w-[14px] h-[14px] "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`border border-[#fff] text-gray-600 ${show? 'block':'hidden'}`}>
                {CourseLessons.map((v,i)=>{
                    return(
                    <div key={i} className="md:text-md flex items-center justify-between rounded-md border-[#fff] bg-[#fff] pl-3 pr-3 text-xs font-medium text-[#333333] shadow-lg md:text-sm">
                        <div className="flex w-full cursor-pointer justify-between px-2 py-3.5 hover:rounded-md hover:bg-[#F5F7F7]">
                            <div className="flex items-center justify-center gap-2 ">
                                <img src="https://www.xplainerr.com/images/mock/Docicon.svg" alt="" />
                                <p className="text-sm font-medium text-[#5f5f60] lg:text-base">1.{i+1} {v.Chapters}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </div>
    </div>
  )
}

export default CourseContent