import React, {useState} from "react";
import MyModal from './MyModal';

export default function Product(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div class="col mb-5">
        <div class="card h-100">
          <img class="card-img-top" src={props.product.pic} alt="..." />
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">{props.product.name}</h5>
              <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
              </div>
              ₱{props.product.price}
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <button
                className="btn btn-light mt-auto"
                onClick={toggle}
              >
                Details
              </button>
              &nbsp; &nbsp;
              <a className="btn btn-warning mt-auto" target="_blank" href={props.product.link}>
                Buy Now!
              </a>
            </div>
          </div>
        </div>
      </div>
      <MyModal buttonLabel="X" className="bg-warning" modal={modal} toggle={toggle} productX={props.product} />
    </>
  );
}
