import React from "react";
import { useParams } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { useEffect } from "react";
import { useState } from "react";

export default function Courses() {
  const params = useParams();
  console.log(params);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://reactrouter-coursesapp.netlify.app/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result && result.data.length > 0) {
          setProducts(result.data);
        }
      });
  }, []);

  return (
    <>
      <div className="row">
        {products.map((data, index) => (
          <div className="col-sm-4 d-flex align-items-center justify-content-center">
            <CourseCard key={index} data={data} />
          </div>
        ))}
      </div>
    </>
  );
}
