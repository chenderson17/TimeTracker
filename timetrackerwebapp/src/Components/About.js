import React from "react";
import './About.css';
export default function About(){
 return(
  <div className="home-about">
  <h2 className="about-us-header">About Us</h2>
   <section className = 'our-start'>
    <h3>Our Start</h3>
    <p>We are thrilled to embark on a new journey as TimeTracker, a dynamic and innovative venture founded on the principles of excellence and creativity. Our mission is to With a dedicated team of experts and a passion for technology. As we embark on this exciting chapter, we are committed to fostering growth, cultivating meaningful relationships, and making a positive impact in our community. Join us on this exciting adventure as we shape the future of the employee managemnt sector.</p>
   </section>
    <section className = 'core-principles'>
    <h3>Core Principles</h3>
    <div className="simplicity">
     <h4>Simplicity</h4>
     <p>Strive for simplicity in design and implementation. Avoid unnecessary complexity, making systems and solutions more understandable and maintainable.</p>
    </div>


    <div className="modularity">
     <h4>Modularity</h4>
     <p>Encourage modular design to break down complex systems into smaller, manageable components. This enhances flexibility, reusability, and ease of maintenance.</p>
    </div>


    <div className="scalability">
     <h4>Scalability</h4>
     <p>Design systems that can handle growth and increased demand. Scalability ensures performance, responsiveness, and resource efficiency as usage or data volume expands.</p>
    </div>

    <div className="Maintainability">
     <h4>Maintainability</h4>
     <p>Prioritize code readability, documentation, and adherence to coding standards. Maintainable code is easier to troubleshoot, update, and extend over time, promoting long-term sustainability.</p>
    </div>


    

   </section>
  </div>
 )
}