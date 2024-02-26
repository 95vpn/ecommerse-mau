import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers : {
        setProducts: (currentValue, action) => action.payload //recibir lo que pasemos como argumento de esta funcion
    } //van todas las actions para mi estado, una funcion y recibe dos parametros
    //lo que vale actualmente mi estado // segundoparametro un objeto y tiede la propiedad payload, que sirve para recibir lo que le pasemos como argumeto a esta funcion cuando le llamemos
});

export const { setProducts } = productsSlice.actions;


export default productsSlice.reducer;

export const getProductsThunk = (url) => (dispatch) => {
    axios.get(url)
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.log(err))
}