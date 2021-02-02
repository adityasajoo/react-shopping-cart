import React, { Component } from 'react'
import formatCurreny from '../util'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product=> (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={product.image} alt="err" />
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurreny(product.price)}</div>
                                    <button className="button primary">Add to Cart</button>

                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
