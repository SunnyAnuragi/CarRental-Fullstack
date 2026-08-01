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

    const handleGoogleCallback = async (response) => {
        try {
            const { data } = await axios.post('/api/user/google-login', { token: response.credential });
            if (data.success) {
                navigate('/');
                setToken(data.token);
                localStorage.setItem('token', data.token);
                setShowLogin(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    React.useEffect(() => {
        /* global google */
        if (window.google) {
            google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                callback: handleGoogleCallback
            });
            google.accounts.id.renderButton(
                document.getElementById("google-signin-btn"),
                { theme: "outline", size: "large", width: 288 }
            );
        }
    }, [state]);

    const onSubmitHandler = async (event)=>{
        try {
            event.preventDefault();
            const {data} = await axios.post(`/api/user/${state}`, {name, email, password})

            if (data.success) {
                navigate('/')
                setToken(data.token)
                localStorage.setItem('token', data.token)
                setShowLogin(false)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
        
    }

  return (
    <div onClick={()=> setShowLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center text-sm text-gray-600 bg-black/60 backdrop-blur-md'>

      <motion.form 
          initial={{ scale: 0.9, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onSubmit={onSubmitHandler} 
          onClick={(e)=>e.stopPropagation()} 
          className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-2xl shadow-2xl border border-borderColor bg-white"
      >
            <p className="text-2xl font-medium m-auto">
                <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <label htmlFor="reg-name" className='text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1.5'>Name</label>
                    <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-transparent focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      <input id="reg-name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Your name" className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" required />
                    </div>
                </div>
            )}
            <div className="w-full">
                <label htmlFor="login-email" className='text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1.5'>Email</label>
                <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-transparent focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <input id="login-email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="name@email.com" className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="email" required />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="login-password" className='text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1.5'>Password</label>
                <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-transparent focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  <input id="login-password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="••••••••" className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="password" required />
                </div>
            </div>
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-primary cursor-pointer font-medium hover:underline">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-primary cursor-pointer font-medium hover:underline">click here</span>
                </p>
            )}
            <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-blue-800 transition-all text-white w-full py-2.5 rounded-xl cursor-pointer shadow-md hover:shadow-lg font-medium"
            >
                {state === "register" ? "Create Account" : "Login"}
            </motion.button>
            <div className="w-full flex items-center justify-center gap-2 my-1">
                <span className="h-[1px] bg-gray-200 w-full"></span>
                <span className="text-xs text-gray-400">or</span>
                <span className="h-[1px] bg-gray-200 w-full"></span>
            </div>
            <div id="google-signin-btn" className="w-full flex justify-center"></div>
        </motion.form>
    </div>
  )
}

export default Login
