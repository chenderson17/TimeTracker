export default function Contact(){
 return(
  <section className='contact-section'>
   <h2>Contact Us</h2>
   <form>
    <label name='fname'>First Name</label>
    <input type='text' name='fname' placeholder="First Name"/>
    <label name='lname'>Last Name</label>
    <input type='text' name='lname' placeholder="Last Name"/>
    <label name="contact-email">Email</label>
    <input type="email" name="contact-email" placeholder="Email" />
    <label name="contact-phone">Phone</label>
    <input type="phone" name="contact-phone" placeholder="(555)-555-5555"/>
    <label name="contact-message">Message</label>
    <textarea name="contact-message" cols="30" rows="5"></textarea>
   </form>
  </section>
 )
}