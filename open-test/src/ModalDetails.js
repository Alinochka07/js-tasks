import React from 'react';
import "./Modal.css";

const ModalDetails = ({selectedItem, showModalDetails, setShowModalDetails}) => {
    
    if(!showModalDetails) {
        return null
    } 

    return  <div className='modal'>
                <div className='modal-content' style={{background: 'rgb(208 227 238)'}}>
                    <div className='modal-header'>
                        <h4 className='modal-title'>OTHER DETAILS</h4>
                    </div>
                    <div className='modal-body'>
                        <p><span className='bold'>Purchase order creation date: </span>{selectedItem.PurchaseOrderCreationDate}</p>
                        <p><span className='bold'>Currency: </span>{selectedItem.PurchaseOrderCurrencyCode}</p>
                        <p><span className='bold'>Order pick up address: </span>{selectedItem.PurchaseOrderPickupAddress}</p>
                        <p><span className='bold'>Order payment enumeration: </span>{selectedItem.PurchaseOrderPaymentTermsEnumeration}</p>   
                    </div>
                    <div className='modal-footer'>
                        <button onClick={(e) => setShowModalDetails(false)} className='button'>Close</button>
                    </div>
                </div>
            </div>

};

export default ModalDetails;