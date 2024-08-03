import React, { useEffect, useState } from "react";

const DetailsTable = ({ products, productsTwo }) => {

  
  return (
    <>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <th>NETWORK</th>
              <td>Technology</td>
              {products.map(product=>{return  <td key={product._id}>{product.network}</td> })}
              {productsTwo.map(product=>{return  <td key={product._id}>{product.network}</td> })}
              
            </tr>
            <tr>
              <th>LAUNCH</th>
              <td>Announced</td>
              {products.map(product=>{return  <td key={product._id}>{product.launchdate}</td> })}
              {productsTwo.map(product=>{return  <td key={product._id}>{product.launchdate}</td> })}
            </tr>
            <tr>
              <th>BODY</th>
              <td>Dimensions</td>
              {products.map(product=>{return  <td key={product._id}>{product.bodydata}</td> })}
              {productsTwo.map(product=>{return  <td key={product._id}>{product.bodydata}</td> })}
            </tr>
            <tr>
              <th>DISPLAY</th>
              <td>Size</td>
              {products.map(product=>{return  <td key={product._id}>{product.size}</td> })}
              {productsTwo.map(product=>{return  <td key={product._id}>{product.size}</td> })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DetailsTable;
