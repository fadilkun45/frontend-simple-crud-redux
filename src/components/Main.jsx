import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {fetchData} from '../Action/index'
import FormItem from './FormItem'
import ItemCard from './ItemCard'


const Main = () => {

  const item = useSelector(state => state.item)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchData())
    console.log(item)
  }, [dispatch])

    return (
      <div className="container flex justify-between px-3 mx-auto bg-cyan-700 mt-5 py-3 rounded-lg">
        <FormItem />
        <div className="flex flex-col w-6/12 bg-white py-3 border-cyan-900 rounded-lg h-screen overflow-y-auto">
        {
          item?.data.map((itemdata) => (
            <ItemCard nameProduct={itemdata?.nama_barang} id={itemdata?.id}  key={itemdata?.id} price={itemdata?.harga_barang} />
          ))
        }
     
        
        </div>
        <ToastContainer position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
      </div>
    )
}

export default Main
