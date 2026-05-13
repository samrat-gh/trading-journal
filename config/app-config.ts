import packageJson from "../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Nepse Audit",
  version: packageJson.version,
  copyright: `© ${currentYear}, Nepse Audit.`,
  meta: {
    title: "Nepse Audit - NEPSE Tracker Dashboard",
    description:
      "Nepse Audit is a NEPSE Tracker applcation that helps you track your stock market portfolio, analyze your trades, and make informed decisions.",
  },
};
