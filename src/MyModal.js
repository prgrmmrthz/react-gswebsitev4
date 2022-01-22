import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function MyModal(props) {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} size="xl">
      <ModalHeader
        toggle={props.toggle}
        style={{ backgroundColor: "#2d583a", color: "white" }}
      >
        Product Information
      </ModalHeader>
      <ModalBody>
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src={props.productX.pic}
                  alt={props.productX.name}
                />
              </div>
              <div className="col-md-6">
                {/* <div className="small mb-1">SKU: BST-498</div> */}
                <h1 className="display-5 fw-bolder">{props.productX.name}</h1>
                <div className="fs-5 mb-5">
                  <span className="text-decoration-line-through">
                    ₱{(Number(props.productX.price) + 80).toFixed(2)}
                  </span>{" "}
                  &nbsp;
                  <span>₱{Number(props.productX.price).toFixed(2)}</span>
                </div>
                <h3>Benefits</h3>
                {props.productX.Benefits.split("\r\n•").map((v) => (
                  <div className="d-inline-flex p-2">
                    <span className="font-italic">
                      ✔ {v.toString().replace("•", "")}
                    </span>
                  </div>
                ))}

                <br />
                <br />
                <h4>Ingredients</h4>
                {props.productX.Ingredients.split(" • ").map((v) => (
                  <div className="d-inline-flex p-2">
                    <span className="font-italic">
                      ✧ {v.toString().replace("•", "")}
                    </span>
                  </div>
                ))}
                <br />
                <br />
                <div className="d-flex row justify-content-end">
                  <a
                    className="btn btn-warning flex-shrink-0"
                    target="_blank" href={props.productX.link}
                    type="button"
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ModalBody>
    </Modal>
  );
}
