import React from 'react'
import google from '../google.svg'

const Right = () => {
    return (
        <div className='rounded-lg shadow-xtra'>
        <div className='max-w-md flex-col m-auto py-11 px-10 text-center'>
               <h1 className="text-2xl font-semibold">Sign Up</h1>
               <div className="text-sm text-gray-500 mt-2.5 mb-9">The most inclusive career growth platform</div>
               <div className="flex mb-6 bg-white text-blue-600 hover:bg-blue-500 hover:text-white border border-blue-500 border-solid rounded-md  font-semibold text-sm min-w-9 py-2.5 px-3 h-10 items-center justify-center">
                   <img className='h-4 mr-1.5 mb-0.5' src={google}/> Continue with Google
                </div>
                   <span className="divide-gray-300 justify-between align-center bg-white text flex-wrap text-gray-400">
                        <span/>
                       <hr className=" inline-block mb-1.5 w-5/12"/>  or  <hr className="inline-block mb-1.5 w-5/12"/>

                   </span>
                   <div  className="mt-3.5 text-left pb-11 border-b border-solid border-gray-300 -m-3">
                       <form action="#">
                           <label className="leading-6">Full Name</label>
                           <div className="relative w-full border border-solid border-gray-300 rounded-md mt-2 mb-2.5">
                               <input id='caret' className="bg-transparent px-3.5 py-2 w-full outline-none " placeholder="Full Name" type="text"/>
                            </div>
                            
                            <label className="leading-6">Email</label>
                            <div className="relative w-full border border-solid border-gray-300 rounded-md mt-2 mb-2.5">
                                <input id='caret' className="bg-transparent px-3.5 py-2 w-full outline-none" placeholder="Email" type="text"/>
                            </div>
                            <label className="leading-6">Password</label>
                            <div className="relative w-full border border-solid border-gray-300 rounded-md mt-2 mb-2.5">
                                <input id='caret' className="bg-transparent px-3.5 py-2 w-full outline-none" placeholder="Password" type="password"/>

                            </div>
                             <div className="flex justify-center mx-3 mt-6">
                                 <div className="flex bg-gray-900 w-36 min-w-full justify-center bg-opacity-40 pointer-events-none align-center rounded-md font-semibold text-sm h-10 py-2.5 px-3 text-white" type="submit">
                                     <span className="">Sign up</span>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div className="font-normal text-sm mt-6 mb-2">Already have an account?<span className="font-semibold text-blue-500"> Log in</span>
                        </div>
                        <div className="font-normal text-sm mr-1">By signing up, you're agreeing to our 
                         <span className='underline ml-1'>Terms of Use</span>
                        </div>
                       
                                               
        </div>
        </div>
    )
}

export default Right
