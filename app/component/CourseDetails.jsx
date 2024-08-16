
const CourseDetails = () => {
    const API = [
        {
            color:'rgb(145, 230, 193)',
            title:'Introduction to APIs',
            description:'Why do we even need an API? What is an API?'
        },
        {
            color:'rgb(145, 176, 230)',
            title:'Types of APIs',
            description:'Learn about REST, SOAP, GraphQL, Websocket, webhooks etc.'
        },
        {
            color:'rgb(192, 145, 230)',
            title:'Request & Response',
            description:'Learn about HTTP request, response, endpoint etc.'
        },
        {
            color:'rgb(230, 188, 145)',
            title:'Work with Postman',
            description:'Learn how to make HTTP requests using Postman'
        },
        {
            color:'rgb(181, 182,255)',
            title:'API Integration',
            description:'Build sample app by integrating with 3rd party APIs'
        },
        {
            color:'rgb(230, 145, 158)',
            title:'Others',
            description:'Learn about webhooks, SDKs, Oauth, API rate limiting, etc'
        },
    ]
  return (
    <section className="bg-[#F5F5F7] ">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pt-6 pb-16 ">
                <div className="mx-auto max-w-3xl pb-4 text-center md:py-6 md:pb-8">
                    <h2 className="text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px] "> What will you learn? </h2>
                    <p className="pb-8 pt-2.5 text-center text-base font-medium text-[#475467] md:text-lg ">Learn the what, why and how of APIs and terms like - request, response, endpoints, query parameters, error codes, Oauth, webhooks etc in depth.</p>
                </div>
                <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                    {API.map((v,i)=>{
                        return(
                    <div key={i} className={`relative mt-2 flex cursor-pointer flex-col items-center rounded border bg-white p-8 text-center shadow-xl transition duration-700 ease-out hover:-translate-y-1`} style={{background:`${v.color}`}}>
                        <h4 className="text-md mb-1 font-bold leading-snug tracking-tight">{v.title}</h4>
                        <p className="text-black-600 text-center">{v.description}</p>
                    </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default CourseDetails