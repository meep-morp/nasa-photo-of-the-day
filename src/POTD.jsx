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
                <h2 className="font-bold text-2xl">NASA Photo of the Day</h2>
                <h3 className="font-bold text-xl">{(date.getMonth() + 1)} / {date.getDate()} / {date.getFullYear()}</h3>
            </div>
            <div className="flex justify-center">
                <img src={apiData.url} alt="NASA Photo of the day" className="rounded-lg" />
            </div>
            <div>
                <h2 className="font-bold text-2xl">{apiData.title}</h2>
                <p>{apiData.explanation}</p>
            </div>
            <div>
                <h3 className="font-bold text-xl">Choose another date:</h3>
                <Calendar className="calendar text-black text-xl p-5 hover:text-white bg-lavendar" onChange={onChange} value={date} />
            </div>
        </section>
    )
}

export default ImageContainer; 