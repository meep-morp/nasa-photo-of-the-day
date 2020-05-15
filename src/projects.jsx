import React, {useState, useEffect} from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';


const Projects = props => {
    const {id, setId, projectData, setProjectData} = props;
    const [idValue, setIdValue] = useState("");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/techport/api/projects/${id}?api_key=qzjerPoBW6VLh87EEOhC9MyjRxvS3NzhABdb5uh2`)
        .then(response => {
          console.log("Success!");
          setProjectData(response.data.project);
        })
        .catch(error => {
          console.log("uh-oh spaghettios \n" + error)
        })
      }, [id]);

      if(projectData.title === undefined) {
          setProjectData({
              title: "test",
              description: "test",
              benfits: "test",
          })
      }

    return (
        <section className="POTD">
            <div>
                <h2 className="font-bold text-2xl">NASA Projects</h2>
            </div>
            <div>
                    <h3 className="font-bold text-xl" text-xl>{projectData.title}</h3>
                    <p>{projectData.description}</p>
                    <h3 className="font-bold text-xl">Benefits of Project</h3>
                    <p>{projectData.benefits}</p>
            </div>
            <div className="form">
            <button className="prev p-2" onClick={event => {
                setId(id - 1);
            }}> &lt; </button>
            <input type="text"
                    onChange={event => {
                            setIdValue(parseFloat(event.target.value))
                        }}
                    placeholder="ID here..."
                    className="idInput text-black"
                    value={idValue}
                />
                <Button 
                    onClick={
                        event => {
                           setId(idValue);
                           setIdValue("");
                           event.preventDefault();
                       }}
                >Blast Off!</Button>
                <button className="next p-2" onClick={event => {
                    setId(id + 1);
                }}>></button>
            </div>
        </section>
    )
}


export default Projects;