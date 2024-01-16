import './contact.css';
export default function Contact(){
 return(
  <section className='contact-section'>
   <h2 className="contact-header">Contact Us</h2>
   <form>
    <div className="fname-container">
    <label name='fname'>First Name</label>
    <input type='text' name='fname' placeholder="First Name"/>
    </div>

    <div className="lname-container">
    <label name='lname'>Last Name</label>
    <input type='text' name='lname' placeholder="Last Name"/>
    </div>

    <div className="email-container">
    <label name="contact-email">Email</label>
    <input type="email" name="contact-email" placeholder="Email" />
    </div>

    <div className="phone-container">
    <label name="contact-phone">Phone</label>
    <input type="phone" name="contact-phone" placeholder="(555)-555-5555"/>
    </div>

    <div className="contact-message-container">
    <label name="contact-message">Message</label>
    <textarea name="contact-message" cols="30" rows="5"></textarea>
    </div>
   </form>
  </section>
 )
}