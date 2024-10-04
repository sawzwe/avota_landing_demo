import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation("global");
  return (
    <section className="relative border-2 border-amber-400 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              {t("hero.caption")}
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              {t("hero.title")}
            </h1>
            <p>{t("hero.description")}</p>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
