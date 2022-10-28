import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Not Found" />
            {/* Product id,title,price,rating and image */}
            <div className="home__row">
                <Product
                    id="12345"
                    title="TIMEX Analog Men's Watch"
                    price={19.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71Kx6rgmlRS._AC_UL480_FMwebp_QL65_.jpg"
                />

                <Product
                    id="12345"
                    title="Samsung 1m 46cm (58 inch) AUE70 Crystal 4K UHD Smart TV"
                    price={299.99}
                    rating={4}
                    image="https://images.samsung.com/is/image/samsung/p6pim/in/ua58aue70aklxl/gallery/in-uhd-4k-tv-ua58aue70aklxl-front--gray-436266849?$684_547_PNG$"
                />

            </div>
            <div className="home__row">
                <Product
                    id="12345"
                    title="Apple iPhone 13 (128GB) - Blue"
                    price={599.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY327_FMwebp_QL65_.jpg"
                />

                <Product
                    id="12345"
                    title="Apple iPhone 14 (256GB) - Blue"
                    price={699.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                    id="12345"
                    title="Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={999.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UY327_FMwebp_QL65_.jpg"
                />

            </div>
            <div className="home__row">
                <Product
                    id="12345"
                    title="DWELL Stunt Gesture Induction Twisting Off-Road Vehicle Light Music Drift Driving Remote Control Hand Senor Stunt Car, 2.4G 4WD Toy Gift for Kids Toys (Color May Vary)"
                    price={149.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51NKMvcQIeL._AC_UL480_FMwebp_QL65_.jpg"
                    
                />
            </div>
        </div>
    )
}

export default Home