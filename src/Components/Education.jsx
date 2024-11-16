/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/education-picture3.png";

const imageAltText = "A Fantasy Dream Astronaut";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const academicEducation = [
  {
    title: "University of Sciences and Technologies of Houari Boumedienne, Algiers, Algeria",
    description: "Bachelor's Degree candidate in Information Systems and Software Engineering",
    url: "https://finfo.usthb.dz",
  },
];

const Education = () => {
  return (
    <section className="" id="education" style={{ paddingTop: "3rem" }}>
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "50%", alignSelf: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src={image}
            style={{ width: "70%", objectFit: "cover" }}
            alt={imageAltText}
          />
          <div className="">
            {academicEducation.map((education) => (
              <div className="box" key={education.title} style={{ width: "100%", backgroundColor: "rgb(78, 86, 126)", color: "white" }}>
                <a href={education.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ color: "white" }}>{education.title}</h3>
                </a>
                <p className="small">{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
