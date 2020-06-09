import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        const sneakerItems = this.props.sneakers.map(sneaker =>(
          <div key={sneaker.id} className="col-md-4">
                <div>
                    <img src={sneaker.imageSmall} alt={sneaker.name} />
                    <p>{sneaker.name}</p>
                </div>
            </div>)
        )
        return (
            <div>
                {sneakerItems}
            </div>
        )
    }
}
