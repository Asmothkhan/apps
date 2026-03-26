import React, { useState } from 'react';
import TrendingCard from './TrendingCard';

const TrendingCards = ({data}) => {
    const [showAll, setShowAll] = useState(false);
    

    return (
        <div>
         


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
  {
    (showAll ? data : data.slice(0, 8))?.map((app) => (
      <TrendingCard key={app.id} app={app} />
    ))
  }
</div>

    <div className='text-center justify-center mb-10'>
           <button onClick={() => {
                setShowAll(true);
                setShowAll(!showAll);
            }
            } 
            className='btn btn-primary'>  {showAll ? "Show Less" : "All Apps"}</button>
    </div>
        
            
        </div>
    );
};

export default TrendingCards;