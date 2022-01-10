import { fetchItem, fetchItemById,sendItem,deleteItem } from "../Api/api"
import { toast } from "react-toastify";


export const fetchData = () => async (dispatch) => {
    const test = fetchItem()

    toast.promise(
        test ,
        {
          pending: 'Sabar Lagi Ngambil Data',
          success: 'Data Success Ke load 👌',
          error: 'Fetching Gagal 🤯'
        })

    try {
        const response = await fetchItem()
        dispatch({type: 'FETCH DATA' ,payload: {data: response,isLoading: false, error: ''} })
        console.log(response)
    } catch (error) {
        dispatch({type: 'FETCH DATA' ,payload: {data: [],isLoading: false, error: error} })
    }
}

export const fetchDataById = (id) => async (dispatch) => {
    try {
        const response = await fetchItemById(id)
        console.log(response)
        // dispatch({type: 'FETCH DATA BY ID' ,payload: {data: response,isLoading: false, error: ''} })
    } catch (error) {
        dispatch({type: 'FETCH DATA BY ID' ,payload: {data: [] ,isLoading: false, error: error} })
    }
 
}

export const deleteData = (id) => async (dispatch) => {

    try {
        const response = await deleteItem(id)

        if(response.status == 200){
            const refetch = await fetchItem()
            dispatch({type: 'DELETE DATA' ,payload: {data: refetch,isLoading: false, error: ''} })
            toast.success('data Berhasil Dihapus')
        }


        console.log(response)
    } catch (error) {
        dispatch({type: 'FETCH DATA BY ID' ,payload: {data: [] ,isLoading: false, error: error} })
    }
 
}

export const addItem = (formData) => async (dispatch) => {
    try {
        let string = JSON.stringify(formData)
        console.log(string)
        const response = await sendItem(string)
        dispatch({type: 'POST DATA' ,payload: {data: response ,isLoading: false, error: ''} })
    } catch (error) {
        dispatch({type: 'POST DATA' ,payload: {data: [] ,isLoading: false, error: error} })
    }
    toast.promise(
        await addItem(),
        {
          pending: 'Sabar Lagi Ngambil Data',
          success: 'Data Success Ke load 👌',
          error: 'Fetching Gagal 🤯'
        })
}