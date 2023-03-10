import React from "react";
import "./App.css";

function Footer() {
  return (
    <>
      <div className="Footer mt-5">
        <footer class="page-footer font-small mdb-color lighten-3 pt-4">
          <div class="container text-center text-md-left">
            <div class="row">
              <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                <h5 class="font-weight-bold text-uppercase mb-4">AURA-LANKA</h5>
                <p>
                  Aura Airlines is a concept of conglomerate in the Airline
                  Industry in Sri Lanka dedicating its approach mainly to
                  Private & Business Airline, as an exclusive platform which
                  customers can benefit from in the fields of Leisure, Corporate
                  and VIP transport solutions, and service for both domestic and
                  international market.
                </p>
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7921.855178098111!2d79.9475817!3d6.8992638!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae250cc8213779f%3A0x4624ec10005649e3!2s949%20Udawatta%20Road%20Malabe!3m2!1d6.899104899999999!2d79.947553!5e0!3m2!1sen!2slk!4v1663602628626!5m2!1sen!2slk"
                    width="600"
                    height="120"
                  ></iframe>
                </div>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 class="font-weight-bold text-uppercase mb-4">
                  Quick Links
                </h5>

                <ul class="">
                  <li>
                    <p>
                      <a href="#!">HOME</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">Book</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">About Us</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">Contact Us</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">Membership</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">Destination</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">Offers</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">Inquire</a>
                    </p>
                  </li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 class="font-weight-bold text-uppercase mb-4">
                  Our Subsidiaries
                </h5>
                <p>Aura Lanka Gem & Museum</p>
                <p>Aura Lanka Security</p>
                <p>Aura Airlines</p>
                <p>Aura Lanka Construction</p>
                <p>Aura Lanka Enterainment</p>
                <p>Aura Sports</p>
                <p>Aura Lanka LLC USA</p>
                <p>Aura Jeewa</p>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
                <h5 class="font-weight-bold text-uppercase ">Contact Info</h5>

                <ul class="">
                  <li>
                    <p>
                      <i class="fa-solid fa-phone"></i>+(94)773333966
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="fa-solid fa-user"></i> Dr.Viranjith Thambugala -
                      Chairman
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="fas fa-envelope"></i>info@Auralankaherbals.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="fa-solid fa-map"></i>949/13 dawatta RThalangama
                      North,Malabe
                    </p>
                  </li>
                </ul>

                <a
                  type="button"
                  className="btn-floating btn-fb icon-size waves-effect waves-light"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a
                  type="button"
                  className="btn-floating btn-tw icon-size waves-effect waves-light"
                >
                <i class="fa-brands fa-youtube"></i>
                </a>

                <a
                  type="button"
                  className="btn-floating btn-gplus icon-size waves-effect waves-light"
                >
              <i class="fa-brands fa-instagram"></i>
                </a>

           
              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">
            Copyright 2022 By Aura LANKA |All Right Reserved
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
