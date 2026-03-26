import React, { useContext } from 'react';
import InstallAppCard from './InstallAppCard';
import { AppContext } from './AppContext';

const InstallApp = () => {
  const { installedApps } = useContext(AppContext);

  return (
    <div>
      <h2 className='text-4xl font-bold'>Your Installed Apps</h2>
      <p className='text-shadow-slate-600 mt-5'>
        Explore all Trending Apps on the Market developed by us
      </p>

      <div className='flex justify-between mb-5'>
        <h2 className='text-2xl font-bold'>
          ({installedApps.length}) Apps Found
        </h2>
        <h3>Sort By Size</h3>
      </div>

      {installedApps?.map(app => (
        <InstallAppCard key={app.id} app={app} />
      ))}
    </div>
  );
};

export default InstallApp;