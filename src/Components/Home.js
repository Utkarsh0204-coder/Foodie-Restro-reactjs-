import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt="" />
        </div>
        <div className='home-text-setion'>
            <h1 className='primary-heading'>
                Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
               Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food. 
            </p>
            <button className='secondary-button'>
                Order Now <FiArrowRight />
            </button>
        </div>
        <div className='home-image-conatiner'>
          <img src={BannerImage} alt="" />
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Menu Items from Backend:</h2>
        <ul>
          {menuItemClasses.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ); 
};

export default Home;
