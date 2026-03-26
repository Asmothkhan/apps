import React from 'react';
import { MdFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const App = ({app}) => {
  
      const { image, title, ratingAvg } = app;
    return (
        <div>
          <Link to={`/app/${app.id}`}>
           <div className="cursor-pointer card bg-base-100 shadow-sm p-3 rounded-lg">
               <img 
                 src={image} 
                 alt={title} 
                 className="w-full h-40 object-cover rounded"
               />
               
               <h5 className="mt-2 font-semibold">{title}</h5>
           
               <div className='flex justify-between'>
                 <h4 className='flex gap-2 items-center text-center justify-center p-2 text-[#00D390] '><span><MdFileDownload /></span>9M</h4>
                 <h4 className='flex gap-2 items-center text-center justify-center p-2 text-[#FF8811]'><span><FaStar /></span> {ratingAvg}</h4>
               </div>
             </div> 
          </Link>
            

        </div>
    );
};

export default App;