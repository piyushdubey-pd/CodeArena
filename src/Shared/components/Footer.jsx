import "./Footer.css";
const Footer = () => {
  return (
    <div class="FooterPos">
      <footer id="dk-footer" class="dk-footer">
        <div class="container">
          <div class="row">
            {/* <!--START OF COLOUMN 1 --> */}
            <div class="col-md-12 col-lg-4">
              <div class="dk-footer-box-info">
                <p
                  class="footer-info-text"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  Get connected with us!
                </p>

                <div class="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i class="fab fa-facebook FootIcon"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/?lang=en">
                        <i class="fab fa-twitter FootIcon"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://myaccount.google.com/">
                        <i class="fab fa-google-plus FootIcon"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/login">
                        <i class="fab fa-linkedin FootIcon"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i class="fab fa-instagram FootIcon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Social link --> */}
              </div>
              {/* <!-- End Footer info --> */}
              <div class="footer-awarad">
                <p>CODE ARENA 2021</p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            {/* <!--START OF THE COLOUMN 2 --> */}
            <div class="col-md-12 col-lg-8">
              <div class="row">
                {/* <!--1st COL of 2nd main COL--> */}

                <div class="col-md-6">
                  <div class="contact-us">
                    <i
                      class="fas fa-map-marker-alt fa-2x"
                      style={{ color: "#ff0000" }}
                    ></i>
                    {/* <!-- End contact Icon --> */}

                    <div class="contact-info" style={{ "margin-left": "20px" }}>
                      <h3>Bangalore, India</h3>
                      <p>
                        Bull Temple Rd, Basavanagudi, Bengaluru, Karnataka
                        560019
                      </p>
                    </div>
                    {/* <!-- End Contact Info --> */}
                  </div>
                  {/* <!-- End Contact Us --> */}
                </div>
                {/* <!-- End Col --> */}

                {/* <!--2nd COL of 2nd MAIN--> */}
                <div class="col-md-6">
                  <div class="contact-us contact-us-last">
                    <i
                      class="fas fa-phone fa-2x"
                      style={{ color: "#ff0000", "margin-left": "20px" }}
                    ></i>
                    {/* <!-- End contact Icon --> */}
                    <div class="contact-info" style={{ "margin-left": "20px" }}>
                      <h3>+91 7349025259</h3>
                      <p>Give us a call !</p>
                    </div>
                    {/* <!-- End Contact Info --> */}
                  </div>

                  {/* <!-- End Contact Us --> */}
                </div>
                {/* <!-- End Col --> */}
              </div>
              {/* <!-- End Contact Row --> */}

              {/* <!--   2nd ROW begins   --> */}
              <div class="row">
                {/* <!--1st COL of 2nd ROW--> */}

                <div class="col-md-12 col-lg-6">
                  <div class="footer-widget footer-left-widget">
                    <div class="section-heading">
                      <h3>Useful Links</h3>
                    </div>

                    {/* <!--LIST 1 --> */}
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="https://campus.bmsce.ac.in/">Our Portal</a>
                      </li>
                      <li>
                        <a href="https://www.bmsce.ac.in/">Know More</a>
                      </li>
                    </ul>

                    {/* <!--LIST 2 --> */}
                    <ul>
                      <li>
                        <a href="/upcoming">About us</a>
                      </li>

                      <li>
                        <a href="/achivements">Meet our Team</a>
                      </li>
                      <li>
                        <a href="/gallery">Gallery</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Footer Widget --> */}
                </div>
                {/* <!-- End col --> */}

                {/* <!-- start of the 2nd COL of 2nd ROW-->
<!--
                    <div class="col-md-12 col-lg-6">
                        <div class="footer-widget footer-rigth-widget">
                        
                            <div class="section-heading">
                            
                                <h3>Get in Touch with us!</h3>
                            </div>
                            <p style="color:#fff;">
                            bmscearena@gmail.com</p>
                            <p></p>
--> */}
                {/* <!--
                            <form action="#">
                                <div class="form-row">
                                    <div class="col dk-footer-form">
                                        <input type="email" class="form-control" placeholder="Email Address">
                                        <button type="submit">
                                            <i class="fas fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            -->
                             */}
                <div class="col-md-11 col-lg-6">
                  <div class="footer-widget footer-rigth-widget">
                    <div class="Mailpos">
                      <div class="contact-us contact-us-last ">
                        <i
                          class="fas fa-envelope fa-2x"
                          style={{ color: "#ff0000" }}
                        ></i>
                        {/* <!-- End contact Icon --> */}
                        <div>
                          <div
                            class="contact-info"
                            style={{ "margin-left": "20px" }}
                          >
                            <h3>codearena@gmail.com</h3>
                            <p>Send us a mail!</p>
                          </div>
                          {/* <!-- End Contact Info --> */}
                        </div>
                      </div>

                      <div>
                        <div class="offset-md-1 copyright">
                          <span>Copyright © 2021, All Right Reserved</span>
                        </div>
                      </div>

                      <div class="copyright offset-md-7">
                        <div class="container">
                          <div class="">
                            <div class=""></div>
                            {/* <!-- End Col --> */}
                          </div>
                          {/* <!-- End Row --> */}
                        </div>
                        {/* <!-- End Copyright Container --> */}
                      </div>

                      {/* <!-- End form --> */}
                    </div>
                    {/* <!-- End footer widget --> */}
                  </div>
                  {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Row --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Widget Row --> */}
          </div>
          {/* <!-- End Contact Container --> */}
        </div>
        {/* // <!--Animated LINE--> */}
        <div>
{/* 
          <div
            style={{ "background-color": "#ff0000" }}
            class="AnimateTop"
          ></div> */}

        </div>

        {/* // <!--COPYRIGHT--> */}

        {/* // <!-- End Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
