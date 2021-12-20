import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis';

function Avatar({username , logoutOnPress}) {
    const {authenticate ,user , logout} = useMoralis();
   
    return (
        <div>
            <Image 
              className="rounded-full bg-blue cursor-pointer"
              src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
              // only when LogoutOnpress is paaesd then logout 
              onClick = {() => logoutOnPress && logout()}
              layout="fill"
            
            />
        </div>
    )
}

export default Avatar
