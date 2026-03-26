import React from 'react';
import TrendingCards from './TrendingCards';


const Trending = ({data}) => {
    
   
    return (
        <div>
             <div className='text-center'>
                <h2 className='text-5xl mt-5 font-bold mb-4'>Trending Apps</h2>
                <h5 className='text-slate-700 text-xl mb-6'>Explore All Trending Apps on the Market developed by us</h5>
             </div>
             {/* <TrendingCards data={data}></TrendingCards> */}
             <TrendingCards data={data}></TrendingCards>
        </div>
    );
};

export default Trending;