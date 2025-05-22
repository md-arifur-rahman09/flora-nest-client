import React from 'react';

const Slider = () => {
    return (
       <div className="carousel w-full">
  {[
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
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