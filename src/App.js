import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProduct, deleteProduct, updatePrice } from './redux/Products';
 

function App() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.value);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");

  const [newPrice, setNewPrice] = useState("");
  return (
    <div className='App'>
   {" "}
      <div className='add-product'>
       <input type='text' placeholder="Name of the product" onChange={(e) => { setName(e.target.value);}} />
       <input type='text' placeholder="Ref of the product" onChange={(e) => { setCode(e.target.value);}} />
       <input type='text' placeholder="Price of the product" onChange={(e) => { setPrice(e.target.value);}} />
          <button onClick={() => 
            {dispatch(addProduct({ id: productList[productList.length - 1].id + 1, name: name, code: code, price: price}
            ))}
          }>
    
            Add new product</button>
      </div>  
      <div className='display-products'>
        {productList.map((product) => {
          return (
            <div className='dispaly-single-product'>
             <h4> {product.name} </h4>
             <h3> {product.price} </h3>
             <input type='text' placeholder="New price"
             onChange={(e) => {setNewPrice(e.target.value);}} />
             <button onClick={() => {
                dispatch(updatePrice({ id: product.id, price: newPrice }));
             }}> Update Price</button>
             <button onClick={() => {
               dispatch(deleteProduct({ id: product.id })
               );
              }}>
              {" "}
              Delete Product</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
