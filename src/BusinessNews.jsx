import axios from "axios";
import React, { useEffect, useState } from "react";

const BusinessNews = () => {
  const [businessdata, setBusinessData] = useState([]);
  useEffect(() => {
    apicall();
  },[]);
  const apicall = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=13b9918bbc434a59a4e672d5038b5b77"
    )
      .then((res) => {
          if(res.data.status === "ok"){
            console.log(res.data);
            
            setBusinessData(res.data.articles);
        }else{
            console.log("somthing went wrong")
        }
        
      }).catch((err)=>console.log("API error ", err))
  };
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">BusinessNews</h2>
      <div className="row">
        {/* {businessdata.length > 0 ?  : (
        <div className="col-12 text-center">
          <p className="text-danger fw-bold">Something went wrong. Loading...</p>
        </div>
      )} */}
      {(
            businessdata.map((value, index) => (
            <div key={index}className="col-md-6">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={value.urlToImage}
                  className="img-fluid rounded-start"
                  alt={value.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <a href={value.url}  className="card-link">
                  {value.description ? value.description.slice(0, 50)+"..." : "No description available."}
                  </a>
                  {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
          </div>
        ))
    )}
      </div>
    </div>
  );
};

export default BusinessNews;
