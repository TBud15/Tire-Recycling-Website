import { useTranslations } from "next-intl";

const Information: React.FC = () => {
  const t = useTranslations("ContactUsPage");

  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-6 lg:py-6">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t("contact-us-title")}
          </h2>
          <p className="mt-4 text-gray-300">{t("contact-us-description")}</p>
        </div>

        {/* Grid containing phone, email, and address information */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Phone */}
          <a href="tel:+380686868700">
            <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 h-48">
              <svg
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-10"
                stroke="#9a6dee"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19.0006 9.03002C19.0007 8.10058 18.8158 7.18037 18.4565 6.32317C18.0972 5.46598 17.5709 4.68895 16.9081 4.03734C16.2453 3.38574 15.4594 2.87265 14.5962 2.52801C13.7331 2.18336 12.8099 2.01409 11.8806 2.03002C10.0966 2.08307 8.39798 2.80604 7.12302 4.05504C5.84807 5.30405 5.0903 6.98746 5.00059 8.77001C4.95795 9.9595 5.21931 11.1402 5.75999 12.2006C6.30067 13.2609 7.10281 14.1659 8.09058 14.83C8.36897 15.011 8.59791 15.2584 8.75678 15.5499C8.91565 15.8415 8.99945 16.168 9.00059 16.5V18.03H15.0006V16.5C15.0006 16.1689 15.0829 15.843 15.24 15.5515C15.3971 15.26 15.6241 15.0121 15.9006 14.83C16.8528 14.1911 17.6336 13.328 18.1741 12.3167C18.7147 11.3054 18.9985 10.1767 19.0006 9.03002V9.03002Z"
                    stroke="#0f7ee6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15 21.04C14.1345 21.6891 13.0819 22.04 12 22.04C10.9181 22.04 9.86548 21.6891 9 21.04"
                    stroke="#0f7ee6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <h2 className="mt-4 text-xl font-bold text-white">
                {t("phone-title")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                <strong>+ 38 068 68 68 700</strong>
              </p>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:info@tirerecycling.com.ua">
            <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 h-48">
              <svg
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-10"
                stroke="#9a6dee"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19.0006 9.03002C19.0007 8.10058 18.8158 7.18037 18.4565 6.32317C18.0972 5.46598 17.5709 4.68895 16.9081 4.03734C16.2453 3.38574 15.4594 2.87265 14.5962 2.52801C13.7331 2.18336 12.8099 2.01409 11.8806 2.03002C10.0966 2.08307 8.39798 2.80604 7.12302 4.05504C5.84807 5.30405 5.0903 6.98746 5.00059 8.77001C4.95795 9.9595 5.21931 11.1402 5.75999 12.2006C6.30067 13.2609 7.10281 14.1659 8.09058 14.83C8.36897 15.011 8.59791 15.2584 8.75678 15.5499C8.91565 15.8415 8.99945 16.168 9.00059 16.5V18.03H15.0006V16.5C15.0006 16.1689 15.0829 15.843 15.24 15.5515C15.3971 15.26 15.6241 15.0121 15.9006 14.83C16.8528 14.1911 17.6336 13.328 18.1741 12.3167C18.7147 11.3054 18.9985 10.1767 19.0006 9.03002V9.03002Z"
                    stroke="#0f7ee6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <h2 className="mt-4 text-xl font-bold text-white">
                {t("email-title")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                <strong>info@tirerecycling.com.ua</strong>
              </p>
            </div>
          </a>

          {/* Address */}
          <a>
            <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 h-48">
              <svg
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-10"
                stroke="#9a6dee"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19.0006 9.03002C19.0007 8.10058 18.8158 7.18037 18.4565 6.32317C18.0972 5.46598 17.5709 4.68895 16.9081 4.03734C16.2453 3.38574 15.4594 2.87265 14.5962 2.52801C13.7331 2.18336 12.8099 2.01409 11.8806 2.03002C10.0966 2.08307 8.39798 2.80604 7.12302 4.05504C5.84807 5.30405 5.0903 6.98746 5.00059 8.77001C4.95795 9.9595 5.21931 11.1402 5.75999 12.2006C6.30067 13.2609 7.10281 14.1659 8.09058 14.83C8.36897 15.011 8.59791 15.2584 8.75678 15.5499C8.91565 15.8415 8.99945 16.168 9.00059 16.5V18.03H15.0006V16.5C15.0006 16.1689 15.0829 15.843 15.24 15.5515C15.3971 15.26 15.6241 15.0121 15.9006 14.83C16.8528 14.1911 17.6336 13.328 18.1741 12.3167C18.7147 11.3054 18.9985 10.1767 19.0006 9.03002V9.03002Z"
                    stroke="#0f7ee6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <h2 className="mt-4 text-xl font-bold text-white">
                {t("address-title")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">{t("address")}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
