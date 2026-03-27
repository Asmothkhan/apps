import React, { useEffect, useState } from 'react';
import InstallAppCard from './InstallAppCard';


const InstallApp = () => {
   const [apps, setApps] = useState([]);
   
    

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(data);
  }, []);
 

  return (
    <div>
      <h2 className='text-4xl font-bold '>Your Installed Apps</h2>
      <p className='text-shadow-slate-600 mt-5'>Expore all Trending Apps on the Market developed by us</p>

       <div className='flex justify-between mb-5 '>
                <h2 className='text-2xl font-bold'>({apps.length})Apps Found</h2>
                <h3>sort By Size</h3>
            </div>
      {(Array.isArray(apps) ? apps : []).map(app => (
        <div key={app.id}
        
        >
            <InstallAppCard app={app}></InstallAppCard>
          
        </div>
      ))}
    </div>
  );
};

export default InstallApp;

