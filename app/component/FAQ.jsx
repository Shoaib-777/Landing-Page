'use client'
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const FaqData = [
        { question: 'How long can I access this course?', answer: 'You will have lifetime access to the course.' },
        { question: 'How can I purchase the ebook?', answer: 'To purchase the course, click on the Buy Now button. Once the payment is successful, please check your dashboard to view the course content.' },
        { question: 'Can I pay via UPI to purchase the course?', answer: 'Yes, to purchase this course via UPI, please reach out to us on chat support available on bottom right or write to us at dipakkr.co@gmail.com' },
        { question: 'I have completed the payment, how can I access the course?', answer: 'Once the payment is complete, your course will be visible in the dashboard section. If you encounter any issues, please try logging out and logging back in. If the problem persists, please reach out to us via the chat support available at the bottom right or send us an email at dipakkr.co@gmail.com.' },
    ];

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section>
            <div className="mx-auto px-4 mb-[5rem] ">
                <h2 className="text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px] py-[2rem]">Frequently asked questions</h2>
                <div className="mt-2 px-4 md:px-5 lg:px-64">
                    {FaqData.map((v, i) => (
                        <div key={i} className="border-y border-gray-200 py-6">
                            <div className="flex sticky items-center cursor-pointer" onClick={() => handleClick(i)}>
                                <div>
                                    {openIndex === i ? 
                                        <FaMinus className="w-8 h-8 fill-[rgb(0,112,244)]" /> : 
                                        <IoMdAdd className="w-8 h-8 fill-[rgb(0,112,244)]" />
                                    }
                                </div>
                                <div>
                                    <p className="text-xl font-medium pl-4 ">{v.question}</p>
                                </div>
                            </div>
                            <div className={`mt-3 ${openIndex === i ? 'block' : 'hidden'} pl-10 text-gray-600`}>
                                {v.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;