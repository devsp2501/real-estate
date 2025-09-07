import Title from "./Title";
import { useState } from "react";
import {motion} from 'framer-motion';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd709b03-7cdb-464f-955a-a293e65764dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
    initial={{opacity:0, x:-200}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1}}
    viewport={{once:true}}
      id="contact"
      className="mx-auto pt-1 md:px-20 px-6 lg:px-32 my-2 mb-20"
    >
      <Title
        title="Contact"
        titleSpan="With Us"
        desc="Ready to Make a Move? Let’s Build Your Future Together"
      />
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="flex gap-2 justify-center">
          <div className="w-full md:w-1/2">
            <label className="block" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              className="my-2 mb-4 p-2 text-gray-700 border border-gray-200 rounded w-full"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              className="my-2 mb-4 p-2 text-gray-700 border border-gray-200 rounded w-full"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <label className="block" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          className="my-2 mb-4 p-2 text-gray-700 border border-gray-200 rounded w-full h-40 text-left resize-none"
          placeholder="Your Message"
          required
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 py-2 px-12 rounded text-white cursor-pointer"
          >
            {result ? result : "Send Message"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default Contact;
