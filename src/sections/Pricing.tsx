import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const [onMonthly, setOnMonthly] = useState<boolean>(false);
  const { t } = useTranslation("global");
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              {t("pricing.flexible_pricing_for_teams")}
            </h3>
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px]">
              <button
                className={clsx("pricing-head_btn", onMonthly && "text-p4")}
                onClick={() => setOnMonthly(true)}
              >
                {t("pricing.monthly")}
              </button>
              <button
                className={clsx("pricing-head_btn", !onMonthly && "text-p4")}
                onClick={() => setOnMonthly(false)}
              >
                {t("pricing.annual")}
              </button>
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !onMonthly && "translate-x-full",
                )}
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
