import React, { useEffect, useState } from "react";
import "./DisplayContractors.css";
import Contractor from "../Contractor/Contractor";
import Cart from "../Cart/Cart";
import { paste } from "@testing-library/user-event/dist/paste";

const DisplayContractors = () => {
  const [contractors, setContractors] = useState([]);
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);

  // Data load from fake api

  const URL =
    "https://developeromarfaruk.github.io/react-road-contractor/src/JSONData/JSONData.json";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setContractors(data));
  }, []);

  // Add to cart arrow function

  const handleAddCart = (contractor) => {
    const newContactor = [...cart, contractor];
    setCart(newContactor);

    const totalCost = parseInt(cost) + parseInt(contractor.budget);
    setCost(totalCost);
  };

  return (
    <>
      <div className="display-container">
        <div className="row">
          <div className="col-9">
            <div className="contractor-card-row">
              {contractors.map((contractor) => (
                <Contractor
                  key={contractor.id}
                  contractor={contractor}
                  handleAddCart={handleAddCart}
                />
              ))}
            </div>
          </div>

          <div className="col-3">
            <Cart cart={cart} cost={cost} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayContractors;
