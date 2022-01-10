import axios from 'axios'

export const fetchItem = () => axios.get('http://localhost:8080/products').then((response) => response.data)
export const fetchItemById = (id) => axios.get('http://localhost:8080/products/' + id).then((response) => response.data)
export const sendItem = (payload) => axios.post('http://localhost:8080/products',payload).then((response) => response)
export const deleteItem = (id) => axios.delete('http://localhost:8080/products/' + id)
