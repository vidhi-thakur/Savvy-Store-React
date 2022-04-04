import React from 'react'

// css
import './PlaceOrder.css'

function PlaceOrder() {
    return (
        <aside className="price-container p-1">
            <div className="price-detail">
                <h3 className="price-head">PRICE DETAILS</h3>
                <table className="price-table w-full">
                    <thead className="w-full">
                        <tr className="price-row w-full">
                            <th className="price-cell">ITEM DETAILS</th>
                            <th className="price-cell">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody className="price-body w-full">
                        <tr className="price-row w-full">
                            <td className="price-cell">Price (2 items)</td>
                            <td className="price-cell">Rs. 4999</td>
                        </tr>
                        <tr className="price-row w-full">
                            <td className="price-cell">Discount</td>
                            <td className="price-cell">-Rs. 1999</td>
                        </tr>
                        <tr className="price-row w-full">
                            <td className="price-cell">Delivery charges</td>
                            <td className="price-cell">Rs. 199</td>
                        </tr>
                    </tbody>
                    <tfoot className="price-foot w-full">
                        <tr className="price-row font-bold w-full">
                            <td className="price-cell">TOTAL AMOUNT</td>
                            <td className="price-cell">Rs. 3199</td>
                        </tr>
                    </tfoot>
                </table>
                <p className="price-para p-1">You will save Rs. 1999 on this order</p>
                <button className="btn btn-primary-contained btn-extra">place order</button>
            </div>
        </aside>
    )
}

export default PlaceOrder