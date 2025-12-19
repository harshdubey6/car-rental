import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import {motion} from 'motion/react'

const Navbar = () => {

    const {setShowLogin, user, logout, isVendor, isAdmin, setLoginType} = useAppContext()

    const location = useLocation()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleVendorClick = () => {
        if(user){
            if(isVendor){
                navigate('/vendor')
            } else {
                toast.error('Please login as vendor')
                setLoginType('vendor')
                setShowLogin(true)
            }
        } else {
            setLoginType('vendor')
            setShowLogin(true)
        }
    }

    const handleAdminClick = () => {
        if(user){
            if(isAdmin){
                navigate('/admin')
            } else {
                toast.error('Please login as admin')
                setLoginType('admin')
                setShowLogin(true)
            }
        } else {
            setLoginType('admin')
            setShowLogin(true)
        }
    }

  return (
    <motion.nav 
    initial={{y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.5}}
    className={`px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-4 text-gray-700 border-b border-gray-200 relative transition-all backdrop-blur-md bg-white/95 ${location.pathname === "/" && "bg-gradient-to-b from-white/98 to-white/95"}`}>
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-3">

        <Link to='/' className="flex items-center gap-2">
            <motion.img 
                whileHover={{scale: 1.05}} 
                whileTap={{scale: 0.95}}
                src={assets.logo} 
                alt="logo" 
                className="h-8 transition-all"
            />
            <span className="hidden sm:block font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
            {menuLinks.map((link, index)=> (
                <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                >
                    <Link 
                        to={link.path}
                        className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                        {link.name}
                    </Link>
                </motion.div>
            ))}

            <motion.div 
                className='flex items-center text-sm gap-2 border border-gray-300 px-4 py-2.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-all'
                whileHover={{ scale: 1.02 }}
            >
                <input 
                    type="text" 
                    className="py-1 w-48 bg-transparent outline-none placeholder-gray-500 text-gray-700" 
                    placeholder="Search cars"
                />
                <img src={assets.search_icon} alt="search" className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity"/>
            </motion.div>
        </div>

        {/* Desktop Actions */}
        <div className='hidden md:flex items-center gap-4'>
            {!isAdmin && (
                <motion.button 
                    onClick={handleVendorClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg transition-all"
                >
                    {isVendor ? '📊 Vendor Dashboard' : '🏢 Vendor Login'}
                </motion.button>
            )}
            
            {!isVendor && (
                <motion.button 
                    onClick={handleAdminClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-all"
                >
                    {isAdmin ? '⚙️ Admin Panel' : '🔐 Admin Login'}
                </motion.button>
            )}

            <motion.button 
                onClick={()=> {user ? logout() : (setLoginType('user'), setShowLogin(true))}} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg text-sm"
            >
                {user ? 'Logout' : 'Sign In'}
            </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
            className='md:hidden cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-all' 
            aria-label="Menu"
            onClick={()=> setOpen(!open)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.svg 
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </motion.svg>
        </motion.button>

        {/* Mobile Menu */}
        <motion.div 
            animate={{ 
                opacity: open ? 1 : 0,
                y: open ? 0 : -20,
                pointerEvents: open ? 'auto' : 'none'
            }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-16 inset-x-4 sm:inset-x-6 bg-white border border-gray-200 shadow-xl z-50 rounded-2xl overflow-hidden`}
        >
            <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
                    <img src={assets.search_icon} alt="search" className="w-4 h-4 opacity-70"/>
                    <input 
                        type="search" 
                        placeholder="Search cars" 
                        className="flex-1 bg-transparent text-sm text-gray-700 outline-none"
                    />
                </div>

                {menuLinks.map((link, index)=> (
                    <Link 
                        key={index}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`text-sm font-medium py-2 transition-colors ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                        {link.name}
                    </Link>
                ))}

                <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
                    {!isAdmin && (
                        <motion.button 
                            onClick={()=> {handleVendorClick(); setOpen(false)}}
                            whileHover={{ scale: 1.02 }}
                            className="w-full px-4 py-2.5 text-sm font-medium text-green-600 bg-green-50 rounded-lg transition-all text-left"
                        >
                            {isVendor ? '📊 Vendor Dashboard' : '🏢 Vendor Login'}
                        </motion.button>
                    )}
                    
                    {!isVendor && (
                        <motion.button 
                            onClick={()=> {handleAdminClick(); setOpen(false)}}
                            whileHover={{ scale: 1.02 }}
                            className="w-full px-4 py-2.5 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg transition-all text-left"
                        >
                            {isAdmin ? '⚙️ Admin Panel' : '🔐 Admin Login'}
                        </motion.button>
                    )}

                    <motion.button 
                        onClick={()=> {user ? logout() : (setLoginType('user'), setShowLogin(true)); setOpen(false)}}
                        whileHover={{ scale: 1.02 }}
                        className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium text-sm"
                    >
                        {user ? 'Logout' : 'Sign In'}
                    </motion.button>
                </div>
            </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
