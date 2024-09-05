import React from "react";
import { useTranslations } from "next-intl";
//Add what we do section here, using 5 iamges, files in public/whatWeDo folder.
//Photoshop default color: 297cd9

const SecondSectionAbout: React.FC = () => {
  const t = useTranslations("AboutUsPage");
  const tire = "/images/whatWeDo/tire-visu.webp"; //tire icon
  const arrow = "/images/whatWeDo/right-arrow2.webp"; //arrow icon
  const factory = "/images/whatWeDo/factory.webp"; //factory icon
  const crumRubber = "/images/whatWeDo/crumb-rubber5.webp"; //crumb-rubber icon
  const enlargement = "/images/whatWeDo/enlargement.webp"; //enlargement icon
  return (
    <section className=" bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">
            {t("what-we-do-title")}
          </h2>
          <p className="mb-6 font-light text-gray-400 md:text-lg">
            {t("what-we-do-description")}
          </p>
        </div>
        <div className="flex mt-20 justify-center flex-wrap">
          <img
            src={tire}
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
          />
          <img
            src={arrow}
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
          />
          <img
            src={factory}
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
          />
          <img
            src={arrow}
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
          />
          <img
            src={crumRubber}
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
          />
          <img
            src={arrow}
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
          />
          <img
            src={enlargement}
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSectionAbout;
