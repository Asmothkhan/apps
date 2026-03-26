import React from 'react';
import { useLoaderData } from 'react-router';
import { FiSearch } from "react-icons/fi";
import App from './App';

const Apps = () => {
    const data=useLoaderData();
    // console.log(data);
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-4xl font-semibold mb-2'>Our All Applications</h2>
            <h5 className='text-slate-800'>Explore All Apps on the Market developed by us. We code for Millions</h5>
            </div>
            <div className='flex justify-between p-5'>
                <h4 className='text-2xl font-bold'>({data.length})Apps Found</h4>
              <div className="relative w-64">
    <input type="text"
        placeholder="Search Apps"
        className="w-full pl-10 pr-3 py-2 border rounded" />
        <FiSearch className="absolute left-3 top-3 text-gray-500" />
    </div>
            </div>
            <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {
                data?.map((app)=>(
                    <App key={app.id} app={app}></App>
                    
                ))
            }
            </div>
           
        </div>
    );
};

export default Apps;