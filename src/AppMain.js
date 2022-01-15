import React, {useEffect, useState} from "react";
import products from "./api/products";
import Product from "./Product";

export default function AppMain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async (term = "") => {
    const response = await products.get("/goldenSeedProducts.json").catch((err) => {
      //setLoading(false);
      alert("error occured!");
      console.debug('error', err);
    });;
    //console.log("response", response);
    if (response) {
      //setLoading(false);
      const {status, data: responsedata} = response;
      if(status === 200){
         console.debug('response',responsedata.Sheet1);
         setData(responsedata.Sheet1);
      }

    }
  };

  return (
    <section id="products" class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="encl row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((v) => (
            <Product product={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
