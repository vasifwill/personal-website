import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor’s Degree",
    years: "2011 - 2015",
    content:
      "Graduated from A.T.E.I and ATM university with Bachelor's Degree in Engineering of Economy. Minor Marketing.",
  },
  {
    id: 2,
    title: "Bootcamp Certificate",
    years: "2019 - 2020",
    content:
      "Finished full stack web developer course at Eemrson College.",
  },
  {
    id: 3,
    title: "Digital Marketing Bootcamp Certificate",
    years: "2013 - 2009",
    content:
      "Finished Digital Marketing courses in General Assembly in Boston, MA",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Web Frontend Developer.",
    years: "2020 - Present",
    content:
      "Frontend Web Developer position at IfixOnWheelz.com.Utilized  Reactjs components Forms, Events, Keys, Router, and Redux. Selenium fixing bugs and testing for usability.",
  },
  {
    id: 2,
    title: "Web Frontend Frontend",
    years: "2019 - 2020",
    content:
      "Frontend Web Developer position at Labvoce company",
  },
  {
    id: 3,
    title: "Web Frontend Frontend",
    years: "2018 - 2019",
    content:
      "Frontend Web Developer position at Labvoce company",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
