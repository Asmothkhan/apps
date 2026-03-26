import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LikeIcon from "../../assets/like.png";
import RatingBarChart from "../RatingBarChart/RatingBarChart";

import { useContext } from "react";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { installApp, installedApps } = useContext(AppContext);
const navigate = useNavigate();
  const { id } = useParams();
  // const [data, setData] = useState([]);
  const [app, setApp] = useState(null);
  
 const isInstalled = installedApps.find(item => item.id == id);
  useEffect(() => {

    fetch("/AppData.json")
      .then(res => res.json())
      .then(data => {
               const found = data.find(item => item.id == id);
        setApp(found);
      });
  }, [id]);

  if (!app) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-5 ">

        <div className="flex text-center gap-5 justify-center">
    <img  src={app.image} alt={app.title} className="w-96  max-w-md " />
    <div>
        <h2 className="text-2xl font-bold mb-2">{app.title}</h2>
        <p className="mb-5 text-blue-900"><span className="text-slate-500">Developed by</span> {app.companyName}</p>
        <div className="flex gap-5">
            <div>⬇️ <br /> Downloads <br /> <span className="text-3xl font-bold">9M</span></div>
            <div>⭐ <br />Average Rating <br /> <span className="text-3xl font-bold">{app.ratingAvg}</span></div>
            <div> <img className="ml-7  h-[30px] w-[30px]" src={LikeIcon} alt="" /> Total Reviews <br /> <span className="text-3xl font-bold">{app.reviews}</span></div>
        </div>

     <div className='mt-10 '>  

  <button
  className="btn btn-accent"
  onClick={() => {installApp(app);
    toast.success("App Installed Successfully ✅")
  }} // Shudhu function-ta call korlei hobe
  disabled={isInstalled}
>
  {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
</button>
   {/* <button
  className="btn btn-accent"
  onClick={() => installApp(app);
    toast.success("App Installed Successfully ✅")
  }
  disabled={isInstalled}
>
  {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
</button> */}
</div>
    </div>
   
        </div>

        <div>
            <h2 className='text-xl font-bold mt-5 mb-2 ml-5'>Ratings</h2>
            <RatingBarChart app={app}></RatingBarChart>
        </div>

        <h2 className='text-xl font-bold mt-5 mb-2 ml-5'>Description</h2>
        <p>{app.description}</p>

         <div className="mt-5 text-center">
        <button className="btn btn-primary " onClick={() => navigate(-1)}>⬅ Back</button>
      </div> 
     
    </div>
    
    
  );
};

export default AppDetails;