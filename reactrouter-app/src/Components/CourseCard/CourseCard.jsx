import React from "react";

export default function CourseCard({ data={} }) {
  return (
    <>
      <div className="card my-4" style={{ width: '18rem' }}>
        <img src={data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}
