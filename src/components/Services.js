import React, { useState } from "react";

const services = [
    {
      id: "realestate",
      icon: <i className="fa-solid fa-thumbs-up text-blue-800 text-4xl mb-2"></i>,
      title: "Real Estate Done Right",
      description:
        "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      image: "https://img1.wsimg.com/isteam/stock/12792/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",  
    },
    {
      id: "commercial",
      icon: <i className="fas fa-house text-blue-800 text-4xl mb-2"></i>,
      title: "Commercial & Residential",
      description:
        "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
        image: "https://img1.wsimg.com/isteam/stock/43920/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",  

    },
    {
      id: "expertise",
      icon: <i className="fa-solid fa-list-check text-blue-800 text-4xl mb-2"></i>,
      title: "Rely on Expertise",
      description:
        "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
        image: "https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",  

    },
  ];

const Services = () => {
    const [activeTab, setActiveTab] = useState("realestate");

    const activeService = services.find((s) => s.id === activeTab);
  
    return (
      <section className="text-black py-[150px] md:px-12 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center md:items-start text-center md:text-left">
    <div className="h-[5px] w-[150px] bg-gradient-to-r from-blue-500 to-green-500 mb-10"></div>
    <h2 className="text-4xl lg:text-[42px] mb-4 font-[Georgia,serif]">Our Services</h2>
    <p className="text-gray-700 mb-10 max-w-xl">
      We're here to make your real estate journey smooth, informed, and stress-free every step of the way.
    </p>
  
          {/* Tabs */}
          <div className="flex">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex flex-wrap items-center gap-2 px-5 py-2 rounded-t-[20px] ${
                  activeTab === service.id
                    ? "bg-gray-100 text-gray-700 text-sm"
                    : "bg-gray-300 text-gray-500 hover:bg-gray-100 text-sm"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
  
          {/* Content */}
          <div className="bg-white p-8 rounded-b-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4 text-2xl">
       
                <h3 className="text-gray-900 text-3xl font-[Georgia,serif]">{activeService.title}</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                {activeService.description}
              </p>
            </div>
  
            <img src={activeService.image}  alt={activeService.title}  className="rounded-2xl shadow-lg w-full object-cover h-72"
/>
          </div>
        </div>
      </section>
    );
  };

export default Services;
