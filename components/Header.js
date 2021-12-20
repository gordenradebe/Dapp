import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Avatar from './Avatar';
import { useMoralis } from 'react-moralis';


function Header() {
    const {user } = useMoralis();
    return (
        <>
             <div className= "max-w-8xl mx-auto bg-black border ">

             <div className="relative h-16 w-16
                      hidden lg:inline-grid text-white" >
                          <Image 
                       src="https://cdn.pixabay.com/photo/2021/12/11/13/05/alien-6862697_960_720.png" 
                       layout="fill"
                       objectFit="cover"
                       className="rounded-full "
                 />
                  <div className= "flex p-4 mx-14 font-semibold tracking-widest font-mono" > 

                  <h3> PRECIOUS METALS</h3>

                  </div>
              

               
                 
               
                     </div>

                 <div className=" relative flex flex-row-reverse  space-x-10 space-x-reverse h-19 border-1 bg-black">

                     <div>
                         <div className="relative h-10 w-10 ">
                         <Avatar logoutOnPress/>
                         </div>
                     </div>

                     <button className="text-white space-x-10 align-center font-mono"> MarketPlace </button>

                     <button className="text-white space-x-10 align-center font-mono"> upload </button>
                    
                 </div>
          
             </div>
             
      </>
    )
}

export default Header 
