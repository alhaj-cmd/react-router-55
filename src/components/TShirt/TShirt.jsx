import React from 'react';

const TShirt = ({tshirt}) => {
    const {_id,index,picture, name, price, gender} = tshirt;
    return (
       <div className="t-shirt-item">
            <img src={picture} alt="" />
            <div className="tshirt">
                <p>{name}</p>
                <p>{gender}</p>
            
        </div>
       </div>
    );
};

export default TShirt;