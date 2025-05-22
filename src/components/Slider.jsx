import React from 'react';
import { AuthContext } from '../context/AuthContext';

const Slider = () => { 


    return (
       <div className={`carousel w-full`}>
  {[
    "https://cdn.pixabay.com/photo/2017/03/27/12/50/flower-2178507_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/05/15/15/12/hepatica-1393813_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/04/21/14/54/daisies-9547672_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/05/27/22/18/meadow-5229169_960_720.jpg",
  ].map((src, index, arr) => (
    <div
      key={index}
      id={`slide${index + 1}`}
      className="carousel-item relative w-full"
    >
      <img
        src={src}
        className="w-full object-cover max-h-[80vh] rounded-lg"
        alt={`Slide ${index + 1}`}
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={`#slide${index === 0 ? arr.length : index}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${index === arr.length - 1 ? 1 : index + 2}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  ))}
</div>

    );
};

export default Slider;