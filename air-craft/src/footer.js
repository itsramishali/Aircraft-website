import React from 'react';

function Footer() {
  return (
    <>
      <div className="footer">
        <h2 className="tittle pt-5 pb-3">
          <b>SIGN UP TO OUR NEWSLETTER</b>
        </h2>
        <div class="">
          <input className="firstInput" type="text" placeholder="First Name" />
          <input className="lastInput" type="text" placeholder="Last Name" />
          <input
            className="emailInput"
            type="text"
            placeholder="Email Address"
          />
          <button className="buttonInput " type="submit" value="Subscribe">
            SUBSCRIBE
          </button>
        </div>
        <p className="p">
          <b>We respect your privacy.</b>
        </p>
        <p className="mail pt-5">
          <b>
            Mail Us At:{" "}
            <spam className="ps-2">
              <u>example@gmail.com</u>
            </spam>
          </b>
        </p>
        
          <p className="">
            <a className="navFooter" href=""><b>HOME</b></a>&nbsp; &nbsp;&nbsp;<a className="navFooter" href=""><b>ABOUT</b></a>&nbsp;
            &nbsp; <a className="navFooter" href=""><b>INQUIRE</b></a> &nbsp; &nbsp;&nbsp;
            <a className="navFooter" href=""><b>PRIVATE AVIATION</b>&nbsp;</a> &nbsp;&nbsp;&nbsp;
            <a className="navFooter" href=""><b>LIFESTYLE</b>&nbsp;</a> &nbsp; &nbsp;
            <a className="navFooter" href=""><b>#BEMARQUIS</b></a>
          </p>
          <i class="fa-brands fa-pinterest"></i>&nbsp; &nbsp;&nbsp;
          <i class="fa-brands fa-tumblr"></i>&nbsp; &nbsp;
          <i class="fa-brands fa-twitter"></i>&nbsp; &nbsp;&nbsp;
          <i class="fa-brands fa-facebook-f"></i>&nbsp; &nbsp;
          <i class="fa-brands fa-instagram"></i>
          
      </div>
    </>
  );
}

export default Footer;
