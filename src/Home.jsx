import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apicall();
  }, []);

  const apicall = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=13b9918bbc434a59a4e672d5038b5b77"
        
    )
      .then((res) => {
        console.log(res);
        setData(res.data.articles);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">News List</h2>

      <div className="row">
        {data.length > 0 ? (
          data.map((value, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <div className="card shadow-sm h-100">
              <a href={value.url} target="_blank" rel="noopener noreferrer" className="btn ">
                <img
                  src={value.urlToImage || 'https://via.placeholder.com/150'}
                  className="card-img-top"
                  alt="news"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </a>

                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description || "No description available."}</p>
                </div>
                {/* <div className="card-footer text-center">
                  <a href={value.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read More
                  </a>
                </div> */}
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-danger fw-bold">Something went wrong. Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
