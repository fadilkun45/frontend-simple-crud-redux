import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteData, prepareUpdate } from '../Action'
import Modal from './Modal'

const ItemCard = ({nameProduct,price,id}) => {
    let [isActive,setIsActive] = useState(false)
    let dispatch = useDispatch()

    let toggleModal = () => {
        setIsActive(!isActive)
    }

    let updateData = (id) => {
        console.log('tes')
        dispatch(prepareUpdate(id))
    }

  

    let onTrue = (id) => {
        toggleModal()
        dispatch(deleteData(id))
    }

    return (
   <>
     <div  className="w-11/12 rounded-md mx-auto border border-cyan-900 px-3 py-3 mb-3">
        <Link to={'/detail/' + id}>
        <h2 className='font-bold text-base text-gray-500'>Nama Item :</h2>
         <h3 className='font-normal text-xl -mt-1 text-gray-500'>{nameProduct}</h3>
         <div className="border-b w-full border-cyan-900 my-2 "></div>
         <h2 className='font-bold text-base text-gray-500'>Harga Item :</h2>
         <h3 className='font-normal text-xl -mt-1 text-gray-500'>{price}</h3>
        </Link>
         <button onClick={toggleModal} className='w-1/6 mt-3 bg-red-800 mx-auto text-white py-1 px-2 text-sm '>Hapus</button>
         <button onClick={() => {updateData(id)}} className='w-1/6 ml-3 mt-3 bg-green-800 mx-auto text-white py-1 px-2 text-sm '>update</button>
     </div>

     {/* modal */}
     <Modal isActive={isActive} twoChoice={true} onTrue={() => {onTrue(id)}} closeModal={toggleModal} modalCaption={'are you sure to the delete this data ?'} btnOne={'no'} btnTwo={'yes'}/>
   </>
    )
}

export default ItemCard
