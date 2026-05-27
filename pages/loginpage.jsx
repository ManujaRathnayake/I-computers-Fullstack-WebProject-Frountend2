import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // 1. Curly braces අයින් කළා


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        console.log("Email:", email);
        console.log("Password:", password);

        // 2. Axios Request එක handleLogin එක ඇතුලට ගත්තා
        axios.post(`${import.meta.env.VITE_API_URL}/users/login`, {
            email: email,
            password: password
        })
        .then((response) => {
            console.log("Login successful:", response.data);
            // මෙතනට සාර්ථකව login වුණාට පස්සේ වෙන්න ඕන දේ දාන්න (उदा. redirect)
        })
        .catch((error) => {
            console.error("Login error:", error);
        });
    } // 3. Function එක කලින් වැහිලා තිබ්බ bracket එක මෙතනට ගත්තා

    return (
        <div className='w-full h-screen bg-[url("/myimage.jpg")] bg-center bg-cover bg-no-repeat flex items-center justify-center '>
            <div className="w-1/2 h-full"></div>
            
            <div className="w-1/2 h-full flex items-center justify-center border-2">
                <div className="w-[400px] h-[500px] backdrop-blur-lg rounded-xl shadow-2xl flex flex-col items-center justify-center">
                    
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Sign in</h1>
                    
                    {/* Email Input */}
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email" 
                        placeholder="Email" 
                        className="w-[300px] h-[40px] mb-4 px-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    
                    {/* Password Input */}
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password" 
                        placeholder="Password" 
                        className="w-[300px] h-[40px] mb-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                    
                    <p className="w-[300px] text-right text-sm text-gray-500 mb-6">
                        Forget password? <a href="#" className="text-blue-500 hover:underline">Click here</a>
                    </p>
                    
                    {/* Login Button */}
                    <button 
                        onClick={handleLogin}
                        className="w-[300px] h-[40px] bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
                    >
                        Login
                    </button>
                    
                    {/* Sign up Link */}
                    <p className="text-gray-500 mt-6">
                        Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}