import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./home.css";
import Card from "../components/Card";

const Home = () => {
  const [search,setsearch]=useState("");
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setfooditem(response[0]);
    setfoodcat(response[1]);
   
  };
  useEffect(() => {
    loaddata();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900*400?burger"
                className="d-block img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900*400?momos"
                className="d-block img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900*400?pizza"
                className="d-block img"
                alt="..."
              />
            </div>
            <div
              className="carausel-caption"
              style={{ zIndex: "10", position: "relative", top: "37rem" }}
            >
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2 bg-dark text-white"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {setsearch(e.target.value)}}
                />
                <button
                  className="btn btn-outline-success bg-success text-black"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodcat
          ? foodcat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {fooditem 
                    ? fooditem
                        .filter(
                          (item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))
                        )
                        .map((filteritems) => {
                          return (
                            <div
                              key={filteritems._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Card
                                
                                fooditem={filteritems}
                                options={filteritems.options[0]}
                                
                              />
                            </div>
                          );
                        })
                    : "No data"}
                </div>
              );
            })
          : " "}

        {/* <Card /> */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
