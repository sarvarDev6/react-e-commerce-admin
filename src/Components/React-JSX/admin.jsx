import React from "react";
import "../Stylesheets/admin.scss";
import { Link } from "react-router-dom";
import openShopLogo from "../Local-Images/open-shop-logo.png";
import adminLogo from "../Local-Images/adminLogo.png";

function Admin() {
  return (
    <div className="AdminMain flex gap-4">
      <nav className="bg-slate-200 w-80 h-screen items-center p-10">
        <div>
          <img src={openShopLogo} className="w-60 mb-10" alt="OPEN SHOP" />
          <ul>
            <Link to="/">
              <li className="active">
                <i class="fa-solid fa-chart-line"></i> Dashboard
              </li>
            </Link>
            <Link to="/product">
              <li>
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
        <h1 className="text-4xl font-semibold mt-5 ml-5">Dashboard</h1>
        <div className="indicators flex gap-5 ml-10 mt-16">
          <div className="orders flex  bg-white w-96 h-36 items-center rounded-xl">
            <div className="flex items-center gap-5 ml-10">
              <i class="fa-regular fa-calendar-check text-4xl"></i>
              <div>
                <h1 className="text-3xl font-semibold">1020</h1>
                <h2 className="text-xl">New Order</h2>
              </div>
            </div>
          </div>
          <div className="visitors flex  bg-white w-96 h-36 items-center rounded-xl">
            <div className="flex items-center gap-5 ml-10">
              <i class="fa-solid fa-user-group text-4xl"></i>
              <div>
                <h1 className="text-3xl font-semibold">2834</h1>
                <h2 className="text-xl">Visitors</h2>
              </div>
            </div>
          </div>
          <div className="sales flex  bg-white w-96 h-36 items-center rounded-xl">
            <div className="flex items-center gap-5 ml-10">
              <i class="fa-solid fa-sack-dollar text-4xl"></i>
              <div>
                <h1 className="text-3xl font-semibold">$2543</h1>
                <h2 className="text-xl">Total Sales</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;
