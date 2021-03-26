import React, { useState } from "react";
import axios from "axios";
//import { toJson } from "unsplash-js";

const CLIENT_ID = "CTHvf_PuzbyzA1rpthv9aONqaQcOGkSnawBkvicCRyc";

export default function SearchPhotos() {
   const [query, setQuery] = useState("");
   const [pics, setPics] = useState([]);
   console.log(query);

   const searchPhotos = async (e) => {
 
    const url = "https://api.unsplash.com/search/photos?page=1&query=" +query + "&client_id=" + CLIENT_ID;
    e.preventDefault();
    axios.get(url).then((response) => {
        setPics(response.data.results);
        });
    console.log("Submitting the Form")
  };

  return (
    <>
     <form className="form"> 
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchPhotos} type="submit" className="button">
          Search
        </button>
      </form>
      
      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
            <div>
               <p className="username"> Photo by {pic.user.name}</p>
               <p className="like">👍 {pic.likes}</p>
               <img src={pic.user.profile_image.small} className="profile-pic"></img> 
            </div>
           
          </div>
        ))}{" "}
      </div>
    </>
  );
}