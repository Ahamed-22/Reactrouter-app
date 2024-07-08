import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";

export default function CourseCategory() {
  const [ products , setProducts ] = useState([])
  const params = useParams();
  console.log(params);
    useEffect(() => {
    fetch("https://reactrouter-coursesapp.netlify.app/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result && result.data.length > 0) {
          setProducts(result.data.filter((d) => d.subCategory === params.subCategory));
          console.log(setProducts);
        }
      });
  }, [params]);
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
