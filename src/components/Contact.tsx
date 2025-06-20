import { FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useTranslation("global");

  const formContact = useRef<HTMLFormElement>(null);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        formContact.current!,
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success(`${t("contact.success")}`);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(`${t("contact.error")}`);
        },
      );
  };

  return (
    <>
      <section className="mx-auto w-full place-content-center dark:bg-black-500 dark:text-light lg:grid">
        <form
          ref={formContact}
          onSubmit={submitForm}
          className="grid w-full animate-fadeIn gap-5 px-4 lg:w-[500px]"
        >
          <div className="grid gap-1">
            <label className="text-sm font-medium" htmlFor="username">
              {t("contact.username")}:
            </label>
            <input
              className="rounded-sm border border-solid border-black-500 bg-light px-2 py-[2px] text-sm font-medium text-black-500 focus:outline-none dark:border-light dark:bg-black-100 dark:text-light"
              type="text"
              name="username"
              id="username"
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm font-medium" htmlFor="country">
              {t("contact.country")}:
            </label>
            <input
              className="rounded-sm border border-solid border-black-500 bg-light px-2 py-[2px] text-sm font-medium text-black-500 focus:outline-none dark:border-light dark:bg-black-100 dark:text-light"
              type="text"
              name="country"
              id="country"
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="email">
              {t("contact.email")}:
            </label>
            <input
              className="rounded-sm border border-solid border-black-500 bg-light px-2 py-[2px] text-sm font-medium text-black-500 focus:outline-none dark:border-light dark:bg-black-100 dark:text-light"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="message">
              {t("contact.msg")}:
            </label>
            <textarea
              className="rounded-sm border border-solid border-black-500 bg-light px-2 py-[2px] text-sm font-medium text-black-500 focus:outline-none dark:border-light dark:bg-black-100 dark:text-light"
              name="message"
              id="message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded bg-sky-800 px-6 py-1 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-sky-600 lg:mx-auto"
          >
            {t("contact.send")}
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
