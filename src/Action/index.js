import { fetchItem, fetchItemById, sendItem, deleteItem, updateData } from "../Api/api";
import { toast } from "react-toastify";

export const fetchData = () => async (dispatch) => {
  const test = fetchItem();

  toast.promise(test, {
    pending: "Sabar Lagi Ngambil Data",
    success: "Data Success Ke load 👌",
    error: "Fetching Gagal 🤯",
  });

  try {
    const response = await fetchItem();
    dispatch({
      type: "FETCH DATA",
      payload: { data: response, isLoading: false, error: "" },
    });
    console.log(response);
  } catch (error) {
    dispatch({
      type: "FETCH DATA",
      payload: { data: [], isLoading: false, error: error },
    });
  }
};

export const fetchDataById = (id) => async (dispatch) => {
  try {
    const response = await fetchItemById(id);
    console.log(response);
    dispatch({type: 'DATA BY ID' ,payload: {data: response,isLoading: false, error: ''} })
  } catch (error) {
    dispatch({
      type: "DATA BY ID",
      payload: { data: [], isLoading: false, error: error },
    });
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    const response = await deleteItem(id);

    if (response.status == 200) {
      const refetch = await fetchItem();
      dispatch({
        type: "DELETE DATA",
        payload: { data: refetch, isLoading: false, error: "" },
      });
      toast.success("data Berhasil Dihapus");
    }
    console.log(response);
  } catch (error) {
    dispatch({
      type: "FETCH DATA BY ID",
      payload: { data: [], isLoading: false, error: error },
    });
  }
};

export const addItem = (data) => async (dispatch) => {
  try {
    console.log(data);

    const response = await sendItem(data);

    console.log(response);

    if (response.status == 201) {
      const refetch = await fetchItem();
      toast.success("data berhasil ditambahkan");
      dispatch({
        type: "POST DATA",
        payload: { data: refetch, isLoading: false, error: "" },
      });
    }
  } catch (error) {
    toast.error("data gagal ditambahkan");
    dispatch({
      type: "POST DATA",
      payload: { data: [], isLoading: false, error: error },
    });
  }
};

export const prepareUpdate = (id) => async (dispatch) => {
    const response = await fetchItemById(id);
    console.log(response)
    dispatch({
      type: "PREPARE UPDATE",
      payload: {update: true, data: {item: response.nama_barang,price: response.harga_barang,id } },
    });

};

export const Update = (data,id) => async (dispatch) => {
      const response = await updateData(data,id);
          console.log(response);
  // try {
  //   console.log(data,id);

  //   const response = await updateData(data,id);

  //   console.log(response);

  //   if (response.status == 201) {
  //     const refetch = await fetchItem();
  //     toast.success("data berhasil ditambahkan");
  //     dispatch({
  //       type: "UPDATE DATA",
  //       payload: { data: refetch, isLoading: false, error: "" },
  //     });
  //   }
  // } catch (error) {
  //   toast.error("data gagal ditambahkan");
  //   console.log(error);
  //   const refetch = await fetchItem();
  //   dispatch({
  //     type: "UPDATE DATA",
  //     payload: { data: refetch, isLoading: false, error: error },
  //   });
  // }
};
