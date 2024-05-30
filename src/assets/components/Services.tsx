



const Services = () => {

    const services = [
        { id: 1, title: 'membership organisation', description: 'our membership management provides full automation', img: '/public/icons/log1.png' },
        { id: 2, title: 'National Association', description: 'our membership management provides full automation', img: '/public/icons/log2.png' },
        { id: 3, title: 'Clubs and Groups', description: 'our membership management provides full automation', img: '/public/icons/log3.png' },
    ]

    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto '>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutraldgray font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralgray '>we have been working with come fortune 500+ clients</p>

                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src="/public/icons/log1.png" alt="" />
                    <img src="/public/icons/log2.png" alt="" />
                    <img src="/public/icons/log3.png" alt="" />
                    <img src="/public/icons/log4.png" alt="" />
                    <img src="/public/icons/log5.png" alt="" />
                    <img src="/public/icons/log6.png" alt="" />
                    <img src="/public/icons/log7.png" alt="" />
                </div>
            </div>

            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutraldgray font-semibold mb-3'>mange your entire commuity in a signle system</h2>
                <p className='text-neutralgray '>who is this suitable for</p>
            </div>


            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12  '>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'> <img src={service.img} alt="" className='-ml-5'/></div>
                            <h4 className='text-2xl font-bold text-neutraldgray mb-2 px-2'>{ service.title }</h4>
                            <p className='text-sm text-neutralgray'>{service.description}</p>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}

export default Services