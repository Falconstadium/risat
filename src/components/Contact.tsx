import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formContact = useRef<any>();

  const submitForm = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        formContact.current,
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error: any) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <>
      <section className="place-content-center dark:bg-black-500 dark:text-light lg:grid">
        <form
          ref={formContact}
          onSubmit={submitForm}
          className="grid w-full gap-3 px-4 lg:w-[500px]"
        >
          <div className="grid gap-1">
            <label className="text-sm font-medium" htmlFor="username">
              Full Name:
            </label>
            <input
              className="rounded-sm border border-solid border-black px-2 py-[2px] text-sm font-medium text-black focus:outline-none"
              type="text"
              name="username"
              id="username"
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm font-medium" htmlFor="country">
              Country:
            </label>
            <input
              className="rounded-sm border border-solid border-black px-2 py-[2px] text-sm font-medium text-black focus:outline-none"
              type="text"
              name="country"
              id="country"
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="email">
              Email:
            </label>
            <input
              className="rounded-sm border border-solid border-black px-2 py-[2px] text-sm font-medium text-black focus:outline-none"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="message">
              Message:
            </label>
            <textarea
              className="rounded-sm border border-solid border-black px-2 py-[2px] text-sm font-medium text-black focus:outline-none"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded bg-sky-800 px-6 py-1 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-sky-600 lg:mx-auto"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
