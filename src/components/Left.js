import React, { useState } from 'react'
import check from '../tick.svg'

const Left = () => {
    const [textshow , settextShow] = useState('makers')
    setTimeout(function() {
       if(textshow == 'makers'){
           settextShow('founders')
       }
       
       if(textshow == 'founders'){
        settextShow('entrepreneur')
    }
    
    if(textshow == 'entrepreneur'){
        settextShow('makers')
    }
    }, 1500);




    return (
        <div className='flex-col py-5'>
        <div className='mb-12 font-bold text-xl' >
        <a href='/'>Logo</a>    
        </div>
        <h1 className='leading-275 font-normal  mb-8 text-4xl max-w-md'>Helping <span>{textshow}</span> <br/>build the next generation startups</h1>
        <p className='text-base mb-10' >You have an amazing startup idea but need a cofounder to help you get there? Looking to jump onboard as a cofounder on someone else's idea? We are here to help you with your startup dream</p>
        <ul className="list-disc grid grid-flow-col grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-1 mb-14">
            <li className="flex "><img className='h-6 w-6 mr-1.5' src={check}/><span>Find a cofounder</span></li>
            <li className="flex"><img className='h-6 w-6 mr-1.5' src={check}/><span>Find a startup mentor</span></li>
            <li className="flex"><img className='h-6 w-6 mr-1.5' src={check}/><span>Funding opportunities</span></li>
            <li className="flex"><img className='h-6 w-6 mr-1.5' src={check}/><span>Startup news and more...</span></li>
            </ul>

            <p>Have questions?<a href="/contact/"> Talk to Sales →</a></p>
            
    </div>
    )
}

export default Left
