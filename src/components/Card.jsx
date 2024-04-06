import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
const Card = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  const Priceref = useRef();
  let options = props.options;
  let priceoption = Object.keys(options);

  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");

  const handleAddtocart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.fooditem._id) {
        food = item;

        break;
      }
    }
    // if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.fooditem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.fooditem._id,
          name: props.fooditem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
        // await console.log(data);
      }
      // return
    // }
    await dispatch({
      type: "ADD",
      id: props.fooditem._id,
      name: props.fooditem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setsize(Priceref.current.value);
  }, []);
  return (
    <>
      <div className="body">
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"className="card-img-top" alt="..." /> */}
          <img
            src={props.fooditem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "150px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.fooditem.name}</h5>
            {/* <p className="card-text">{props.descrip}</p> */}
            <div className="container w-100">
              <select
                className="m-2  bg-success rounded"
                onChange={(e) => setqty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2  bg-success rounded"
                ref={Priceref}
                onChange={(e) => setsize(e.target.value)}
              >
                {/* <option value="half">Half</option>
                <option value="full">Full</option> */}
                {priceoption.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">${finalPrice}</div>
            </div>
            <hr />
            <div
              className=" btn bg-success text-white mx-1 "
              onClick={handleAddtocart}
            >
              My Cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
