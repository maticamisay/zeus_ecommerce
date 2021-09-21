import React from "react";
import initialState from '../initialState'
import '../Styles/Containers/Home.css'
import Products from "../Components/Products";
function Home() {
  return (
    <div id="container">
      <h1>Bienvenidos a Zeus Ecommerce</h1>
      <Products products={initialState.products}/>
    </div>
  );
}

export default Home;
