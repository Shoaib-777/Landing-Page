'use client'
import { useState, useEffect } from 'react';

const GetFreeChapter = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      let lastScrollTop = 0;
  
      const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          setIsVisible(true);
        } else {
          // Scrolling up
          setIsVisible(false);
        }
  
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (<>
    <div className='fixed bottom-2 w-full px-4 md:hidden '>
        <button className='text-white text-nowrap font-semibold text-xl text-center w-full py-4 rounded-lg bg-[rgb(37,99,235)]'>Get Free Chapter</button>
    </div>
    <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} lg:flex lg:fixed bottom-1 w-full lg:items-center lg:justify-between bg-[#16528a] px-[68px] py-4`}>
        <div className='text-white'>
            <strong>Become a API Product Manager</strong><br />
            <p>Crack technical rounds of PM Interview with ease</p>
        </div>
        <div>
            <button className='w-[220px] h-[56px] text-white bg-[rgb(37,99,235)] font-semibold hover:bg-[rgb(30,66,159)] rounded-md '>Get Free Chapter</button>
        </div>
    </div>
    </>)
}

export default GetFreeChapter