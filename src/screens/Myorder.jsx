import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Myorder = () => {
const [orderData,setorderData]=useState({});
const fetchMyOrder = async () => {
    console.log(localStorage.getItem('userEmail'))
    await fetch("http://localhost:5000/api/myOrderData", {
      
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email:localStorage.getItem('userEmail')
        })
    }).then(async (res) => {
        let response = await res.json()
        await setorderData(response)
    })
}

// const fetchMyOrder = async () => {
//     const user  = JSON.parse(localStorage.getItem('user'));
//     if (!user) {
//         console.error('No user object found in local storage');
//         return;
//       }
    
//       const { userEmail } = user;
//     try {
//       const response = await fetch('http://localhost:5000/api/myOrderData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: userEmail
//         })
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       setorderData(data);
//     } catch (error) {
//       console.error('Error fetching my order data:', error);
//     }
//   }
useEffect(() => {
    fetchMyOrder()
}, [])

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {
            orderData 
            ? Array(orderData).map((data) => {
                return data.orderData
                  ? data.orderData.order_data
                      .slice(0)
                      .reverse()
                      .map((item) => {
                        return item.map((arrayData) => {
                          return (
                            <div>
                              {arrayData.Order_date ? (
                                <div className="m-auto mt-5">
                                  {(data = arrayData.Order_date)}
                                  <hr />
                                </div>
                              ) : (
                                <div className="col-12 col-md-6 col-lg-3">
                                  <div
                                    className="card mt-3"
                                    style={{
                                      width: "16rem",
                                      maxHeight: "360px",
                                    }}
                                  >
                                    <img
                                      src={arrayData.img}
                                      className="card-img-top"
                                      alt="..."
                                      style={{
                                        height: "120px",
                                        objectFit: "fill",
                                      }}
                                    />
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        {arrayData.name}
                                      </h5>
                                      <div
                                        className="container w-100 p-0"
                                        style={{ height: "38px" }}
                                      >
                                        <span className="m-1">
                                          {arrayData.qty}
                                        </span>
                                        <span className="m-1">
                                          {arrayData.size}
                                        </span>
                                        <span className="m-1">{data}</span>
                                        <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                          ₹{arrayData.price}/-
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        });
                      })
                  : "";
              })
            : ""}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Myorder;
