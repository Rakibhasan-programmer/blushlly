import React from 'react';
import categories from "../../assets/categories.png";

const Categories = () => {
    return (
        <div className='py-5 d-flex justify-content-center align-items-center'>
            <img src={categories} className='img-fluid' alt="" />
        </div>
    );
};

export default Categories;