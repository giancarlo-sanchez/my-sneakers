import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listSneakers}  from '../actions/sneakerActions'

function HomePage (props){

    const sneakerList = useSelector(state => state.sneakerList);
    console.log("this is sneakerDetails",sneakerList)
    const {sneakers, loading, error} = sneakerList;
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listSneakers())
    }, [])

return loading? <div>Loading...</div>:error? <div>{error}</div>:<ul className="list-sneaker">
    {sneakers.map(sneaker =>(
    <li key={sneaker.id}>
        <div className="sneaker">
            <Link to={`/sneakers/${sneaker.id}`}>
                <img className="sneaker-image" src={sneaker.imageSmall} alt="sneaker"/>
            </Link>

            <div className="sneaker-name">
                <Link to={"/sneakers/" + sneaker.id}>{sneaker.name}</Link>
            </div>
            <a className="sneaker-brand" href={sneaker.Brand.website}>{sneaker.Brand.name}</a>
            <div className="sneaker-price">$ {sneaker.price}</div>

        </div>
    </li>
        ))}


        </ul>

}

export default HomePage;
