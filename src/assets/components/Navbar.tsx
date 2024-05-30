import { useEffect, useState } from 'react'
import logo from '/public/vite.svg'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    //set toggle menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.addEventListener('scroll', handleScroll);

        }

    });

    //navigations array

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Service', path: 'service' },
        { link: 'About', path: 'about' },
        { link: 'Product', path: 'hproduct' },
        { link: 'Testimonial', path: 'testimonil' },
        { link: 'FAQ', path: 'faq' },
    ]

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 border-b bg-black duration-300' : ''}`}>
                <div className='flex justify-between items-center text-base gap-8 mx-4'>
                    <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" /><span className='text-[#263238]'>NEXTCENT</span></a>

                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        {
                            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100}
                                key={path} className='block text-base text-gray-800 hover:text-brandprimary first:font-medium'>{link}</Link>)
                        }
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-brandprimary hover:text-gray-700 font-semibold border hover:border-gray-700 rounded border-brandprimary py-2 px-4'>Login</a>
                        <button className='bg-brandprimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutraldgray font-semibold'>Sign Up</button>
                    </div>

                    <div className='md:hidden cursor-pointer'>
                        <button onClick={toggleMenu} className='text-neutraldgray focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>

                <div className={`space-y-4 px-4 mt-16 text-center mx-12 py-7 bg-brandprimary ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                    {
                        navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100}
                            key={path} className='block text-base text-white hover:text-neutralgray font-normal first:font-medium'>{link}</Link>)

                           
                    } 
                    <div className='space-x-12 lg:flex items-center'>
                        <a href="/" className='lg:flex items-center text-gray-800 hover:text-white font-semibold border-2 hover:border-white rounded border-gray-800 py-2 px-4'>Login</a>
                        <button className='bg-brandprimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutraldgray font-semibold'>Sign Up</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar 