import React from "react";

const Whatsapp = () => {
  const phoneNumber = "9312023087"; // Replace with your phone number (in international format)
  const message = "Hello , I want to book an appointment!"; // Customize your message

  const email = "drishtieyeandentcare@gmail.com"; // Replace with your email address
  const subject = "Inquiry from the Website"; // Customize your subject
  const body = "Hello , I want to book an appointment..."; // Customize your email body

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;



  return (
    <div className="">
      <div className="">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 lg:mx-2 flex items-center justify-center bg-green-500 text-white w-12 h-12 lg:w-16 lg:h-16 rounded-2xl shadow-lg hover:bg-green-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className=" w-8 h-8"
          >
            <path d="M12 0a12 12 0 00-10 18l-2 6 6-2A12 12 0 1012 0zm0 22a9.94 9.94 0 01-5-1.34l-.37-.22-3.58 1.18 1.18-3.58-.22-.37A9.94 9.94 0 1112 22zm4.38-7.47l-1.23-.36a.82.82 0 00-.81.21l-.89.9a7.31 7.31 0 01-3.23-3.23l.9-.9a.82.82 0 00.21-.81l-.36-1.23a.82.82 0 00-.78-.58h-1.2a.82.82 0 00-.82.82 9.72 9.72 0 007.6 7.6.82.82 0 00.82-.82v-1.2a.82.82 0 00-.58-.78z" />
          </svg>
        </a>
      </div>

      <div className="">
        <a
          href={mailtoLink}
          className="fixed bottom-4 lg:mx-4 right-20 flex items-center justify-center bg-blue-500 text-white   w-12 h-12 lg:w-16 lg:h-16 rounded-2xl shadow-lg hover:bg-blue-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 2L12 10.6 5.4 6h13.2zM4 18V8l8 5 8-5v10H4z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
