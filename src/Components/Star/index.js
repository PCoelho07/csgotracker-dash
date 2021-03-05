import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Star = ({ isActive }) => {

    if (isActive) {
        return (
            <FaStar size="15" color="#FFCA24" />
        )
    }

    return (<FaRegStar size="15" color="#D3d3d3"/>)
}

export default Star