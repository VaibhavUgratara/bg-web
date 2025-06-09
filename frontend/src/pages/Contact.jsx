import { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [name]: value,
      };
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Thank you! We'll get back to you soon.");
        console.log("Form submitted:", result);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to submit. Try again later.");
        console.error("Error:", result.error);
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 py-16 my-10">
      <Nav />
      <h1 className="text-center text-2xl cursor-pointer py-3 font-mono font-bold">
        <span className="text-white bg-red-500 rounded-lg">Contact</span> Us
      </h1>

      <div className="flex text-center items-center justify-evenly gap-5 h-[500px] min-h-screen">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-7">
            <div className="flex justify-around gap-5 sticky">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                className="text-lg border-red-400 rounded-lg p-2 bg-slate-100 outline-none"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="text-lg border-red-400 rounded-lg p-2 bg-slate-100 outline-none"
              />
            </div>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className="text-lg border-red-400 rounded-lg p-2 bg-slate-100 outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type Your Message"
              className="text-md h-full border-red-400 rounded-lg p-2 bg-slate-100 outline-none"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="text-white bg-red-500 w-[280px] rounded-lg text-lg font-mono hover:bg-red-700"
          >
            Submit
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[20px] font-serif py-8 text-left">
            Dynamically underwhelm intergred outsourcing <br />
            via timely models. Rapidiously reconceptualize visionary <br />
            imperatives without
          </p>
          <h3 className="text-left text-xl font-sans">dailyBlog@gmail.com</h3>
          <p className="text-left text-xl font-sans">+6783674854</p>
          <h3 className="text-left text-xl font-sans">
            695 Tuener Trace Apt.BCC3G8A4
          </h3>
          <h2 className="text-left text-xl font-sans">Follow on</h2>
          <div className="flex gap-4 text-2xl px-4">
            <FaFacebookSquare className="hover:text-blue-700 text-blue-300" />
            <FaYoutube className="hover:text-red-700 text-red-300" />
            <FaWhatsapp className="hover:text-green-700 text-green-300" />
            <FaInstagram className="hover:text-red-700 text-red-300" />
            <FaLinkedin className="hover:text-blue-700 text-blue-300" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
