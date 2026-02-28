import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthCompo = () => {
  return (
    <div className='flex gap-3'>
        <div className="flex h-[700px] w-full">
            <div className="w-[50%] hidden md:inline-block">
                <img className="h-full" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png" alt="leftSideImage" />
            </div>
        
            <div className="w-[50%] flex flex-col items-center justify-center">
        
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AuthCompo
