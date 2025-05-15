import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppleNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apicall();
  }, []);

  const apicall = () => {
    axios
      .get(
          "https://newsapi.org/v2/everything?q=apple&from=2025-05-14&to=2025-05-14&sortBy=popularity&apiKey=13b9918bbc434a59a4e672d5038b5b77"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.articles);
      })
      .catch((err) => console.log(err));
  };
  const FavoriteAdd =()=>{
    // localStorage.setItem("title");
    console.log("add favorite.............")
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Apple News List</h2>

      <div className="row">
        {data.length > 0 ? (
          data.map((value, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <div className="card shadow-sm h-100">
                <img
                  src={value.urlToImage || 'https://via.placeholder.com/150'}
                  className="card-img-top"
                  alt={value.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description || "No description available."}</p>
                </div>
                {/* favorite per click karvathi title local storage ma store thay and view karva mate ek componennt banaavanu */}
                <div>
                  
                  <button onClick={FavoriteAdd} >favorite</button>
                  
                  </div>
                <div className="card-footer text-center">
                  <a href={value.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-danger fw-bold"> Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppleNews  ;
