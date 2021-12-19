import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate, isAuthenticated, user } = useMoralis();
    return (
        <div className="bg-black relative text-white">
            <h1>I am a Login Screen</h1>
            <div className= "flex flex-col absolute z-50 h-4/5 w-full items-center justify-center space-y-6"> 
                {/* image company logo */}

                 <Image src="https://cdn.pixabay.com/photo/2021/12/11/13/05/alien-6862697_960_720.png" 
                 className ="object-cover rounded-full"
                 width={200}
                 height={200}
                 />
                {/* Login button */}
                <button onClick={ () => authenticate()} className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse">Login/Signup</button>
            </div>

            <div className="w-full h-screen"> 
                {/* appication background image*/}
                <Image src="https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_960_720.jpg" 
                layout = "fill"
                objectFit ="cover"
                />
            </div>
        </div>
    )
}

export default Login
