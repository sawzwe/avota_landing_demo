export interface LanguageConfig {
  code: string;
  label: string;
  path: string;
}

export const languages: Record<string, LanguageConfig> = {
  US: { code: "en", label: "US", path: "/translations/en/global.json" },
  MM: { code: "mm", label: "MM", path: "/translations/mm/global.json" },
  // TH: { code: "th", label: "TH", path: "/translations/th/global.json" },
  // ES: { code: "es", label: "ES", path: "/translations/es/global.json" },
  CN: { code: "zh-CN", label: "CN", path: "/translations/zh-CN/global.json" },
};
