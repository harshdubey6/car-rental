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
      </motion.form>
    </motion.div>
  )
}

export default Login
