import React from 'react';
import GoogleIcon from '../../assets/googleplay.png';
import AppleIcon from '../../assets/appstore.png';
import BannerImg from '../../assets/hero.png';



const Banner = () => {
    return (
        <div>
            <div className='text-6xl font-bold p-10 text-center mx-auto'>
                <h1 className='text-[#001931]'>We Build <br />
                <span className='text-indigo-600'>Productive </span> Apps</h1>
            </div>
            <div className='md:mx-72 text-[#627382] mb-5 p-5 '>
               <h5>
                 At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
               </h5>
            </div>
            <div className='flex text-center items-center justify-center gap-5 mb-5 '>
                <button className='btn text-xl text-[#001932]'>
                   <img className='h-[32px]' src={GoogleIcon} alt="" /> Google Play</button>
                <button className='btn text-xl text-[#001932]'><img className='h-[32px]' src={AppleIcon} alt="" /> App Store</button>
            </div>
            <div>
                <img className='mx-auto text-center m-5' src={BannerImg} alt="" />
            </div>
          
        </div>
    );
};

export default Banner;