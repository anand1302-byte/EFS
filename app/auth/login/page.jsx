import Image from "next/image";
import { FaGoogle, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[url('/image/login-bg-1.png')] bg-cover px-4">
            <div className="flex flex-col md:flex-row items-center justify-center border border-gray-200 bg-white/20 backdrop-blur-md p-6 rounded-lg w-full max-w-5xl space-y-6 md:space-y-0 md:space-x-6">
                
                {/* Login Form Section */}
                <div className="flex flex-col justify-center w-full max-w-md p-4">
                    <Image
                        src="/image/logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="mb-2 mx-auto md:mx-0"
                    />
                    <h3 className="text-gray-800 text-center md:text-left">Welcome Back</h3>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Login to your account</h1>
                    
                    <form action="/api/login" method="post" className="space-y-4 w-full">
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full text-black border-b border-gray-400 focus:placeholder-transparent focus:outline-none focus:border-blue-500 px-1 py-1"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                                className="w-full text-black border-b border-gray-400 focus:placeholder-transparent focus:outline-none focus:border-blue-500 px-1 py-1"
                            />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    className="mr-2"
                                />
                                <label htmlFor="remember" className="text-gray-600">Remember me</label>
                            </div>
                            <a href="/auth/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-sm"
                        >
                            Login
                        </button>
                    </form>

                    {/* OR with divider lines */}
                    <div className="mt-4">
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px bg-gray-300 w-24" />
                            <span className="text-gray-600">OR</span>
                            <div className="h-px bg-gray-300 w-24" />
                        </div>

                        {/* Social Icons */}
                        <ul className="list-none flex justify-center text-gray-600 mt-4 gap-5">
                            <li>
                                <FaGoogle className="text-3xl text-red-500 hover:cursor-pointer" />
                            </li>
                            <li>
                                <FaGithub className="text-3xl text-black hover:cursor-pointer" />
                            </li>
                            <li>
                                <FaLinkedinIn className="text-3xl text-blue-500 hover:cursor-pointer" />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full max-w-sm hidden md:block">
                    <Image
                        src="/image/login-1.jpg"
                        alt="Login Image"
                        width={400}
                        height={400}
                        className="rounded-lg w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
