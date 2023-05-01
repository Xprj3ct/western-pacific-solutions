import React, { useEffect } from 'react'
import { BsCheck2Circle } from 'react-icons/bs';
import "./Hero.css"
import videoBg from "../../assets/videoBg.mp4";
import Man from '../../assets/man.png'
import Dredging from '../../assets/Dredging2.png'
import Design from '../../assets/Engineeringdesign.png'
import RigandVessel from '../../assets/rigandvessel.png'
import Marinesupport from '../../assets/Marine support.png'
import Diving from '../../assets/diving.png'
import Dirt from '../../assets/dirt.jpg'
import TypeWriterEffect from 'react-typewriter-effect';
import Responsibility from "../../assets/honesty.png"
import Excellence from "../../assets/service.png"
import Result from "../../assets/business.png"
import Integrity from "../../assets/outstanding..png"
import Safety from "../../assets/helment.png"
import Shiprepair from "../../assets/ship-repair.jpg"

const Hero = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80";
  return (
    <section className="overflow-x-hidden">
      <div className="grid lg:grid-cols-12 md:mb-0 mb-12">
        <div className="col-span-12 lg:col-span-6" data-aos="slide-right">
          <div
            className="w-full lg:h-[700px] h-[200px]"
            id="image-div clip-path-bottom-right"
          >
            <img
              src="https://cdn.pixabay.com/photo/2021/08/24/07/00/cargo-ship-6569723_960_720.jpg"
              alt="sea-image"
              className="h-full w-full object-cover"
              id="clip-path-bottom-right"
            />
          </div>
        </div>
        <div
          className="col-span-12 lg:col-span-6 flex items-center pl-10 relative -mt-20 pt-16 lg:mt-0 md:pt-0"
          data-aos="slide-left"
        >
          <div id="who" className="lg:pb-10 pr-4 lg:pr-0">
            <h1 className="text-jet text-[2rem] py-5 lg:text-[3rem] lg:text-5xl font-extrabold tracking-wider uppercase lg:pt-0 ">
              <span className="text-blue-600 flex flex-col gap-3">
                <span className="text-[#021D27]">OUR</span>{" "}
                <span>
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "rgb(34, 34, 233)",
                      fontWeight: 700,
                      display: "",
                    }}
                    startDelay={2000}
                    cursorColor="rgb(34, 34, 233)"
                    multiText={["Company profile"]}
                    multiTextDelay={2000}
                    typeSpeed={60}
                  />
                </span>
              </span>
            </h1>
            <p className="text-black lg:pr-20 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl lg:first-line lg:font-medium font-light">
              Established in 2018 with a burning desire to meet the growing
              demand for quality service delivery in the maritime and Oil & Gas
              sectors, Western Pacific Solutions Limited has grown to be a major
              marine support service companyin Nigeria and other West African
              countries.
              <div>
                <h1 className="uppercase pt-3 font-semibold flex md:items-start md:justify-start items-center justify-center text-2xl">
                  Our Values:
                </h1>
                <div className="flex md:flex-row flex-col py-5 gap-2 md:gap-5">
                  <div className="flex gap-5 justify-center items-center">
                    <div className="flex flex-col items-center justify-center">
                      <img src={Responsibility} className="w-20" alt="" />
                      <span className="uppercase text-sm">Responsibility</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img src={Excellence} className="w-20" alt="" />
                      <span className="uppercase text-sm">Excellence</span>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-center items-center">
                    <div className="flex flex-col items-center justify-center">
                      <img src={Result} className="w-20" alt="" />
                      <span className="uppercase text-sm flex md:flex-row gap-1 flex-col items-center">
                        <span>Result</span>
                        <span>Oriented</span>
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img src={Integrity} className="w-20" alt="" />
                      <span className="uppercase text-sm">Integrity</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-5">
                    <div
                      className="flex flex-col items-center justify-center"
                    >
                      <img src={Safety} className="w-20" alt="" />
                      <span className="uppercase text-sm">Safety</span>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12  flex flex-col-reverse">
        <div
          className="lg:col-span-6 col-span-12 blue-bg flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full h-full bg-white"
          data-aos="fade-left"
        >
          <div className="flex md:flex-row flex-col gap-6">
            {" "}
            <p className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold">
              Within its few years of existence, Western Pacific has proven to
              be the leading and fastest-growing company dealing majorly with
              Marine Support Services, Waste Management Services and Engineering
              Designs. Our time and cost-effective approach to demands has
              earned us commendations and recommendations from our clients who
              are satisfied with our services, at all times and in all places.
            </p>
            <p className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold">
              We provide safe, efficient, reliable and timely services to suit
              the need and requirements of our clients. Established and managed
              by men with a wealth of experience in our chosen areas of service
              delivery, we are confident that our expertise is adequate to
              satisfy safe, efficient and cost-effective services when required.
            </p>
          </div>
        </div>
        <div
          className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
          data-aos="fade-up"
          id="clip-path-top-left"
        >
          <img
            src={Shiprepair}
            alt="construction-image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <section id="section">
        <div className="overflow-x-hidden">
          <div className="grid w-full grid-cols-12 h-full overflow-x-hidden ">
            <div className="col-span-12 w-full h-96 " id="image-set">
              <h1
                className="flex text-white font-monserrat md:text-5xl text-2xl uppercase font-semibold md:items-center items-center justify-center md:justify-center md:mt-0 h-full w-full text-center flex-col"
                data-aos="slide-in"
              >
                <span className="md:text-5xl">Our Activities{""}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div id="wms" className="col-span-12 md:w-[80%] mx-auto bg-white">
        <div className="grid grid-cols-12 font-monserrat items-center  w-full">
          <div className="md:col-span-6 col-span-12 md:p-20 p-6">
            <h1 className="md:text-4xl text-2xl py-5 font-bold uppercase text-blue-600">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "rgb(34, 34, 233)",
                  fontWeight: 700,
                  display: "block",
                }}
                startDelay={2000}
                cursorColor="rgb(34, 34, 233)"
                multiText={["Waste Management Services"]}
                multiTextDelay={2000}
                typeSpeed={60}
              />
            </h1>
            <div className="md:flex flex-col gap-4">
              <p className="text-lg" data-aos="fade-in">
                Removal of hydrocarbon residue and other toxic waste for the
                purpose of achieving clean ballast or a gas-free tank for
                inspection or repair works; Western Pacific Solutions have a
                team of cleaners who understands the global tank cleaning
                practice. We have in time past helped our clients improve
                safety, reduce the risk of contamination and minimize downtime.
              </p>
              <p>
                <ul className="text-lg md:text-xl">
                  <li className="border-b py-2" data-aos="flip-left">
                    {" "}
                    Storage Tanks and Vessel cleaning
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Waste Management services of all sorts with a specific
                    interest in Marine Wastes
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    {" "}
                    Waste Management (Hazardous and Non Hazardous)
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Oil spill Response and Remedation
                  </li>
                  <li className="border-b py-2">
                    Pollution Control/Sewage Management
                  </li>
                  <li className="border-b py-2" data-aos="flip-left">
                    Advisory services on Waste Management
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div
            className="md:col-span-6 col-span-12 p-6 hidden md:flex"
            data-aos="slide-left"
          >
            <img src={Dirt} alt="construction image" />
          </div>
        </div>
      </div>

      <div>
        <div
          id="mss"
          className="grid grid-cols-12 font-monserrat items-center  w-full h-auto overflow-x-hidden"
        >
          <div className="md:col-span-6 col-span-12  md:w-full bg-[#FD8C09] md:h-full">
            <div className="main h-full">
              <video src={videoBg} autoPlay loop muted className="h-full" />
            </div>
          </div>
          <div className="md:col-span-6 bg-gray-800 col-span-12">
            <div className="flex flex-col md:gap-4 text-white overflow-x-hidden">
              <div className="md:p-20 p-6">
                <h1
                  className="text-6xl py-5 font-bold uppercase text-blue-600"
                  data-aos="zoom-in"
                >
                  <span className="font-light text-warning">
                    Marine Support{" "}
                  </span>
                  Services
                </h1>
                <div className="md:w-full overflow-hidden md:text-xl">
                  With the growing need for certified personnel with the
                  required experience to carry out various marine activities,
                  Western Pacific Solutions provides labour supply from its pool
                  of well trained and motivated labour force. Also, with our
                  dedicated procurement officers who understand the requirements
                  of clients in relation to time, cost and quality service
                  delivery, we are well equipped with logistics to provide door
                  to door and offshore delivery of equipment, materials and
                  consumables for repairs and maintenance of your vessels and
                  rigs. Our marine support services include:
                </div>
                <div className="md:w-full overflow-hidden md:text-xl my-5">
                  <ul>
                    <li
                      className="border-b py-2 flex items-center gap-3"
                      data-aos="flip-left"
                    >
                      {" "}
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>
                        {" "}
                        Supply of certified labor (Welders, Blasters, Painters,
                        Scaffolders, Marine Engineers/Mechanics).
                      </span>
                    </li>
                    <li
                      className="border-b py-2  flex items-center gap-3"
                      data-aos="flip-left"
                    >
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>
                        {" "}
                        Supply of spares for marine vessels (Zinc Anodes,
                        Cutlass Bearings, Anchor Chains, Fenders, Shackles,
                        Safety gadgets).
                      </span>
                    </li>
                    <li
                      className="border-b py-2 flex items-center gap-3"
                      data-aos="flip-left"
                    >
                      {" "}
                      <span className="text-3xl ">
                        <BsCheck2Circle />
                      </span>
                      <span> Supply of AGO.</span>
                    </li>
                    <li
                      className="border-b py-2 flex items-center gap-3"
                      data-aos="flip-left"
                    >
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>
                        {" "}
                        Sourcing for Tug Boats, Vessels and Rigs for agents and
                        end Users
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="engr" className="overflow-hidden">
        <div className="lg:grid lg:grid-cols-12 md:h-[90vh] flex flex-col-reverse">
          <div
            className="lg:col-span-6 col-span-12 green-bg flex flex-col items-left justify-center pl-9 pr-16 py-14 w-full h-full "
            data-aos="fade-left"
          >
            <h1 className="text-gray-500 uppercase text-[2.3rem] md:text-[2.5rem] text-muted py-1 md:mr-0 mr-2 text-center md:text-left">
              <span className="text-blue-700 font-bold uppercase">
                Engineering design
              </span>{" "}
              services.
            </h1>
            <p>
              <ul className="text-lg md:text-xl">
                <li
                  className="border-b py-2 flex items-center gap-3"
                  data-aos="flip-left"
                >
                  {" "}
                  <span className="text-3xl">
                    <BsCheck2Circle />
                  </span>
                  <span>
                    {" "}
                    Engineering Drawings for various structures - pressure
                    vessels, oil platforms, Barges, Vessels, Slipways
                  </span>
                </li>
                <li
                  className="border-b py-2  flex items-center gap-3"
                  data-aos="flip-left"
                >
                  <span className="text-3xl">
                    <BsCheck2Circle />
                  </span>
                  <span> Building Design and Construction Services</span>
                </li>
                <li
                  className="border-b py-2 flex items-center gap-3"
                  data-aos="flip-left"
                >
                  {" "}
                  <span className="text-3xl ">
                    <BsCheck2Circle />
                  </span>
                  <span>
                    {" "}
                    3D Designs and Modelling of Structures Engineering
                    Consultancy Services
                  </span>
                </li>
              </ul>
            </p>
          </div>
          <div
            className="lg:col-span-6 col-span-12 flex items-center justify-center h-[300px] lg:h-full mt-2"
            data-aos="fade-up"
          >
            <img
              src={Design}
              alt="construction-image"
              className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover  "
              id="circle"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12">
          <div
            id="ds"
            className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px] flex items-center md:justify-center"
          >
            <img
              src={Dredging}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="lg:col-span-6 col-span-12 flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full text-muted h-full md:h-[80vh] md:text-left"
            data-aos="fade-up"
          >
            <h1 className="text-blue-700 uppercase text-[2.5rem] py-1">
              <span className="text-muted font-bold">dredging </span>
              services
            </h1>
            <p className="md:text-xl">
              Western Pacific Solutions has a highly equipped dredging
              subsidiary department which provides dredging services,
              canalization, flood and erosion control, land reclamation and land
              refill. Staffed with motivated individuals who are certified
              internationally in the field of marine and offshore dredging, our
              expertise and strict adherence to global practice have
              distinguished us among contemporaries.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div id="mas" className="w-full">
          <div className="grid grid-cols-12 md:h-[100vh] w-full overflow-hidden">
            <div className="col-span-12 md:flex  flex-col hidden md:col-span-6 px-10 bg-white justify-center text-xl overflow-y-hidden ">
              <h1 className="uppercase text-4xl my-4 font-bold text-orange-600">
                Marine Advisory Services
              </h1>
              <p className="">
                With years of experience in ensuring safe, timely and cost
                effective services for all marine and offshore operations,
                Western Pacific Solutions is well equipped to advise and handle
                the following:
                <ul className="ml-5 py-3">
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>Rig move.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>General Marine Consultancy.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>Vessel Assurance and Marine Surveys.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>
                      Audits and Inspection for Vessels, Rigs and Barges.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>Fleets Management.</span>
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 h-auto bg-orange-600 flex md:flex-row flex-col items-center justify-center w-full">
              <div className="md:-ml-[]" data-aos="">
                <img src={Man} alt="human-being" className="md:mx-10" />
              </div>

              <p className="text-white px-10 py-5 md:hidden overflow-hidden block h-full ">
                <h1 className="uppercase font-semibold">
                  Marine Advisory Services
                </h1>
                With years of experience in ensuring safe, timely and cost
                effective services for all marine and offshore operations,
                Western Pacific Solutions is well equipped to advise and handle
                the following:
                <ul className="ml-5 py-3">
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>Rig move.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>General Marine Consultancy.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>Vessel Assurance and Marine Surveys.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>
                      Audits and Inspection for Vessels, Rigs and Barges.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">
                      <BsCheck2Circle />
                    </span>
                    <span>Fleets Management.</span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="rvm" className="overflow-hidden">
        <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse">
          <div
            className="lg:col-span-6 col-span-12 green-bg flex flex-col items-left pl-9 pr-16 py-14 w-full h-full"
            data-aos="fade-left"
          >
            <h1 className="text-gray-500 uppercase text-xl md:text-[2.5rem] flex flex-col gap-3 my-5 text-muted py-1 md:mr-0 mr-2  md:text-left">
              <span className="text-blue-700 font-bold uppercase">
                Rig and vessel
              </span>{" "}
              <span>Maintenance</span>
            </h1>
            <p className="md:text-xl text-md">
              Having a pool of dedicated men with years of experience in Marine
              industry, we are capable of rendering the best of afloat
              maintenance works Our afloat works includes:
            </p>
            <p className="md:text-xl text-md ml-5">
              <ul className="list-disc py-3">
                <li>UT measurement of hull, deck and tanks.</li>
                <li>Transportation infrastructure</li>
                <li>
                  {" "}
                  Fabrication, installation and reinforcement of handrail,
                  staircase, monkey island etc.
                </li>
                <li> Cropping and plating of worn out plates.</li>
                <li>
                  {" "}
                  Blasting and painting of above water, deck and superstructure.
                </li>
                <li> Overhaul and servicing of engines and generator.</li>
                <li> Servicing and calibration of anchor chain.</li>
              </ul>
            </p>
          </div>
          <div
            className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
            data-aos="fade-up"
          >
            <img
              src={RigandVessel}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-screen">
          {/* Left column for text */}
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
            <div className="max-w-lg p-4">
              <h1 className="text-4xl font-bold mb-4 uppercase">
                Construction and Remodelling Services.
              </h1>
              <p className="text-lg mb-4">
                Our company provides high-quality construction and remodelling
                services for commercial and residential properties. Our
                experienced professionals work closely with clients to
                incorporate their unique ideas and deliver exceptional results.
                We specialize in new construction projects, renovations,
                additions, and remodelling of existing structures using only the
                best materials and equipment. Our goal is to create functional,
                beautiful spaces within budget and on time. Contact us today for
                exceptional customer service and to discuss your project needs.
              </p>
            </div>
          </div>

          {/* Right column for image */}
          <div
            className="md:w-1/2 h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${imageURL})` }}
          ></div>
        </div>

        <div className="lg:grid lg:grid-cols-12 md:h-[100vh]">
          <div
            className="lg:col-span-6 col-span-12 flex items-center justify-center h-[300px] lg:h-full"
            id="escape"
          >
            <img
              src={Diving}
              alt="construction-image"
              className=" w-[200px] h-[200px] md:h-[400px] md:w-[400px] object-cover"
              id="circle"
            />
          </div>
          <div
            id="dss"
            className="lg:col-span-6 col-span-12 flex flex-col items-left md:pl-9 px-10 md:pr-16 md:py-14 justify-center w-full text-muted h-full md:text-left"
            data-aos="fade-up"
          >
            <h1 className="text-blue-700 uppercase my-5 text-center md:text-left text-xl md:text-[2.5rem] py-1 flex gap-2 md:justify-start justify-center ">
              <span className="text-muted font-bold">Diving</span>
              <span>
                {" "}
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "rgb(34, 34, 233)",
                    fontWeight: 400,
                    display: "block",
                  }}
                  startDelay={2000}
                  cursorColor="rgb(34, 34, 233)"
                  multiText={["services"]}
                  multiTextDelay={2000}
                  typeSpeed={60}
                />{" "}
              </span>
            </h1>
            <p className="md:text-xl text-md text-center md:text-left">
              Western Pacific Solutions is staffed with certified divers with
              the latest diving kits and a real time video footage equipment to
              satisfy your underwater needs.
            </p>
            <ul>
              <li
                className="border-b py-2 flex items-center gap-3"
                data-aos="flip-left"
              >
                {" "}
                <span className="text-3xl">
                  <BsCheck2Circle />
                </span>
                <span>Rudder, shaft and propeller inspection.</span>
              </li>
              <li
                className="border-b py-2  flex items-center gap-3"
                data-aos="flip-left"
              >
                <span className="text-3xl">
                  <BsCheck2Circle />
                </span>
                <span>Installation of zinc anode.</span>
              </li>
              <li
                className="border-b py-2 flex items-center gap-3"
                data-aos="flip-left"
              >
                {" "}
                <span className="text-3xl ">
                  <BsCheck2Circle />
                </span>
                <span> Hull inspection.</span>
              </li>
              <li
                className="border-b py-2 flex items-center gap-3"
                data-aos="flip-left"
              >
                <span className="text-3xl">
                  <BsCheck2Circle />
                </span>
                <span>Barnacle scraping.</span>
              </li>
              <li
                className="border-b py-2 flex items-center gap-3"
                data-aos="flip-left"
              >
                <span className="text-3xl">
                  <BsCheck2Circle />
                </span>
                <span>Echo sounder inspection.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero