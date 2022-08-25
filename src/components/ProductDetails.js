import React from "react";
import headphone from "../assets/img/headphone.png";

function productDetails() {
  return (
    <section className="bg-white rounded-md drop-shadow-md h-5/6 w-4/6 p-10">
      <div className="flex space-x-10">
        <div>
          <img className="h-40" src={headphone} alt="" />
        </div>
        <div className="space-y-7">
          <div className="space-y-3">
            <div className="bg-text rounded-full p-2 px-4 w-32">
              <p className="font-semibold text-sm text-white">Free Shipping</p>
            </div>
            <h2 className="text-2xl font-semibold text-text">
              Razer Kraken Kitty Edt Gaming <br /> Headset Quartz
            </h2>
          </div>
          <div>
            <p className="text-text text-xl line-through">1,599</p>
            <h3 className="text-text text-3xl font-extrabold">799,-</h3>
            <p className="text-base text-text">
              The offer is valid until April 3 or as long as stock lasts!
            </p>
          </div>

          <div className="space-y-4">
            <button className="bg-blue p-4 w-full text-base text-white rounded-md shadow-md">
              Add to cart
            </button>
            <div className="flex space-x-4">
              <div className="h-4 w-4 rounded-full mt-1 bg-green"></div>
              <p className="text-text text-base">50+ pcs. in stock.</p>
            </div>
            <div className="flex items-center space-x-5">
              <button className="bg-white border-2 w-full border-border rounded-md p-3">
                Add to cart
              </button>
              <button className="bg-white w-full border-border border-2 rounded-md p-3">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default productDetails;
