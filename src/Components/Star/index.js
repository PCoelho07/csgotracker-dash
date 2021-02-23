import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Star = ({ isActive }) => {

    if (isActive) {
        return (
            <FaStar color="#FFCA24" />
        )
    }

    return (<FaRegStar color="#D3d3d3"/>)
}

export default Star