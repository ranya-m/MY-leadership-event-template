import React from "react";
import { Component } from "react";
import image1 from "../img/img1.jpg";
import image2 from "../img/img2.jpg";
import image3 from "../img/img3.jpg";
import image4 from "../img/img4.jpg";
import image5 from "../img/img5.jpg";
import Speaker from "../speaker/speaker";
import style from "./speakers.module.css";
import Title from '../Titles/titles.jsx';


class Speakers extends Component {
  render() {
    return (
      <>
        <section className={style.speakers}>
          <div className="container">
            <div className={style.top}>
              <div className={style.description}>
              <div className="storyTitleContainer">
               <Title className="storyTitle" fontSize="30px" color="black" textBlackWhite="Our" textBlue="Speakers" textAlign="center"></Title>
            </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, provident.
                </p>
              </div>
              <Speaker
                img={image1}
                job="CEO"
                name="Ursula"
                height="350px"
              />
            </div>
            <div className={style.bottom}>
              <Speaker img={image2} job="Co-Founder" name="Big Boss" />
              <Speaker img={image3} job="Manager" name="Mystery Man" />
              <Speaker img={image4} job="Manager of the Manager" name="Jane Doe" />
              <Speaker img={image5} job="Human Resources" name="John Wick" />
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Speakers;
