import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext.jsx';
import { toast } from 'react-toastify';

const InstallAppCard = ({ app }) => {
  
  const { image, title, ratingAvg, size, id } = app;

  const { uninstallApp } = useContext(AppContext);

  return (
    <div>
      <div className='flex justify-between p-10'>
        <div className='flex gap-3'>
          <img className='w-20 h-20 rounded-2xl' src={image} alt="" />
          
          <div>
            <h2 className='text-2xl font-bold'>{title}</h2>

            <div className='flex gap-2'>
              <h4>⬇️ 9M</h4>
              <h4 className='text-yellow-500 font-bold'>⭐ {ratingAvg}</h4>
              <p className='text-slate-600'>{size}MB</p>
            </div>
          </div>
        </div>

        <div>
          <button 
            className='btn btn-error'
            onClick={() =>{uninstallApp(id);
                toast.success("App Uninstalled Successfully ✅");} }
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallAppCard;