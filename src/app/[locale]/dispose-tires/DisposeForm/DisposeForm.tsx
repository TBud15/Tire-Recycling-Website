"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

const DisposeForm: React.FC = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const t = useTranslations("DisposeTiresPage");

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateIdDispose = process.env
    .NEXT_PUBLIC_TEMPLATE_ID_DISPOSE as string;
  const publicKEY = process.env.NEXT_PUBLIC_KEY_EMAILJS as string;

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //ensure form.currect is not null
    if (form.current !== null) {
      emailjs
        .sendForm(serviceID, templateIdDispose, form.current, publicKEY)
        .then(
          (result) => {
            setMessageSent(true);
            setIsDisabled(true);
            console.log(`${result.text}, message sent. Thank you.`);
          },
          (error) => {
            setErrorMessage(true);
            setIsDisabled(true);
            console.log(`${error.text}, error occurred.`);
          }
        );
    } else {
      //Handle the case where form.current is null
      console.log("The form is not available.");
      setErrorMessage(true);
    }
  };

  return (
    <div className=" bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          {t("dispose-tires-title")}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center  text-gray-400 sm:text-xl">
          {t("dispose-tires-description")}
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              {t("form.name-up")}
            </label>
            <input
              type="text"
              id="fname"
              className="shadow-sm border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder={t("form.name-inside")}
              required
              name="fname"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.email-up")}
            </label>
            <input
              type="email"
              id="email"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder={t("form.email-inside")}
              required
              name="email"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.phone-up")}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder=""
              name="phone"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.company-up")}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder=""
              name="company"
            />
          </div>

          {/* Tire Type */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.tire-type-up")}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder={t("form.tire-type-inside")}
              name="tiretype"
            />
          </div>

          {/* How many tires do you have */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.tire-quantity-up")}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder=""
              name="howmanytires"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.location-up")}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder={t("form.location-inside")}
              name="location"
            />
          </div>

          {/* Delivery */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.delivery-up")}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder=""
              name="delivery"
            />
          </div>

          {/* Additional comments: */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              {t("form.additional-comments-up")}
            </label>
            <textarea
              id="message"
              // rows="6" commented out, gives error on vercel deployment.
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder={t("form.additional-comments-inside")}
              name="addcomments"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            disabled={isDisabled}
          >
            {t("form.send-message")}
          </button>
          {messageSent ? (
            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-white border border-blue-500 p-5 bg-blue-500 rounded">
              {t("form.message-success")}
            </h2>
          ) : (
            ""
          )}

          {errorMessage ? (
            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-white border border-red-500 p-5 bg-red-500 rounded">
              {t("form.message-error")}
            </h2>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default DisposeForm;
