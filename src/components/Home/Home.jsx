import React from 'react';
import Nav from '../Navbar/Nav';
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    return (
       <div className="home-container">
        <div className="tshirt-items">
            {
                tshirts.map(tshirt => <TShirt
                key={tshirt._id}
                tshirt={tshirt}
                ></TShirt>)
            }
        </div>
        <div className="cart-container">
            <Cart></Cart>
        </div>
       </div>
    );
};

export default Home;