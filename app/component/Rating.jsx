
const Rating = () => {
  const API =[
    {data1 :'10+',
    data2 :'Chapters covering API basics - request, response, endpoints, types of API etc.'
    },
    {data1 :'4.8/5',
    data2 :'Average rating shared by user. Also, ranked #1 on Product Hunt'
    },
    {data1 :'9k+',
    data2 :'Product Managers have up-skilled through this course'
    },
  ]
  return (
    <section>
      <div className="mx-auto mt-1">
        <div className="border-t border-gray-200 text-white bg-[rgb(3,10,33)] ">
          <div className="mx-auto grid max-w-sm items-start gap-8 pb-12 pt-8 md:max-w-2xl md:grid-cols-2 md:gap-16 md:pt-12 lg:max-w-5xl lg:grid-cols-3">
            {API.map((v,i)=>{
              return(
              <div key={i} className="text-center">
                <div className="font-bold text-[1.75rem] leading-5 mb-1"> {v.data1} </div>
                <div className="text-md text-gray-400">{v.data2}</div>
            </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rating