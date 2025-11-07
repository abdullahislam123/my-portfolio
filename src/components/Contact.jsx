import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  // 👉 your Google Apps Script URL here:
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKtmnGOymdoLerUfhG3buszquRgBjttLmLDbBeRERz5mA0S2ytf1XkMQc_tOrBNIM/exec";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key].trim()) newErrors[key] = "This field is required";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (result.result === "success") {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      alert("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex flex-col space-y-4"
      >
        {/* Name Input */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={`p-3 rounded border ${
            errors.name
              ? "bg-red-100 border-red-500 text-red-700 placeholder-red-400"
              : "bg-gray-800 border-gray-700 text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={`p-3 rounded border ${
            errors.email
              ? "bg-red-100 border-red-500 text-red-700 placeholder-red-400"
              : "bg-gray-800 border-gray-700 text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />

        {/* Message Input */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className={`p-3 rounded border ${
            errors.message
              ? "bg-red-100 border-red-500 text-red-700 placeholder-red-400"
              : "bg-gray-800 border-gray-700 text-white"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
