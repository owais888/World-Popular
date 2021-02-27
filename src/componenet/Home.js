import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <i className="fas fa-globe-africa" style={{ fontSize: 48, color: 'rgb(255, 166, 0)', margin: 5 }} />
          <a className="navbar-brand" href="#" style={{ color: 'cornsilk' }}>WORLD DESTINATION</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/" style={{ color: 'cornsilk' }}>Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Honeymon" style={{ color: 'cornsilk' }}>Honeymoon</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link disabled" to="/Services" style={{ color: 'cornsilk' }}>Our Services</Link>
              </li>
              <li className="nav-item dropdown">
              </li><li className="nav-item active">
                <Link className="nav-link disabled" to="/Contact" style={{ color: 'cornsilk' }}>Contact</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel">
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
          <a className="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">WORLD DESTINATION</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?taksim square" />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE ISTANBUL</h2>
                    <h3 className="title-font text-lg font-medium text-white mb-3">8 Day's Tour</h3>
                    <p className="leading-relaxed">Istanbul is the heart of Turkey as it serves as the most popular tourist destination in the country. With a host of attractions such as the Blue Mosque, Hagia Sophia Museum, and Topkapi Palace Museum, Istanbul is a city where you can never spend enough time</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?Maldives " />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE MALDIVE</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">7 Day's Tour</h1>
                    <p className="leading-relaxed">Angaga Island Resort & Spa is located in the South Ari Atoll and is surrounded by a wealth of natural beauty along with crystal clear waters and a white sandy beach. The island is approximately 45,000 square metres and is superb for snorkeling and  the   beautiful marine life. </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?eiffel tower" />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE FRANCE</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">15 Day's Tour</h1>
                    <p className="leading-relaxed">Custom Getaways is now booking trips to the 2021 Tour de France, June 26 – July 18, 2021!  We are the longest-tenured official tour operator for the Tour de France…18 years in 2021!  We are also one of three premium level partners Our experience and relationship with the Tour allow us </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?burj khalifa" />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE DUBAI</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">3 Day's Tour</h1>
                    <p className="leading-relaxed">The 7 days ‘Super Dubai’ tour package is the perfect option for anyone looking to fully experience Dubai in style! All rates are mentioned on a twin-sharing basis, and are subject to availability.Inner city excursions including Desert Safari and Dhow Cruise,Hotel Accommodation
                    Dubai Visit Visa

</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?Alberta" />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE CANADA</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">15 Day's Tour</h1>
                    <p className="leading-relaxed">04 Exciting Days in Toronto Holiday Travel & Tour Package. 4 Days. Visa. Transfer & Tour. Pkr 104,999/-
