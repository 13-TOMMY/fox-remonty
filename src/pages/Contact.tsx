import React, { FormEvent, useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import Language from "../components/parts/Language";

const Contact: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("Invalid phone number.");
      return;
    }
    if (form.current) {
      emailjs
        .sendForm(
          "service_fp92ful",
          "template_sjly8ci",
          form.current,
          "1smwd0MLjhRjKZwYA"
        )
        .then((result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
          clearForm();
        })
        .catch((error) => {
          console.log(error.text);
          toast.error("error sending email.");
        });
    }
  };

  const validatePhoneNumber = (inputPhoneNumber: string): boolean => {
    if (!inputPhoneNumber) {
      return true;
    }
    const phoneRegex = /\+?[0-9\s-()]{6,20}/;
    return phoneRegex.test(inputPhoneNumber);
  };

  return (
    <div className="contact-container">
      <div
        className={
          darkMode
            ? "dark-container  contact-form"
            : "light-container  contact-form"
        }
      >
        <ToastContainer />
        <div className="form-title">
          <h2 className={darkMode ? "dark-text l-font" : "light-text l-font"}>
            <Language
              englishText={"Contact Me!"}
              polishText={"Skontaktuj się ze mną!"}
            />
          </h2>
          <p className={darkMode ? "dark-text m-font" : "light-text m-font"}>
            <Language
              englishText={
                "Please fill out the form below to get in touch with me."
              }
              polishText={
                "Proszę wypełnić poniższy formularz, aby się ze mną skontaktować."
              }
            />
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form-fields">
          <div className="form-name">
            <label
              htmlFor="text"
              className={
                darkMode
                  ? "dark-text cf-label s-font"
                  : "light-text cf-label s-font"
              }
            >
              <Language englishText={"Name:"} polishText={"Imię"} />
            </label>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-email">
            <label
              htmlFor="email"
              className={
                darkMode
                  ? "dark-text cf-label s-font"
                  : "light-text cf-label s-font"
              }
            >
              Email:
            </label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-phone">
            <label
              htmlFor="number"
              className={
                darkMode
                  ? "dark-text cf-label s-font"
                  : "light-text cf-label s-font"
              }
            >
              <Language
                englishText={"Phone Number (Optional):"}
                polishText={"Numer telefonu (opcjonalnie)"}
              />
            </label>
            <input
              type="text"
              name="user_phone_number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-message">
            <label
              htmlFor="message"
              className={
                darkMode
                  ? "dark-text cf-label s-font"
                  : "light-text cf-label s-font"
              }
            >
              <Language englishText={"Message:"} polishText={"Wiadomość:"} />
            </label>
            <textarea
              name="message"
              cols={30}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="text-field"
            />
          </div>
          <div className="form-btns">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={
                darkMode
                  ? "dark-text dark-btn-form cf-btn m-font"
                  : "light-text  light-btn-form cf-btn m-font"
              }
            >
              <Language englishText={"Send"} polishText={"Wyślij"} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={clearForm}
              type="button"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={
                darkMode
                  ? "dark-text dark-btn-two-form cf-btn m-font"
                  : "light-text light-btn-two-form cf-btn m-font"
              }
            >
              <Language englishText={"Clear"} polishText={"Wyczyść"} />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
