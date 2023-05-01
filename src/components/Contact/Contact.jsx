import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 }, []);
  });

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
    setFullname("");
    setEmail("");
    setPhone("");
    setMessage("");

    const formData = {
      fullname,
      email,
      phone,
      message,
    };

    fetch("https://luckylumac.com:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="overflow-hidden" id="nocorners">
      <div className="w-full h-52 md:h-96 overflow-x-hidden bg-gray-900">
        <h1
          className="flex font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col overflow-hidden"
          data-aos="fade-up"
        >
          <span className="text-3xl text-[#FE8D09]">reach{""}</span>
          <span className="text-white">out to us</span>
        </h1>
      </div>
      <div className="grid grid-cols-12 font-monserrat">
        <div
          className="col-span-12 md:col-span-6 flex flex-col gap-3 md:gap-4 bg-[#FE8D09] text-white"
          id="image-set2"
        >
          <div className="flex flex-col w-full items-left px-0 py-7 md:px-40 md:pt-40 md:py-0 justify-center">
            <h1
              className="md:py-4 md:px-0 px-10 text-3xl font-semibold py-5"
              data-aos="fade-left"
            >
              Get in touch
            </h1>
            <p className="md:text-lg md:px-0 px-10" data-aos="fade-left">
              We welcome the opportunity to connect with you. Whether you have a
              question, a project in mind, or just want to learn more about our
              services, we encourage you to get in touch. Our team of experts is
              always available to provide you with the information and guidance
              you need to make informed decisions about your Marine sevices. Contact us today to get
              started.
            </p>
          </div>

          <div
            className="flex  items-center text-left gap-3 md:gap-4 md:pl-40 md:pr-60 md:py-5 px-10"
            data-aos="fade-right"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
            </span>
            <p className="md:pr-0">
              <span>
                <h1 className="uppercase">Port harcourt office</h1> 14, Orogbum
                Cresent old GRA, Port Harcourt.
              </span>
            </p>
          </div>
          <div
            className="flex  items-center text-left gap-3 md:gap-4 md:pl-40 md:pr-60 px-10"
            data-aos="fade-right"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
            </span>
            <p className="md:pr-0">
              <span>
                <h1 className="uppercase">Lagos office</h1> 13, olalade kazeem
                Gernade Estate, Idimu, Lagos.
              </span>
            </p>
          </div>
          <div
            className="flex items center text-left gap-3 md:gap-4 md:pl-40 md:pr-60 md:py-5 px-10"
            data-aos="fade-right"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                />
              </svg>
            </span>
            <p>
              +234-815-236-3717 <br /> +234-8086-688-557
            </p>
          </div>
          <div
            className="flex items center text-left gap-3 md:gap-4 md:pl-40 md:pr-60 md:py-5 md:mb-5 mb-5 px-10"
            data-aos="fade-right"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <a href="mailto:info@luckylumac.com" className="link">
              info@pacificsolutions.com
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col items-left justify-center md:pr-60 md:pt-40 md:pl-10 md:pb-20">
            <h1
              className="py-6 px-11 md:px-0 text-xl md:text-3xl font-semibold"
              data-aos="fade-up"
            >
              ENTER YOUR INFORMATION IN THE FORM BELOW AND SOMEONE FROM WESTERN
              PACIFIC SOLUTIONS WILL CONTACT YOU.
            </h1>

            <form onSubmit={handleSubmit}>
              <div>
                <div className="card-body md:px-0 px-10 py-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Fullname</span>
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="full name"
                      className="input input-bordered"
                      value={fullname}
                      onChange={(event) => setFullname(event.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone number</span>
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="phone number"
                      className="input input-bordered"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Questions & Comments</span>
                    </label>
                    <textarea
                      placeholder="Type Here..."
                      className="textarea textarea-bordered textarea-lg w-full"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button
                      value="Send"
                      className="btn bg-[#FE8D09] border-none"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
