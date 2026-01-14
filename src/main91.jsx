import { useDispatch } from 'react-redux'
import './App.css'
import Header from './Header91'
import Product from './Product91'
import { clearAllItems } from './redux/slice';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from './CartList';
function Main91() {
const dispatch=useDispatch();
  return (
    <>
<BrowserRouter>
 <Header />

 <Routes>
<Route path="/" element={ <Product />}></Route>
<Route path="/cart" element={<CartList />}></Route>

 </Routes>
</BrowserRouter>
    </>
  )
}

export default Main91;