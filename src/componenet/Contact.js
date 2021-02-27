import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <i className="fas fa-globe-africa" style={{fontSize: 48, color: 'rgb(255, 166, 0)', margin: 10}} />
    <a className="navbar-brand" href="#" style={{color: 'cornsilk'}}>WORLD DESTINATION</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/" style={{color: 'cornsilk'}}>Home<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/honeymon" style={{color: 'cornsilk'}}>Honeymoon</Link>
        </li>
        <li className="nav-item dropdown">
        </li><li className="nav-item active">
          <Link className="nav-link disabled" to="/Services" style={{color: 'cornsilk'}}>Our Services</Link>
        </li>
        
      
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" href="http://www.youtube.com" aria-label="Search" />
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel">
    {/*Indicators*/}
    <ol className="carousel-indicators">
      <li data-target="#video-carousel-example" data-slide-to={1} />
      <li data-target="#video-carousel-example" data-slide-to={2} />
    </ol>
   
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <video className="video-fluid" autoPlay loop muted>
          <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="carousel-item">
        <video className="video-fluid" autoPlay loop muted>
          <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    {/*/.Slides*/}
    {/*Controls*/}
    <a className="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
    {/*/.Controls*/}
  </div>
  <section className="text-gray-400 bg-gray-800 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{color: 'white'}}>Office hours are Monday through Friday from 8:00am to 5:00pm MST.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email owais</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
          <a className="text-indigo-400">World-destination@email.com</a>
          <p className="leading-normal my-5">49 Smith St.
            <br />Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* </section>
 */}
  <footer className="footer-distributed">
    <div className="footer-left">
      <i className="fas fa-globe-africa" style={{fontSize: 30, color: 'rgb(250, 114, 2)'}} />
      <i className="fas fa-umbrella-beach" style={{fontSize: 30, color: 'rgb(250, 144, 2)', margin: 10}} />
      <i className="fas fa-bus" style={{fontSize: 30, color: 'rgb(250, 144, 2)'}} />
      <h3>World<span>Destination</span></h3>
      <p className="footer-links">
        <a href="index.html">Home</a>
        |
        <a href="honeymoon.html">Honeymoon</a>
        |
        <a href="service.html">Our Services</a>
        |
        <a href="contact.html">Contact</a>
      </p>
      <p className="footer-company-name">© 2019 Eduonix Learning Solutions Pvt. Ltd.</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p><span>309 - Rupa Solitaire,
            Bldg. No. A - 1, Sector - 1</span>
          Mahape, Navi Mumbai - 400710</p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>+91 22-27782183</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p><a href="mailto:support@eduonix.com">support@eduonix.com</a></p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        We offer training and skill building courses across Technology, Design, Management, Science and
        Humanities.</p>
      <div className="footer-icons">
        <a href><i className="fa fa-facebook" /></a>
        <a href="https://www.twitter.com"><i className="fa fa-twitter" /></a>
        <a href="#"><i className="fa fa-instagram" /></a>
        <a href="http://www.limkdin.com"><i className="fa fa-linkedin" /></a>
        <a href="http://www.youtube.com"><i className="fa fa-youtube" /></a>
      </div>
    </div>
  </footer>
  <style dangerouslySetInnerHTML={{__html: "\n    * {\n        padding: 0;\n        margin: 0;\n    }\n\n    /* html {\n        background-color: #fdfeff;\n    } */\n\n    body {\n        font: 16px/1.6 Arial, sans-serif;\n    }\n\n    header {\n        text-align: center;\n        padding-top: 100px;\n        margin-bottom: 190px;\n    }\n\n    header h1 {\n        font: normal 32px/1.5 'Open Sans', sans-serif;\n        color: #3F71AE;\n        padding-bottom: 16px;\n    }\n\n    header h2 {\n        color: #F05283;\n    }\n\n    header span {\n        color: #3F71EA;\n    }\n\n\n    /* The footer is fixed to the bottom of the page */\n\n    footer {\n        position: fixed;\n        bottom: 0;\n    }\n\n    @media (max-height:800px) {\n        footer {\n            position: static;\n        }\n\n        header {\n            padding-top: 40px;\n        }\n    }\n\n\n    .footer-distributed {\n        background-color: #29282b;\n        box-sizing: border-box;\n        width: 100%;\n        text-align: left;\n        font: bold 16px sans-serif;\n        padding: 50px 50px 60px 50px;\n        margin-top: 80px;\n    }\n\n    .footer-distributed .footer-left,\n    .footer-distributed .footer-center,\n    .footer-distributed .footer-right {\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    /* Footer left */\n\n    .footer-distributed .footer-left {\n        width: 30%;\n    }\n\n    .footer-distributed h3 {\n        color: #ffffff;\n        font: normal 36px 'Cookie', cursive;\n        margin: 0;\n    }\n\n    /* The company logo */\n\n    .footer-distributed .footer-left img {\n        width: 30%;\n    }\n\n    .footer-distributed h3 span {\n        color: #e0ac1c;\n    }\n\n    /* Footer links */\n\n    .footer-distributed .footer-links {\n        color: #ffffff;\n        margin: 20px 0 12px;\n    }\n\n    .footer-distributed .footer-links a {\n        display: inline-block;\n        line-height: 1.8;\n        text-decoration: none;\n        color: inherit;\n    }\n\n    .footer-distributed .footer-company-name {\n        color: #8f9296;\n        font-size: 14px;\n        font-weight: normal;\n        margin: 0;\n    }\n\n    /* Footer Center */\n\n    .footer-distributed .footer-center {\n        width: 35%;\n    }\n\n\n    .footer-distributed .footer-center i {\n        background-color: #ffaf01;\n        color: #ffffff;\n        font-size: 25px;\n        width: 38px;\n        height: 38px;\n        border-radius: 50%;\n        text-align: center;\n        line-height: 42px;\n        margin: 10px 15px;\n        vertical-align: middle;\n    }\n\n    .footer-distributed .footer-center i.fa-envelope {\n        font-size: 17px;\n        line-height: 38px;\n    }\n\n    .footer-distributed .footer-center p {\n        display: inline-block;\n        color: #ffffff;\n        vertical-align: middle;\n        margin: 0;\n    }\n\n    .footer-distributed .footer-center p span {\n        display: block;\n        font-weight: normal;\n        font-size: 14px;\n        line-height: 2;\n    }\n\n    .footer-distributed .footer-center p a {\n        color: #e0ac1c;\n        text-decoration: none;\n        ;\n    }\n\n\n    /* Footer Right */\n\n    .footer-distributed .footer-right {\n        width: 30%;\n    }\n\n    .footer-distributed .footer-company-about {\n        line-height: 20px;\n        color: #92999f;\n        font-size: 13px;\n        font-weight: normal;\n        margin: 0;\n    }\n\n    .footer-distributed .footer-company-about span {\n        display: block;\n        color: #ffffff;\n        font-size: 18px;\n        font-weight: bold;\n        margin-bottom: 20px;\n    }\n\n    .footer-distributed .footer-icons {\n        margin-top: 25px;\n    }\n\n    .footer-distributed .footer-icons a {\n        display: inline-block;\n        width: 35px;\n        height: 35px;\n        cursor: pointer;\n        background-color: #e62424;\n        border-radius: 2px;\n\n        font-size: 20px;\n        color: #ffffff;\n        text-align: center;\n        line-height: 35px;\n\n        margin-right: 3px;\n        margin-bottom: 5px;\n    }\n\n    /* Here is the code for Responsive Footer */\n    /* You can remove below code if you don't want Footer to be responsive */\n\n\n    @media (max-width: 880px) {\n\n        .footer-distributed .footer-left,\n        .footer-distributed .footer-center,\n        .footer-distributed .footer-right {\n            display: block;\n            width: 100%;\n            margin-bottom: 40px;\n            text-align: center;\n        }\n\n        .footer-distributed .footer-center i {\n            margin-left: 0;\n        }\n\n    }\n" }} />
</section>

            </div>

        );
    }
}

export default Contact;