import React from 'react'

const Modal = ({isActive,twoChoice,btnOne,btnTwo,onTrue,closeModal,modalCaption}) => {
    return (
       <>
       {
           isActive ? <div className="w-full h-screen fixed flex justify-center z-20 top-0 left-0 items-center ">
               <div onClick={() => {closeModal()}}  className="bg-sky-900 w-full h-full absolute left-0 right-0 z-10 opacity-50"></div>
               <div className="bg-white w-3/6 z-20 py-4 rounded-md">
                   <h1 className="text-center font-bold text-xl text-sky-900">{modalCaption}</h1>
                    {
                        twoChoice ? <div className="flex w-3/6 mx-auto mt-2 justify-around">
                             <button onClick={() => {closeModal()}}  className='text-white w-5/12 bg-red-500 py-2 px-2 text-base'>{btnOne}</button> 
                             <button onClick={() => {onTrue()}}  className='text-white w-5/12 bg-green-500 py-2 px-2 text-base'>{btnTwo}</button> 
                        </div> : <div className="flex w-3/6 mx-auto mt-2 justify-around">
                             <button onClick={() => {closeModal()}} className='text-white w-5/12 bg-green-500 py-2 px-2 text-base'>{btnOne}</button> 
                        </div>
                    }
               </div>
           </div> : ""
       }
       </>
    )
}

export default Modal
