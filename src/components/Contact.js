import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen m-auto flex flex-col justify-center  p-4">
      <div>
        <h1 className="text-3xl font-bold">Contact Form</h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col space-y-3"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-b-4 rounded-md p-1"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Provide your Email Address"
            className=""
          />
          <input
            type="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please type your message here..."
            className=""
          />
          <button
            type="submit"
            className="btn bg-pink-300 p-2 w-[100px] text-white hover:bg-pink-500 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
