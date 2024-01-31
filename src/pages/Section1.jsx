import React, { useContext } from "react";
import { courses } from "../ApiValue";
import { useNavigate } from "react-router-dom";
import { AuthContainVal } from "../AuthProvider/AuthContainer";

function Section1() {
    const{setProducts}=useContext(AuthContainVal)
  const navgate = useNavigate();
  const handleChanges = (el) => {
  setProducts(el);
    navgate("/audio");
  };
  return (
    <div className="section_Top">
      <h1>{courses.heading}</h1>
      <p>{courses.desc}</p>
      <div className="map_card">
        {courses?.cardData.map((el, idx) => (
          <div className="card" key={idx} onClick={(e) => handleChanges(el)}>
            <div className={idx % 2 === 0 ? "heightDiv" : "heightDiv1"}></div>
            <h1>{el.title}</h1>
            <p>
              <span>
                {el.chapters} {"Chapters"}
              </span>{" "}
              <span> . </span>
              <span>{el.duration}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section1;
