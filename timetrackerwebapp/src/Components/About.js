import React from "react";
import './About.css';
export default function About(){
 return(
  <div className="home-about">
    <a id="about"></a>
  <h2 className="about-us-header">About Us</h2>
   <section className = 'our-start'>
    <h3>Our Start</h3>
    <p>We are thrilled to embark on a new journey as TimeTracker, a dynamic and innovative venture founded on the principles of excellence and creativity. Our mission is to With a dedicated team of experts and a passion for technology. As we embark on this exciting chapter, we are committed to fostering growth, cultivating meaningful relationships, and making a positive impact in our community. Join us on this exciting adventure as we shape the future of the employee managemnt sector.</p>
    <h3>Our Mission</h3>
    <p>At TimeTracker, our mission is to revolutionize workforce management through innovative and user-friendly employee scheduling software. We are committed to providing businesses with a seamless solution that optimizes scheduling processes, enhances employee satisfaction, and fosters operational efficiency. By empowering organizations to effortlessly manage their workforce, we strive to contribute to their success and growth in the ever-evolving landscape of modern business.</p>
   </section>
    <section className = 'core-principles'>
    <h3>Core Principles</h3>
    <ul className="principles-list">
  <li className="simplicity">
    <h4>Simplicity</h4>
    <p>Strive for simplicity in design and implementation. Avoid unnecessary complexity, making systems and solutions more understandable and maintainable.</p>
  </li>

  <li className="modularity">
    <h4>Modularity</h4>
    <p>Encourage modular design to break down complex systems into smaller, manageable components. This enhances flexibility, reusability, and ease of maintenance.</p>
  </li>

  <li className="scalability">
    <h4>Scalability</h4>
    <p>Design systems that can handle growth and increased demand. Scalability ensures performance, responsiveness, and resource efficiency as usage or data volume expands.</p>
  </li>

  <li className="maintainability">
    <h4>Maintainability</h4>
    <p>Prioritize code readability, documentation, and adherence to coding standards. Maintainable code is easier to troubleshoot, update, and extend over time, promoting long-term sustainability.</p>
  </li>
</ul>


    

   </section>
  </div>
 )
}