09 Days Canada Luxurious Holiday Travel and Tour Package. 09 Days 08 Nights. Tour. Visa. Pkr 264,999/-1 Link. Title: Premio Travels. Account No: Account is available. Branch: Karachi. Close.
Daily breakfast
Return airport transfers
</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?Hunza" />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE HUNZA</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">10 Day's Tour</h1>
                    <p className="leading-relaxed">Hunza is a mountainous valley in the Gilgit–Baltistan region of Pakistan. The Hunza is situated north/west of the Hunza River, at an elevation of around 2,500 meters (8,200 ft).Hunza is a mountainous valley in the Gilgit–Baltistan region of Pakistan. The Hunza is situated north/west of the Hunza River.</p>
                  </div>
                </div>
              </div>
            </div>
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
        <a href="service.html">Our Services</a>
        |
        <a href="honeymoon.html">Honeymoon</a>
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
        </section>
        <style dangerouslySetInnerHTML={{ __html: "\n* {\npadding: 0;\nmargin: 0;\n}\n\nhtml {\nbackground-color: #eaf0f2;\n}\n\nbody {\nfont: 16px/1.6 Arial, sans-serif;\n}\n\nheader {\ntext-align: center;\npadding-top: 100px;\nmargin-bottom: 190px;\n}\n\nheader h1 {\nfont: normal 32px/1.5 'Open Sans', sans-serif;\ncolor: #3F71AE;\npadding-bottom: 16px;\n}\n\nheader h2 {\ncolor: #F05283;\n}\n\nheader span {\ncolor: #3F71EA;\n}\n\n\n/* The footer is fixed to the bottom of the page */\n\n        footer {\n            position: fixed;\n            bottom: 0;\n        }\n\n        @media (max-height:800px) {\n            footer {\n                position: static;\n            }\n\n            header {\n                padding-top: 40px;\n            }\n        }\n\n\n        .footer-distributed {\n            background-color: #29282b;\n            box-sizing: border-box;\n            width: 100%;\n            text-align: left;\n            font: bold 16px sans-serif;\n            padding: 50px 50px 60px 50px;\n            margin-top: 80px;\n        }\n\n        .footer-distributed .footer-left,\n        .footer-distributed .footer-center,\n        .footer-distributed .footer-right {\n            display: inline-block;\n            vertical-align: top;\n        }\n\n        /* Footer left */\n\n        .footer-distributed .footer-left {\n            width: 30%;\n        }\n\n        .footer-distributed h3 {\n            color: #ffffff;\n            font: normal 36px 'Cookie', cursive;\n            margin: 0;\n        }\n\n        /* The company logo */\n\n        .footer-distributed .footer-left img {\n            width: 30%;\n        }\n\n        .footer-distributed h3 span {\n            color: #e0ac1c;\n        }\n\n        /* Footer links */\n\n        .footer-distributed .footer-links {\n            color: #ffffff;\n            margin: 20px 0 12px;\n        }\n\n        .footer-distributed .footer-links a {\n            display: inline-block;\n            line-height: 1.8;\n            text-decoration: none;\n            color: inherit;\n        }\n\n        .footer-distributed .footer-company-name {\n            color: #8f9296;\n            font-size: 14px;\n            font-weight: normal;\n            margin: 0;\n        }\n\n        /* Footer Center */\n\n        .footer-distributed .footer-center {\n            width: 35%;\n        }\n\n\n        .footer-distributed .footer-center i {\n            background-color: #ffaf01;\n            color: #ffffff;\n            font-size: 25px;\n            width: 38px;\n            height: 38px;\n            border-radius: 50%;\n            text-align: center;\n            line-height: 42px;\n            margin: 10px 15px;\n            vertical-align: middle;\n        }\n\n        .footer-distributed .footer-center i.fa-envelope {\n            font-size: 17px;\n            line-height: 38px;\n        }\n\n        .footer-distributed .footer-center p {\n            display: inline-block;\n            color: #ffffff;\n            vertical-align: middle;\n            margin: 0;\n        }\n\n        .footer-distributed .footer-center p span {\n            display: block;\n            font-weight: normal;\n            font-size: 14px;\n            line-height: 2;\n        }\n\n        .footer-distributed .footer-center p a {\n            color: #e0ac1c;\n            text-decoration: none;\n            ;\n        }\n\n\n        /* Footer Right */\n\n        .footer-distributed .footer-right {\n            width: 30%;\n        }\n\n        .footer-distributed .footer-company-about {\n            line-height: 20px;\n            color: #92999f;\n            font-size: 13px;\n            font-weight: normal;\n            margin: 0;\n        }\n\n        .footer-distributed .footer-company-about span {\n            display: block;\n            color: #ffffff;\n            font-size: 18px;\n            font-weight: bold;\n            margin-bottom: 20px;\n        }\n\n        .footer-distributed .footer-icons {\n            margin-top: 25px;\n        }\n\n        .footer-distributed .footer-icons a {\n            display: inline-block;\n            width: 35px;\n            height: 35px;\n            cursor: pointer;\n            background-color: #e62424;\n            border-radius: 2px;\n\n            font-size: 20px;\n            color: #ffffff;\n            text-align: center;\n            line-height: 35px;\n\n            margin-right: 3px;\n            margin-bottom: 5px;\n        }\n\n        /* Here is the code for Responsive Footer */\n        /* You can remove below code if you don't want Footer to be responsive */\n\n\n        @media (max-width: 880px) {\n\n            .footer-distributed .footer-left,\n            .footer-distributed .footer-center,\n            .footer-distributed .footer-right {\n                display: block;\n                width: 100%;\n                margin-bottom: 40px;\n                text-align: center;\n            }\n\n            .footer-distributed .footer-center i {\n                margin-left: 0;\n            }\n\n        }\n    " }} />



      </div>




    );
  }
}

export default Index;