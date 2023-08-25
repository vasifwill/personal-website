import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Vasif",
  avatarImage: "/images/avatar-2.svg",
  content:
    "For the past 5 years, I’ve been working alongside the Front-end developer's team to help create and optimize web applications. I have written software mostly in Javascript. My biggest accomplishment has been coming up with learning Reactjs that I used to create an optimized frontend - user interface in my previous applications."
};

const progressData = [
  {
    id: 1,
    title: "ReactJs",
    percantage: 95,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Javascript",
    percantage: 95,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Nodejs/Express/MongoDb/Google Cloud",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
  {
    id: 3,
    title: "Unit Testing/Selenium",
    percantage: 60,
    progressColor: "#6C6CE5",
  }
];

const counterData = [
  {
    id: 1,
    title: "Tasks",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of Tea",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied Users",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Projects",
    count: 4,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>
          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="https://drive.google.com/uc?export=download&id=1EtwlZhj0DmqK4l_yYr46NUIkhsq7R_fk" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
