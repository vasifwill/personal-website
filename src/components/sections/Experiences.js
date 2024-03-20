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
    years: "2017 - 2028",
    content:
      "Finished full stack web developer course at Eemrson College.",
  },
  {
    id: 3,
    title: "Digital Marketing Bootcamp Certificate",
    years: "2016 - 2017",
    content:
      "Finished Digital Marketing courses in General Assembly in Boston, MA",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Web Frontend Developer.",
    years: "2022 - 2022",
    content:
      "Frontend Web Developer position at Truist Banker.Utilized  Reactjs components to increase user engagement and simplify navigation.",
  },
  {
    id: 2,
    title: "Web Frontend Frontend",
    years: "2019 - 2022",
    content:
      "Frontend Web Developer position at Harford Financial Service Group. We built a financial data visualization platform using HTML, CSS, JavaScript, D3.js, and ReactJs"
  },
  {
    id: 3,
    title: "Web Frontend Frontend",
    years: "2017 - 2019",
    content:
      "Frontend Web Developer position at ifixonwheelz.com.",
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
