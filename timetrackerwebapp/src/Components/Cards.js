import './Cards.css';
import 'boxicons';
export default function Cards(){
 return(
  <>
  <section className="cards-section">
   <h2 className="cards-header">Services</h2>
 <div className="cards-container">
 <div className="scheduling card">
  <h3>Scheduling</h3>
  <box-icon name='calendar-week'></box-icon>
  <p>Optimize your workflow with our intuitive scheduling system. Seamlessly manage appointments, deadlines, and events. Enhance collaboration and productivity by effortlessly coordinating tasks, ensuring everyone stays on track and meets goals efficiently.</p>
 </div>
 <div className="Time Tracking card">
  <h3>Time Tracking</h3>
  <box-icon name='timer'></box-icon>
  <p>Effortlessly monitor and manage time with our intuitive tracking solution. Track work hours, project progress, and task completion seamlessly. Boost productivity by gaining insights into time utilization and making informed decisions for efficient project management and goal achievement.</p>
 </div>
 <div className="Analytics card">
  <h3>Analytics</h3>
  <box-icon name='bar-chart-square'></box-icon>
  <p>Make data-driven decisions with our powerful analytics platform. Gain valuable insights into performance, project efficiency, and resource allocation. Track key metrics, identify trends, and optimize strategies for improved outcomes. Elevate your decision-making process and drive success through informed, analytics-driven actions.</p>
 </div>
 </div>
 </section>
 </>
 )
}