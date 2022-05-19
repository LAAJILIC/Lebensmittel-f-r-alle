import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProduct } from './redux/Products';
 

function App() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.value);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className='App'>
   {" "}
      <div className='add-product'>
       <input type='text' placeholder="Name of the product" onChange={(e) => { setName(e.target.value);}} />
       <input type='text' placeholder="Ref of the product" onChange={(e) => { setCode(e.target.value);}} />
       <input type='text' placeholder="Price of the product" onChange={(e) => { setPrice(e.target.value);}} />
          <button onClick={() => 
            {dispatch(addProduct({ id: 0, product_name: name, product_code: code, product_price: price}
            ))}}>
            {" "}
            Add new product</button>
      </div>  
      <div className='display-products'>
        {productList.map((product) => {
          return (
            <div className='dispaly-single-product'>
             <h4> {product.product_name} </h4>
             <h3> {product.product_price} </h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
