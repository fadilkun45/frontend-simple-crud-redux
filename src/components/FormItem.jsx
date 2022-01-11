import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { addItem, Update } from '../Action'
import Modal from './Modal'

const FormItem = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.item)
  const updateState = useSelector(state => state.update)
  
  const [nameItem,setNameItem] = useState()
  const [priceItem,setPriceItem] = useState()
  const [isupdate,setIsUpdate] = useState(false)

  // Modal
  let [isActive,setIsActive] = useState(false)
  let [isActive2,setIsActive2] = useState(false)
  
  useEffect(() => {
    setIsUpdate(updateState.update)
    setNameItem(updateState.data?.item)
    setPriceItem(updateState.data?.price)

    console.log(updateState.data)
  },[updateState])

  let toggleModal = () => {
    setIsActive(!isActive)
  }

  let toggleModal2 = () => {
    setIsActive2(!isActive2)

}

  useEffect(() => {
    console.log(data)

  },[dispatch])

  let cancelUpdate = () => {
    setIsUpdate(!isupdate)
    setNameItem('')
    setPriceItem('')
  }

  let onTrue = () => {
    toggleModal()
    dispatch(addItem({'nama_barang': nameItem,'harga_barang': priceItem}))
   
  }

  let onTrue2 = (id) => {
    dispatch(Update({'nama_barang': nameItem,'harga_barang': priceItem},id))
    setNameItem('')
    setPriceItem('')
    toggleModal2()
    cancelUpdate()
  }

  let sendData = () => {
    toggleModal()
  }

  let updateDataModal = () => {
    toggleModal2()
  }


    return (
    <>
      <div className="w-5/12 h-56 border py-3 px-4 border-cyan-900 bg-white rounded-lg">
          <h2 className="text-cyan-800 text-center font-bold text-2xl">ISI DATA </h2>
          <div className="flex flex-col">
                <input type="text" value={nameItem} onChange={(e) => {setNameItem(e.target.value)}} className='border-b  border-cyan-900 outline-none text-lg mb-3' placeholder='nama item'/>
                <input type="text" value={priceItem} onChange={(e) => {setPriceItem(e.target.value)}} className='border-b border-cyan-900 outline-none text-lg mb-3' placeholder='harga item'/>
               {
                 isupdate ?  <><button onClick={updateDataModal} className='w-3/6 mb-3 bg-cyan-800 mx-auto text-white py-1 px-2 text-xl rounded-lg'>update data</button>  <button onClick={cancelUpdate} className='w-3/6 mb-3 bg-cyan-800 mx-auto text-white py-1 px-2 text-xl rounded-lg'>cancel </button>  </> :  <button onClick={sendData} className='w-3/6 mb-3 bg-cyan-800 mx-auto text-white py-1 px-2 text-xl rounded-lg'>tambah Data</button>
               }
          </div>
      </div>


    {/* Modal konfirmasi */}
    <Modal isActive={isActive} twoChoice={true} onTrue={onTrue} closeModal={toggleModal} modalCaption={'Kirim Data Ini ??'} btnOne={'no'} btnTwo={'yes'}/>

     {/* Modal konfirmasi update */}
     <Modal isActive={isActive2} twoChoice={true} onTrue={() => {onTrue2(updateState?.data?.id)}} closeModal={toggleModal2} modalCaption={'update Data Ini ??'} btnOne={'no'} btnTwo={'yes'}/>

    </>
    )
}

export default FormItem
