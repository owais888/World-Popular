import React, { Component } from 'react';
import { Link} from "react-router-dom"; 
class Services extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <i className="fas fa-globe-africa" style={{ fontSize: 48, color: 'rgb(255, 166, 0)', margin: 10 }} />
                    <a className="navbar-brand" href="#" style={{ color: 'cornsilk' }}>WORLD DESTINATION</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" style={{ color: 'cornsilk' }}>Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Honeymon" style={{ color: 'cornsilk' }}>Honeymoon</Link>
                            </li>
                            <li className="nav-item dropdown">
                            </li><li className="nav-item active">
                                <Link className="nav-link disabled" to="/Contact" style={{ color: 'cornsilk' }}>Contact</Link>
                            </li>
                       
                        </ul>
                        </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
                {/*Carousel Wrapper*/}
                <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators">
                        <li data-target="#video-carousel-example" data-slide-to={1} />
                        <li data-target="#video-carousel-example" data-slide-to={2} />
                    </ol>
                    {/*/.Indicators*/}
                    {/*Slides*/}
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
                <section className="text-gray-400 bg-gray-800 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">OUR SERVICES</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">We are giving all types of ticket
        booking, Luxury Cars, Standard Cars, Vans &amp; SUV, Luxury Bus on rent. We have team power and branches
        in all over india. Our moto is to provide best service to our customer. Our team is 24hrs ready for
        help.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
          Ticket Booking</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Air Ticket
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Railway Ticket
          </a>
          <a>
            {/* <span class="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Third Link
      </a>
      <a>
        <span class="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Fourth Link
      </a>
      <a>
        <span class="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Fifth Link
      </a> */}
          </a></nav><a>
        </a></div><a>
      </a><div className="p-4 lg:w-1/4 sm:w-1/2 w-full"><a>
          <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
            Cars On Rent</h2>
        </a><nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2"><a>
          </a><a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Mercedes Benz S-Class
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span> Mercedes Benz E-Class
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Model Viano
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Maruti
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Enova
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Indica
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            Van
          </a>
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
          Luxury Bus</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>7 Seater
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>9 Seater
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>35 Seater
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>38 Seater
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Volvo Coach
          </a>
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
          Hotel Booking</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>3 Star Hotel
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>4 Star Hotel
          </a>
          <a>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>5 Star Hotel
          </a>
          {/* <a>
        <span class="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Fourth Link
      </a>
      <a>
        <span class="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Fifth Link
      </a> */}
        </nav>
      </div>
    </div>
    {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>

                <footer className="footer-distributed">
                    <div className="footer-left">
                        <i className="fas fa-globe-africa" style={{ fontSize: 30, color: 'rgb(250, 114, 2)' }} />
                        <i className="fas fa-umbrella-beach" style={{ fontSize: 30, color: 'rgb(250, 144, 2)', margin: 10 }} />
                        <i className="fas fa-bus" style={{ fontSize: 30, color: 'rgb(250, 144, 2)' }} />
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
        Humanities.
      </p>
                        <div className="footer-icons">
                            <a href><i className="fa fa-facebook" /></a>
                            <a href="https://www.twitter.com"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-instagram" /></a>
                            <a href="http://www.limkdin.com"><i className="fa fa-linkedin" /></a>
                            <a href="http://www.youtube.com"><i className="fa fa-youtube" /></a>
                        </div>
                    </div>
                </footer>
</section>
                <style dangerouslySetInnerHTML={{ __html: "\n        * {\n            padding: 0;\n            margin: 0;\n        }\n\n        html {\n            background-color: #eaf0f2;\n        }\n\n        body {\n            font: 16px/1.6 Arial, sans-serif;\n        }\n\n        header {\n            text-align: center;\n            padding-top: 100px;\n            margin-bottom: 190px;\n        }\n\n        header h1 {\n            font: normal 32px/1.5 'Open Sans', sans-serif;\n            color: #3F71AE;\n            padding-bottom: 16px;\n        }\n\n        header h2 {\n            color: #F05283;\n        }\n\n        header span {\n            color: #3F71EA;\n        }\n\n\n        /* The footer is fixed to the bottom of the page */\n\n        footer {\n            position: fixed;\n            bottom: 0;\n        }\n\n        @media (max-height:800px) {\n            footer {\n                position: static;\n            }\n\n            header {\n                padding-top: 40px;\n            }\n        }\n\n\n        .footer-distributed {\n            background-color: #29282b;\n            box-sizing: border-box;\n            width: 100%;\n            text-align: left;\n            font: bold 16px sans-serif;\n            padding: 50px 50px 60px 50px;\n            margin-top: 80px;\n        }\n\n        .footer-distributed .footer-left,\n        .footer-distributed .footer-center,\n        .footer-distributed .footer-right {\n            display: inline-block;\n            vertical-align: top;\n        }\n\n        /* Footer left */\n\n        .footer-distributed .footer-left {\n            width: 30%;\n        }\n\n        .footer-distributed h3 {\n            color: #ffffff;\n            font: normal 36px 'Cookie', cursive;\n            margin: 0;\n        }\n\n        /* The company logo */\n\n        .footer-distributed .footer-left img {\n            width: 30%;\n        }\n\n        .footer-distributed h3 span {\n            color: #e0ac1c;\n        }\n\n        /* Footer links */\n\n        .footer-distributed .footer-links {\n            color: #ffffff;\n            margin: 20px 0 12px;\n        }\n\n        .footer-distributed .footer-links a {\n            display: inline-block;\n            line-height: 1.8;\n            text-decoration: none;\n            color: inherit;\n        }\n\n        .footer-distributed .footer-company-name {\n            color: #8f9296;\n            font-size: 14px;\n            font-weight: normal;\n            margin: 0;\n        }\n\n        /* Footer Center */\n\n        .footer-distributed .footer-center {\n            width: 35%;\n\n        }\n\n\n        .footer-distributed .footer-center i {\n            background-color: #ffaf01;\n            color: #ffffff;\n            font-size: 25px;\n            width: 38px;\n            height: 38px;\n            border-radius: 50%;\n            text-align: center;\n            line-height: 42px;\n            margin: 10px 15px;\n            vertical-align: middle;\n        }\n\n        .footer-distributed .footer-center i.fa-envelope {\n            font-size: 17px;\n            line-height: 38px;\n        }\n\n        .footer-distributed .footer-center p {\n            display: inline-block;\n            color: #ffffff;\n            vertical-align: middle;\n            margin: 0;\n        }\n\n        .footer-distributed .footer-center p span {\n            display: block;\n            font-weight: normal;\n            font-size: 14px;\n            line-height: 2;\n        }\n\n        .footer-distributed .footer-center p a {\n            color: #e0ac1c;\n            text-decoration: none;\n            ;\n        }\n\n\n        /* Footer Right */\n\n        .footer-distributed .footer-right {\n            width: 30%;\n        }\n\n        .footer-distributed .footer-company-about {\n            line-height: 20px;\n            color: #92999f;\n            font-size: 13px;\n            font-weight: normal;\n            margin: 0;\n        }\n\n        .footer-distributed .footer-company-about span {\n            display: block;\n            color: #ffffff;\n            font-size: 18px;\n            font-weight: bold;\n            margin-bottom: 20px;\n        }\n\n        .footer-distributed .footer-icons {\n            margin-top: 25px;\n        }\n\n        .footer-distributed .footer-icons a {\n            display: inline-block;\n            width: 35px;\n            height: 35px;\n            cursor: pointer;\n            background-color: #e62424;\n            border-radius: 2px;\n\n            font-size: 20px;\n            color: #ffffff;\n            text-align: center;\n            line-height: 35px;\n\n            margin-right: 3px;\n            margin-bottom: 5px;\n        }\n\n        /* Here is the code for Responsive Footer */\n        /* You can remove below code if you don't want Footer to be responsive */\n\n\n        @media (max-width: 880px) {\n\n            .footer-distributed .footer-left,\n            .footer-distributed .footer-center,\n            .footer-distributed .footer-right {\n                display: block;\n                width: 100%;\n                margin-bottom: 40px;\n                text-align: center;\n            }\n\n            .footer-distributed .footer-center i {\n                margin-left: 0;\n            }\n\n        }\n    " }} />
            </div>

        );
    }
}

export default Services;