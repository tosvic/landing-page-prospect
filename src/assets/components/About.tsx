import sidepix from '/public/Frame.png'

const About = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={sidepix} alt="" className='w-[300px]' />
                    </div>

                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutraldgray font-semibold mb-4 md:w-4/5'>the unseen of spending three years at pixelgrade</h2>
                        <p className='md:w-3/4 text-sm text-neutralgray mb-8'>Lorem  adipisicing elit. Nemo et laudantium ducimus
                            fugit magni provident incidunt, sequi placeat soluta, labore maxime dolorum non
                            iste magnam ratione tempora voluptate inventore omnis.</p>
                        <button className='btn-primary'>learn more</button>

                    </div>
                </div>

            </div>


            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralsilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutraldgray font-semibold mb-4 md:w-2/3'>Helping local businesses reevent <span className='text-brandprimary '>the will</span></h2>
                        <p className='md:w-3/4 text-sm text-neutralgray mb-8 '>hello business business</p>
                    </div>
                </div>


                <div className='md:w-1/2 mx-auto flex sm:flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex item-center gap-4'>
                            <img src="/public/icons/log1.png" alt="" />
                        </div>
                        <div>
                            <h4 className='text-2xl text-neutraldgray font-semibold'> 1,2,3,4,444</h4>
                            <p>members</p>


                            <div className='flex item-center gap-4'>
                                <img src="/public/icons/log1.png" alt="" />
                            </div>
                            <div>
                                <h4 className='text-2xl text-neutraldgray font-semibold'> 1,2,3,4,444</h4>
                                <p>members</p>
                            </div>


                            <div className='flex item-center gap-4'>
                                <img src="/public/icons/log1.png" alt="" />
                            </div>
                            <div>
                                <h4 className='text-2xl text-neutraldgray font-semibold'> 1,2,3,4,444</h4>
                                <p>members</p>
                            </div>

                            <div className='flex item-center gap-4'>
                                <img src="/public/icons/log1.png" alt="" />
                            </div>
                            <div>
                                <h4 className='text-2xl text-neutraldgray font-semibold'> 1,2,3,4,444</h4>
                                <p>members</p>
                            </div>


                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default About