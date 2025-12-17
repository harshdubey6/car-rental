import React from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';

const Login = () => {

    const {setShowLogin, axios, setToken, navigate} = useAppContext()

    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const onSubmitHandler = async (event)=>{
        try {
            event.preventDefault();
            setIsLoading(true);
            const {data} = await axios.post(`/api/user/${state}`, {name, email, password})

            if (data.success) {
                navigate('/')
                setToken(data.token)
                localStorage.setItem('token', data.token)
                setShowLogin(false)
                toast.success(state === 'login' ? 'Welcome back!' : 'Account created successfully!')
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
        
    }

    const inputVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4
            }
        })
    };

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={()=> setShowLogin(false)} 
        className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
    >

      <motion.form 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
        onSubmit={onSubmitHandler} 
        onClick={(e)=>e.stopPropagation()} 
        className="flex flex-col gap-6 w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white"
      >

        {/* Header */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-center"
        >
            <h2 className="text-3xl font-bold text-gray-900">
                {state === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-600 mt-2">
                {state === "login" ? "Sign in to your account" : "Join us today"}
            </p>
        </motion.div>

        {/* Close Button */}
        <motion.button
            type="button"
            onClick={()=> setShowLogin(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </motion.button>

        {/* Name Field - Only for Register */}
        {state === "register" && (
            <motion.div
                custom={0}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-2"
            >
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                    type="text" 
                    required 
                />
            </motion.div>
        )}

        {/* Email Field */}
        <motion.div
            custom={state === "register" ? 1 : 0}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2"
        >
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
            <input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                type="email" 
                required 
            />
        </motion.div>

        {/* Password Field */}
        <motion.div
            custom={state === "register" ? 2 : 1}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2"
        >
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                placeholder="••••••••" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                type="password" 
                required 
            />
        </motion.div>

        {/* Toggle Link */}
        <motion.div
            custom={state === "register" ? 3 : 2}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
        >
            {state === "register" ? (
                <p className="text-sm text-gray-600">
                    Already have account? 
                    <button
                        type="button"
                        onClick={() => {setState("login"); setName(""); setEmail(""); setPassword("");}}
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors ml-1"
                    >
                        Sign in
                    </button>
                </p>
            ) : (
                <p className="text-sm text-gray-600">
                    Don't have account? 
                    <button
                        type="button"
                        onClick={() => {setState("register"); setName(""); setEmail(""); setPassword("");}}
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors ml-1"
                    >
                        Create one
                    </button>
                </p>
            )}
        </motion.div>

        {/* Submit Button */}
        <motion.button 
            custom={state === "register" ? 4 : 3}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
            {isLoading ? (
                <>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Processing...
                </>
            ) : (
                state === "register" ? "Create Account" : "Sign In"
            )}
        </motion.button>

        {/* Divider */}
        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or continue with</span>
            </div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-3">
            <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
            </motion.button>
            <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
            </motion.button>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default Login
