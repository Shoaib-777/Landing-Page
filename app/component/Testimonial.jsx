import { TestimonialData } from "../api/TestimonialData"

const Testimonial = () => {
  return (
    <div className='relative mx-auto max-w-6xl p-4 px-4 sm:px-6 lg:py-12'>
      <h2 className="pb-8 text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px]">Not just testimonials! <br className="hidden lg:block"/> Find love letter from our learners ❤️</h2>
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
        {TestimonialData.map((v,i)=>{
          return(
        <div key={i} className='rounded-md border p-5'>
            <div className='flex items-center gap-3'>
              <img src={v.profile} alt="" />
              <div>
              <h4 className="font-bold">{v.username}</h4>
              <p>{v.Role}</p>
            </div>
          </div>
          <div className='flex gap-1 py-3'>
            <img className="w-5 h-5" src="/images/star.png" alt="" />
            <img className="w-5 h-5" src="/images/star.png" alt="" />
            <img className="w-5 h-5" src="/images/star.png" alt="" />
            <img className="w-5 h-5" src="/images/star.png" alt="" />
            <img className="w-5 h-5" src="/images/star.png" alt="" />
          </div>
          <p className='py-2'>{v.comment}</p>
          <p className='text-sm text-gray-500'>{v.createdAt}</p>
        </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonial