import React, { useState } from "react";
import "../css/Filter.css";
import { Link } from "react-router-dom";
import Product from "../json/Filter.json";

export default function Filter() {
  const [items, setItems] = useState(Product);
  console.log(items);

  // filter
  const fitlerItems = catItem => {
    const updateItems = Product.filter(curlItem => {
      return curlItem.category === catItem;
    });
    setItems(updateItems);
  };

  return (
    <>
      {/* nav */} < br/> < br/> < br/> < br/>  < br/> <br/>

      <div className="container" >
        <br />
        <h2>All Products</h2>
        {/* btns */}
        <div className="btn-items">
          <button
            type="button"
            class="btn btn-danger me-3"
            onClick={() => setItems(Product)}
          >
            All Products
          </button>
          <button
            type="button"
            class="btn btn-danger me-3"
            onClick={() => fitlerItems("men's clothing")}
          >
            men's clothing
          </button>
          <button
            type="button"
            class="btn btn-danger me-3"
            onClick={() => fitlerItems("jewelery")}
          >
            jewelery
          </button>
          <button
            type="button"
            class="btn btn-danger me-3"
            onClick={() => fitlerItems("electronics")}
          >
            electronics
          </button>
          <button
            type="button"
            class="btn btn-danger me-3"
            onClick={() => fitlerItems("women's clothing")}
          >
            women's clothing
          </button>
        </div>
        <br />
        <hr />

        <div className="row" >
          <div className="sds">
            {items.map(Val => (
              <div className="col-md-">
                <div class="card">
                  <br />
                  <button className=" px-6 py-1 badge bg-primary" id="btn">
                    Add to cart
                  </button>
                  <br />
                  <img src={Val.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5>
                      {Val.title.substring(0, 12)}{" "}
                      <span class="badge bg-secondary">{Val.category}</span>
                    </h5>
                    <p>R{Val.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
