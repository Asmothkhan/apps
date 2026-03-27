import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import AppStoreInfo from '../AppStoreInfo/AppStoreInfo';
import Trending from '../Trending/Trending';
import { useLoaderData } from 'react-router';
import { Circles } from 'react-loader-spinner';

const Home = () => {
    const data=useLoaderData();
 
    return (
        <>
            <Banner></Banner>
            <AppStoreInfo></AppStoreInfo>
                    <Suspense fallback={<Circles 
                    height={80}
                    width={80}
                    color="#4fa94d"></Circles>}>
                        <Trending data={data}></Trending>
                    </Suspense>
                
            
            
        </>
    );
};

export default Home;