import React from 'react'
import HeroComponent from '../components/hero-component/HeroComponent';
import LatestProducts from '../components/latest-products/LatestProducts';

const HomePage = () => {
    return (
        <main>
            <HeroComponent/>
            <LatestProducts/> 
        </main>
    )
}

export default HomePage;
