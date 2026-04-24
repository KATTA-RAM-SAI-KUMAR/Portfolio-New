import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Contact() {
  const { theme, mode } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // simulate submit
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-6 min-h-[80vh]">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.text }}
          >
            Let's build something together
          </h2>

          <p
            className="mb-6 max-w-xl"
            style={{ color: theme.subtext }}
          >
            Have a project idea or want to work together? Send a message and I
            will get back to you soon.
          </p>

          <div
            className="space-y-4 text-sm"
            style={{ color: theme.subtext }}
          >
            <p>✉️ Email: hello@aadi.is-a.dev</p>
            <p>📍 Location: Remote / India</p>
            <p>🔗 Resume available on request</p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border p-8 backdrop-blur-lg"
          style={{
            background:
              mode === "dark"
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.03)",
            borderColor: theme.border,
          }}
        >
          <div className="space-y-4">

            {/* NAME */}
            <label className="block">
              <span
                className="text-sm font-medium"
                style={{ color: theme.text }}
              >
                Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none"
                style={{
                  background: theme.bg,
                  borderColor: theme.border,
                  color: theme.text,
                }}
              />
            </label>

            {/* EMAIL */}
            <label className="block">
              <span
                className="text-sm font-medium"
                style={{ color: theme.text }}
              >
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none"
                style={{
                  background: theme.bg,
                  borderColor: theme.border,
                  color: theme.text,
                }}
              />
            </label>

            {/* MESSAGE */}
            <label className="block">
              <span
                className="text-sm font-medium"
                style={{ color: theme.text }}
              >
                Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none resize-none"
                style={{
                  background: theme.bg,
                  borderColor: theme.border,
                  color: theme.text,
                }}
              />
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3 text-white font-semibold"
            >
              Send Message
            </button>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <p className="text-green-500 text-sm text-center mt-2">
                Message sent successfully!
              </p>
            )}

          </div>
        </motion.form>
      </div>
    </section>
  );
}