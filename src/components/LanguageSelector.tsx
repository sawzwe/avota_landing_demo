import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import { languages } from "../config/languages/languages";

interface LanguageSelectorProps {
  initialLanguage?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  initialLanguage = "US",
}) => {
  const { i18n } = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(initialLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      const countryCode = Object.keys(languages).find(
        (key) => languages[key].code === savedLanguage,
      );
      if (countryCode) {
        setSelectedLanguage(countryCode);
      }
    }
  }, []);

  const handleChangeLanguage = (countryCode: string) => {
    const language = languages[countryCode]?.code;
    if (language) {
      i18n.changeLanguage(language);
      localStorage.setItem("preferredLanguage", language);
    }
  };

  return (
    <ReactFlagsSelect
      selected={selectedLanguage}
      onSelect={(code) => {
        setSelectedLanguage(code);
        handleChangeLanguage(code);
      }}
      countries={Object.keys(languages)}
      customLabels={Object.fromEntries(
        Object.entries(languages).map(([key, { label }]) => [key, label]),
      )}
    />
  );
};

export default LanguageSelector;
