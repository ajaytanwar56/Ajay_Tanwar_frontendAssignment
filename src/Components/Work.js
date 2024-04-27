import React from "react";
import PickMeals from "../Assets/first.png";
import ChooseMeals from "../Assets/second.png";
import DeliveryMeals from "../Assets/third.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">LATEST INSIGHTS</h1>
        <p className="primary-text">
          Stay updated and inspired with our latest insights into a variety of topics, ranging from technology trends to lifestyle tips. 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            {/* <h2>{data.title}</h2>
            <p>{data.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
