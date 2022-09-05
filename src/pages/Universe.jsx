import React from 'react';
import {useParams} from "react-router-dom";

const Universe = () => {
    const {id} = useParams()
    return (
        <div>
            СТРАНИЦА УНИВЕРСИТЕТА {id}
        </div>
    );
};

export default Universe;