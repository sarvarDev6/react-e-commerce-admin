import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../Stylesheets/mainSlider.scss"
import { Link } from 'react-router-dom'
import openShopLogo from "../Local-Images/open-shop-logo.png";
import adminLogo from "../Local-Images/adminLogo.png";
import MainSliderAddModal from './mainSliderAddModal'

function MainSlider() {
    const [sliderData, setSliderData] = useState([])
    const [post, setPost] = useState({
        img: ""
    })
    const [isOpen, setIsOpen] = useState(false)


    // axios get data goes here
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/slider")
            .then(res => setSliderData(res.data))
    }, []);

    const handleInput = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    // axios post data goes here
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/api/slider/add", JSON.stringify(post),
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

            <MainSliderAddModal open={isOpen} onClose={() => setIsOpen(false)}>

                <div className="modalAddProduct">
                    <div className="modalBox">
                        <div>
                            <i onClick={() => setIsOpen(false)} class="fa-solid fa-xmark"></i>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="img" placeholder="img" required onChange={handleInput} />
                                <button type="submit">Add Slider</button>
                            </form>
                        </div>
                    </div>
                </div>

            </MainSliderAddModal>

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
                            <li>
                                <i class="fa-solid fa-boxes-stacked"></i> Product
                            </li>
                        </Link>
                        <Link to="/slider">
                            <li className="active">
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
                    <h1 className="text-4xl font-semibold ml-5">Slider</h1>
                    <div className="flex mr-16 gap-5">
                        <button onClick={() => setIsOpen(true)}>Add Slider +</button>
                    </div>
                </div>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sliderData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td><img src={item.img} alt={item.name} className="" /></td>
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

export default MainSlider