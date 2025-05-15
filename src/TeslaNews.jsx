import React, { useEffect, useState } from 'react'
import axios from 'axios';

const TeslaNews = () => {
    const [data,setdata] = useState([]);
    useEffect(()=>{
        apicall();
    },[])

    const apicall=()=>{
        axios.get(
"https://newsapi.org/v2/everything?q=tesla&from=2025-04-15&sortBy=publishedAt&apiKey=13b9918bbc434a59a4e672d5038b5b77"
        )
        .then((res)=>{
          console.log("API Response:", res.data); // Debugging log

          if (res.data.status === "ok" && Array.isArray(res.data.articles)) {
            console.log(res.data)
                setdata(res.data.articles)
            }else{
                console.log("something went wrongggg")
                setdata([])
            }

           

        })
        .catch((err)=>console.log("api fetch error",err))
        setdata([])
    }
  return (
    <div className="container my-4">
    <h2 className="text-center mb-4">Tesla News List</h2>

    <div className="row">
      {Array.isArray(data) && data.length > 0 ? (
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
                <a href={value.url}  className="card-link">
                  {value.description.length > 50 ? value.description.slice(0, 50) + "..." : value.description || "No description available."}
                </a>

                {/* <p className="card-text">{value.description || "No description available."}</p> */}
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
          <p className="text-danger fw-bold"> Loading...</p>
        </div>
      )}
    </div>
  </div>
    )
}

export default TeslaNews