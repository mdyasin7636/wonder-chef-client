import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChefDetails = () => {
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default ChefDetails;