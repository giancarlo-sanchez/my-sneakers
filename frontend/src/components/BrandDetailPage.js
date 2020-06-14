import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import detailsBrand  from '../actions/detailBrandAction';

function BrandDetailPage (props){

    const brandDetails = useSelector(state => state.brandDetails);
    console.log("this is brandDetails",brandDetails)
    const {brand, sneaker, loading, error} = brandDetails
    const dispatch = useDispatch();

    let index =  props.match.params.id
    console.log("This is brand detail id ",index)
    console.log("this is sneakers:", sneaker)
    console.log("This is brand detailsBrand ",detailsBrand)
    // cnsol

    useEffect(()=>{
        dispatch(detailsBrand(index))
    },[])


return <div>
    <div className="back-to-home"><Link to="/">Back to Home page</Link></div>
    <div>{loading? <div>Loading...</div> :error? <div>{error}</div>:
        <div className="details">
            <div className="details-image">
                Brands Page
            </div>
        </div>}</div>

    </div>

}

export default BrandDetailPage;
