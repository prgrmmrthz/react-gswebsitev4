import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function MyModal(props) {


  return (
      <Modal isOpen={props.modal} toggle={props.toggle} size="xl">
        <ModalHeader toggle={props.toggle} style={{backgroundColor: "#2d583a", color: "white"}}>Product Information</ModalHeader>
        <ModalBody>
        <section className="py-5">
                  <div className="container px-4 px-lg-5 my-5">
                      <div className="row gx-4 gx-lg-5 align-items-center">
                          <div className="col-md-6">
                            <img className="p-pix card-img-top mb-5 mb-md-0" src={props.productX.pic} alt={props.productX.name} /></div>
                          <div id="itemdet" className="col-md-6">
                              {/* <div className="small mb-1">SKU: BST-498</div> */}
                              <h1 className="p-name display-5 fw-bolder" style={{color: "#2d583a"}}>{props.productX.name}</h1>
                              <div className="fs-5 mb-5">
                                  {/* <span className="p-price text-decoration-line-through">₱45.00</span> */}
                                  <span className="p-price">₱{props.productX.price}</span>
                              </div>
                              <p className="p-benefits lead">{props.productX.benefits}</p>

                              <div>
                                  <h5>Ingredients</h5>
                                  <div id="ingredients" className="d-inline-flex p-2">
                                    {props.productX.Ingredients}
                                  </div>
                              </div>


                          </div>
                      </div>
                  </div>
                  {/* <div className="row justify-content-between">
                    <div className="col-4">
                      <button type="button" className="prev btn btn-link">&lt; Prev</button>
                    </div>
                    <div className="col-4">
                      <button type="button" className="next btn btn-link">Next &gt;</button>
                    </div>
                  </div> */}
                </section>
        </ModalBody>
      </Modal>);
}
