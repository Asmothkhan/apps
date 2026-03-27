import React from 'react';

const AppStoreInfo = () => {
    return (
        <div  className='w-full md:h-[410px] bg-linear-to-r/srgb from-purple-600 to-purple-500 text-white text-center p-20'>
            <h2 className='text-4xl font-bold mb-10'>Trusted by Millions, Built for You</h2>
            <div className='text-center flex justify-center'>
                <div className='card  h-[152px] w-[342px] mb-5  '>
                    <h5>Total Downloads</h5>
                    <h1 className='text-5xl font-bold mt-3 mb-3 '>29.6M</h1>
                    <h5>21% More Than Last Month</h5>
                </div>
                <div className='card h-[152px] w-[342px]  '>
                    <h5>Total Reviews</h5>
                    <h1 className='text-5xl font-bold mt-3 mb-3 '>950K</h1>
                    <h5>46% More Than Last Month</h5>
                </div>
                <div className='card h-[152px] w-[342px]  '>
                    <h5>Active Apps</h5>
                    <h1 className='text-5xl font-bold mt-3 mb-3 '>132+</h1>
                    <h5>30 More Will Launch</h5>
                </div>

            </div>
        </div>
    );
};

export default AppStoreInfo;