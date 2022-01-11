import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { addItem } from '../Action'
import Modal from './Modal'

const FormItem = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.item)
  
  const [nameItem,setNameItem] = useState()
  const [priceItem,setPriceItem] = useState()

  // Modal
  let [isActive,setIsActive] = useState(false)
  

  let toggleModal = () => {
      setIsActive(!isActive)
  }

  useEffect(() => {
    console.log(data)

  },[dispatch])

  let onTrue = () => {
    toggleModal()
    dispatch(addItem({'nama_barang': nameItem,'harga_barang': priceItem}))
  }

  let sendData = () => {
    toggleModal()
  }


    return (
    <>
      <div className="w-5/12 h-56 border py-3 px-4 border-cyan-900 bg-white rounded-lg">
          <h2 className="text-cyan-800 text-center font-bold text-2xl">ISI DATA </h2>
          <div className="flex flex-col">
                <input type="text" onChange={(e) => {setNameItem(e.target.value)}} className='border-b border-cyan-900 outline-none text-lg mb-3' placeholder='nama item'/>
                <input type="text" onChange={(e) => {setPriceItem(e.target.value)}} className='border-b border-cyan-900 outline-none text-lg mb-3' placeholder='harga item'/>
                <button onClick={sendData} className='w-3/6 mb-3 bg-cyan-800 mx-auto text-white py-1 px-2 text-xl rounded-lg'>kirim</button>
          </div>
      </div>


    {/* Modal konfirmasi */}
    <Modal isActive={isActive} twoChoice={true} onTrue={onTrue} closeModal={toggleModal} modalCaption={'Kirim Data Ini ??'} btnOne={'no'} btnTwo={'yes'}/>

    </>
    )
}

export default FormItem
