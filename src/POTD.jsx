/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Calendar from "react-calendar";


const ImageContainer = props => {
    const {apiData, date, setDate} = props;
    
    
    const onChange = date => {
        setDate(date)
    }

    return (
        <section className="POTD">
            <div>
                <h2>NASA Photo of the Day</h2>
                <h3>{(date.getMonth() + 1)} / {date.getDate()} / {date.getFullYear()}</h3>
            </div>
            <div className="flex justify-center">
                <img src={apiData.url} alt="NASA Photo of the day" />
            </div>
            <div>
                <h2>{apiData.title}</h2>
                <p>{apiData.explanation}</p>
            </div>
            <div>
                <h2>Choose another date:</h2>
                <Calendar className="calendar text-black" onChange={onChange} value={date} />
            </div>
        </section>
    )
}

export default ImageContainer; 