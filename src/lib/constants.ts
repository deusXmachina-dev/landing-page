// App URLs
export const APP_URL = "https://app.senseflow.io";
export const LOGIN_URL = `${APP_URL}/login`;
export const SIGNUP_URL = LOGIN_URL;
export const DOCS_URL = `${APP_URL}/api/docs`;

// Contact
export const CONTACT_EMAIL = "call-me-maybe@senseflow.io";

// Social Links
export const GITHUB_URL = "https://github.com/senseflow-io";

// Pricing
export const PRICE_PER_MINUTE = 0.25;
export const FREE_CREDITS_AMOUNT = 10;
export const FREE_CREDITS_MINUTES = Math.floor(FREE_CREDITS_AMOUNT / PRICE_PER_MINUTE); // 40 minutes

// Company
export const COMPANY_NAME = "SenseFlow";
export const CURRENT_YEAR = new Date().getFullYear();

// Package
export const NPM_PACKAGE_NAME = "@senseflow-io/n8n-nodes-senseflow";

// Energy Calculator Constants
// Power consumption per robot type (kW)
export const ROBOT_POWER_CONSUMPTION = {
  SMALL: 1.2,    // < 16 kg
  MEDIUM: 1.5,   // < 60 kg
  LARGE: 6,      // < 225 kg
  XLARGE: 10,    // > 225 kg
} as const;

// CO₂ emissions factor (tCO₂e/MWh)
export const CO2_EMISSIONS_FACTOR = 0.4;

// Energy savings improvement scenarios
export const ENERGY_SAVINGS_SCENARIOS = [15, 20, 25] as const;