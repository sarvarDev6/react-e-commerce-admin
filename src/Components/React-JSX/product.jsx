import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Stylesheets/product.scss";
import openShopLogo from "../Local-Images/open-shop-logo.png";
import adminLogo from "../Local-Images/adminLogo.png";
import ProductAddModal from "./productAddModal";

function Product() {
  const [productData, setProductData] = useState([])
  const [post, setPost] = useState({
    img_1: "",
    img_2: "",
    img_3: "",
    brand_name: "",
    brand_logo: "",
    category: "",
    name: "",
    price: "",
    discount: "",
  })
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')


  // axios get data goes here
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/product")
      .then(res => setProductData(res.data))
  }, []);

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  // axios post data goes here
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://127.0.0.1:8000/api/product/add", JSON.stringify(post),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  return (
    <div className="AdminMain flex gap-4">

      <ProductAddModal open={isOpen} onClose={() => setIsOpen(false)}>

        <div className="modalAddProduct">
          <div className="modalBox">
            <div>
              <i onClick={() => setIsOpen(false)} class="fa-solid fa-xmark"></i>
              <form onSubmit={handleSubmit}>
                <input type="text" name="img_1" placeholder="img_1" required onChange={handleInput} />
                <input type="text" name="img_2" placeholder="img_2" required onChange={handleInput} />
                <input type="text" name="img_3" placeholder="img_3" required onChange={handleInput} />
                <input type="text" name="brand_name" placeholder="brand_name" required onChange={handleInput} />
                <input type="text" name="brand_logo" placeholder="brand_logo" required onChange={handleInput} />
                <select name="category" onChange={handleInput}>
                  <option selected disabled>Select category</option>
                  <option value="phone">Phone</option>
                  <option value="laptop">Laptop</option>
                  <option value="tablet">Tablet</option>
                  <option value="watch">Watch</option>
                  <option value="accessuars">Accessuars</option>
                  <option value="pc-equipment">PC Equipment</option>
                </select>
                <input type="text" name="name" placeholder="name" required onChange={handleInput} />
                <input type="number" name="price" placeholder="price" required onChange={handleInput} />
                <input type="number" name="discount" placeholder="discount" required onChange={handleInput} />
                <button type="submit">Add Product</button>
              </form>
            </div>
          </div>
        </div>

      </ProductAddModal>

      <nav className="bg-slate-200 w-80 h-screen items-center p-10">
        <div>
          <img src={openShopLogo} className="w-60 mb-10" alt="OPEN SHOP" />
          <ul>
            <Link to="/">
              <li>
                <i class="fa-solid fa-chart-line"></i> Dashboard
              </li>
            </Link>
            <Link to="/product">
              <li className="active">
                <i class="fa-solid fa-boxes-stacked"></i> Product
              </li>
            </Link>
            <Link to="/slider">
              <li>
                <i class="fa-solid fa-sliders"></i> MainSlider
              </li>
            </Link>
            <li>
              <i class="fa-regular fa-user"></i> People
            </li>
            <li>
              <i class="fa-solid fa-bag-shopping"></i> Orders
            </li>
          </ul>
          <div className="adminProfile flex justify-between items-center gap-3">
            <div className="flex items-center">
              <img src={adminLogo} className="w-14" alt="Admin" />
              <h1 className="text-3xl">Admin</h1>
            </div>
            <i
              id="logOutBtn"
              class="fa-solid fa-arrow-right-from-bracket text-2xl hover: cursor-pointer"
            ></i>
          </div>

        </div>
      </nav>
      <main className="bg-slate-100 w-full">
        <div className="top-action flex items-center justify-between mt-5">
          <h1 className="text-4xl font-semibold ml-5">Product</h1>
          <div className="flex mr-16 gap-5">
            <input type="search" placeholder="search-products" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => setIsOpen(true)}>Add Product +</button>
          </div>
        </div>
        <table className="content-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Img1</th>
              <th>Img2</th>
              <th>Img3</th>
              <th>Name</th>
              <th>Category</th>
              <th>Discount</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              productData.filter((item) => {
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
              }).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td><img src={item.img_1} alt={item.name} className="w-32" /></td>
                    <td><img src={item.img_2} alt={item.name} className="w-32" /></td>
                    <td><img src={item.img_3} alt={item.name} className="w-32" /></td>
                    <td className="w-56">{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.discount}%</td>
                    <td>{item.price} UZS</td>
                    <td className="action-btns">
                      <button id="edit-btn">Edit</button>
                      <button id="delete-btn">Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </main>


    </div>
  );
}

export default Product;
