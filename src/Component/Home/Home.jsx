import React from 'react';
import Banner from '../Banner/Banner';
import AppStoreInfo from '../AppStoreInfo/AppStoreInfo';
import Trending from '../Trending/Trending';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
 
    return (
        <div>
            <Banner></Banner>
            <AppStoreInfo></AppStoreInfo>
            <Trending data={data}></Trending>
        </div>
    );
};

export default Home;