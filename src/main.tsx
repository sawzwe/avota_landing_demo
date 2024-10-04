import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { languages } from "./config/languages/languages";

interface TranslationResource {
  [key: string]: string | TranslationResource;
}
const loadResources = async (): Promise<
  Record<string, TranslationResource>
> => {
  const resources: Record<string, TranslationResource> = {};
  for (const { code, path } of Object.values(languages)) {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
      }
      const translation = await response.json();
      resources[code] = { global: translation };
    } catch (error) {
      console.error(`Error loading translation for ${code}:`, error);
    }
  }
  return resources;
};

loadResources().then((resources) => {
  const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

  i18next.init({
    interpolation: { escapeValue: false },
    lng: savedLanguage,
    resources,
  });

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </StrictMode>,
  );
});
