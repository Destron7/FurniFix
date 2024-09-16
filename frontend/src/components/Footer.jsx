import React from 'react'
import '../../public/css/footer.css'

function Footer() {
  return (
    <>
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-row">
      <div class="footer-column">
        <h3>Funifix</h3>
        <p>We specialize in fixing and refurnishing furniture with quality craftsmanship. Contact us to give your furniture a new life.</p>
      </div>
      <div class="footer-column">
        <h3>Quick Links</h3>
        <ul class="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Contact Us</h3>
        <p>Email: info@funifix.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Location: 1234 Furniture St, City, Country</p>
      </div>
      <div class="footer-column">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://github.com/"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Funifix</p>
    </div>
  </div>
</footer>
</>
  )
}

export default Footer