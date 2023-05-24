import React from 'react';
import "./Modal.css";

const Modal = ({selectedItem, showModal, setShowModal}) => {
    
    if(!showModal) {
        return null
    } 

    return  <div className='modal'>
                <div className='modal-content' style={{background: '#d0e8d7'}}>
                    <div className='modal-header'>
                        <h4 className='modal-title'>PURCHASE ORDER DETAILS</h4>
                    </div>
                    <div className='modal-body'>
                        <div><span className='bold'>Purchase order address: </span>{selectedItem.PurchaseOrderAddress}</div>
                        <div><span className='bold'>Contact person: </span>{selectedItem.PurchaseOrderContactPerson}</div>
                        <div><span className='bold'>Order status: </span>{selectedItem.PurchaseOrderStatus}</div>
                        <div><span className='bold'>Order date: </span>{selectedItem.PurchaseOrderDate}</div>
                        <div><span className='bold'>Purchase order details: </span>
                            <table>
                                <tr>
                                    <th>Purchase order detail ID</th>
                                    <th>Purchase order row product SKU</th>
                                    <th>Purchase order row quantity</th>
                                    <th>Purchase order unit price without tax/discount</th>
                                    <th>Purchase order total amount</th>
                                </tr>
                                {selectedItem.PurchaseOrderDetails.map(detail => {
                                return <tr key={detail.PurchaseOrderRowDetailID}>
                                            <td>{detail.PurchaseOrderRowDetailID}</td>
                                            <td>{detail.PurchaseOrderRowProductSKU}</td>
                                            <td>{detail.PurchaseOrderRowQuantity}</td>
                                            <td>{detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
                                            <td>{detail.PurchaseOrderRowTotalAmount}</td>
                                        </tr>
                                })}
                            </table>
                        </div>
                        
                    </div>
                    <div className='modal-footer'>
                        <button onClick={(e) => setShowModal(false)} className='button'>Close</button>
                    </div>
                </div>
            </div>

};

export default Modal;