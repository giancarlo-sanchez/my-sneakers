import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import detailsBrand  from '../actions/detailBrandAction';
import brandNames from '../auxFunctions/brandName'

function BrandDetailPage (props){

    const brandDetails = useSelector(state => state.brandDetails);
    console.log("this is brandDetails",brandDetails.sneaker)
    const {brand,sneaker, loading, error} = brandDetails
    const values = brandDetails.sneaker;
    const dispatch = useDispatch();
    //console.log(Object.values(sneaker));
    let index =  props.match.params.id
    console.log("This is brand detail id ",index)
    console.log("This is brand ",brand)
    console.log("This is values ",values)
    console.log("This list of sneakers ",sneaker)
    console.log(typeof sneaker)
    //console.log("This is brand name ",brandDetails)

    // cnsol

    useEffect(()=>{
        dispatch(detailsBrand(index))
    },[])

    console.log("this is sneakers:", sneaker)
    //let arrAux = sneaker.forEach(ele=>(ele.Brand.name));
    //console.log(arrAux)
    console.log("this is brand name", sneaker);

return <div><div className="back-to-home"><Link to="/">Back to Home page</Link></div><div>{loading? <div>Loading...</div>:error? <div>{error}</div>:<div><div className="brand-list-name">{brandNames(index)}</div><ul className="list-sneaker">

{sneaker.map(shoe =>(
<li key={shoe.id}>
    <div className="sneaker">
        <Link to={`/sneakers/${shoe.id}`}>
            <img className="sneaker-image" src={shoe.imageSmall} alt="sneaker"/>
        </Link>

        <div className="sneaker-name">
            <Link to={"/sneakers/" + shoe.id}>{shoe.name}</Link>
        </div>
        <Link className="sneaker-brand" to={"/brands/"+ shoe.id}>{shoe.Brand.name}</Link>
        <div className="sneaker-price">$ {shoe.price}</div>

    </div>
</li>
    ))}


    </ul>
    </div>}</div></div>

}

export default BrandDetailPage;
