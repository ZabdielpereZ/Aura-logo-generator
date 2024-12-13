import { useAuth0 } from '@auth0/auth0-react'
import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai' 
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import logo from '../assets/logo.png'

const Navbar = () => {
    // Grab user name
    const {user, isAuthenticated} = useAuth0()

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <>
    <div className="flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <img src={logo} alt="Aura Logo" className="w-[420px] h-[420px] object-contain pr-11"/>
        {/* <h1 className="w-full text-3xl font-bold text-[#38c292]">Aura</h1> */}
        <ul className="hidden md:flex">
            <li className="p-4"><a href='/'>Home</a></li>
            <li className="p-4">Generate</li>
            {/* Todo - Show your login name ✅ */}
        { isAuthenticated ? (
            <>
            <a href='/profile' className="p-4">signed in as: {user?.name}</a>
            <LogoutButton />
            </>
         ) : (
            <>
            <LoginButton />
            </> 
         )}
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> : 
        <AiOutlineMenu size={20}/> }
        </div>
        <div className={!nav ? 'fixed left-0 top-2 w-[60%] border-r border-r-gray-900 bg-[#0003] m-4 ease-in-out duration-500' : 'fixed left-[-100%]' }>
            <ul className="pt-24 uppercase p-4">
                <li className="p-4 border-b">Home</li>
                {/* Todo - Show your login name */}
                <li className="p-4 border-b">Generate</li>
                <li  className="p-4">signed in as: {user?.name}</li>
            </ul>
        </div>

    </div>
    </>
  )
}

export default Navbar

// fixed left-0 top-2 w-[60%] border-r border-r-gray-900 bg-[#0003] m-4