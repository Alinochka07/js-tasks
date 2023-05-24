import React, { useState } from "react";
import './App.css';
import data from "./data.json";
import Modal from "./Modal";
import ModalDetails from "./ModalDetails";



export default function App() {
 
    const [purchaseOrders, setPurchaseOrders] = useState(data.mvPurchaseOrders)

    const [showModal, setShowModal] = useState(false);
    const [showModalDetails, setShowModalDetails] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

   



    return (
            <div className="App">
                <div className="app-content">
                    <h1>Purchase order</h1>
                    <table className="tab">
                            <tr>
                                <th>ID</th>
                                <th>Abbreviation</th>
                                <th>Description</th>
                                <th>Order number</th>
                            </tr>
                            
                            {purchaseOrders.map((item, index) => {
                                return <tr key={index} id={item.PurchaseOrderId}>
                                            <td>{item.PurchaseOrderId}</td>
                                            <td onClick={(e) => {setShowModal(true); setSelectedItem(item)}}>{item.PurchaseOrderTypeAbbreviation}</td>
                                            <td onClick={(e) => {setShowModalDetails(true); setSelectedItem(item)}}>{item.PurchaseOrderTypeDescription}</td>
                                            <td>{item.PurchaseOrderNo}</td>
                                        </tr>
                                        
                        
                            })} 
                    </table>
                <Modal  
                        showModal={showModal}
                        setShowModal={setShowModal}
                        selectedItem={selectedItem}  
                />

                <ModalDetails  
                        showModalDetails={showModalDetails}
                        setShowModalDetails={setShowModalDetails}
                        selectedItem={selectedItem}  
                />
                </div>
            </div>
    );
}


