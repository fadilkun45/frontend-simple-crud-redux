import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchDataById } from '../Action'

const DetailForm = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(state => state.dataByid)

    useEffect(() => {
        dispatch(fetchDataById(id))
        console.log(data)
    },[])
    

    return (
       <div className="container mx-auto mt-5 text-white bg-sky-900 py-5 px-4">
           <h1 className='text-3xl text-center mb-3 font-bold'>Nama Barang : {data?.data?.nama_barang}</h1>
           <h2 className='text-3xl text-center mb-3 font-bold'>Harga Barang : {data?.data?.harga_barang}</h2>
           <p className='text-3xl text-center mb-3 font-bold'>Stock Barang : {data?.data?.stock}</p>
        <Link to="/" className='text-xl bg-sky-700 py-2 px-3'>kembali</Link>
       </div>
    )
}

export default DetailForm
