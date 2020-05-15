import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/tailwind.css";
import Header from "./Header";
import Projects from "./projects";
import ImageContainer from "./POTD";
import Footer from "./Footer";

function App() {

  const [apiData, setApiData] = useState({});
  const [id, setId] = useState(9000);
  const [projectData, setProjectData] = useState({});
  const [date, setDate] = useState(new Date());
  let formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  console.log(formattedDate);

useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=qzjerPoBW6VLh87EEOhC9MyjRxvS3NzhABdb5uh2&date=${formattedDate}`)
  .then(response => {
    console.log("Success!");
    setApiData(response.data);
  })
  .catch(error => {
    console.log("uh-oh spaghettios")
  })
}, [formattedDate]);

  return (
    <div className="App flex flex-col justify-center align-center w-4/5 text-center">
        <Header />
        <ImageContainer 
          apiData={apiData} 
          date={date}
          setDate={setDate}
          />
          <p>&mdash;</p>
        <Projects 
          id={id}
          setId={setId}
          projectData={projectData}
          setProjectData={setProjectData}
        />
        <Footer />
    </div>
  );
}

export default App;