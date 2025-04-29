import { otherPresets } from "./presets";

const transformThemeResets = (themeResets) => {
  return Object.entries(themeResets).map(([key, value]) => ({
    name: key,
    label: value.label || key.charAt(0).toUpperCase() + key.slice(1),
    radius: value.radius || "0.5rem",
    fonts: {
      sans: value.fonts?.sans || "default-sans-font",
      serif: value.fonts?.serif || "default-serif-font",
      mono: value.fonts?.mono || "default-mono-font",
    },
    light: value.light,
    dark: value.dark,
  }));
};

// Example theme resets to transform
const themeResets = {
  claude: {
    label: "Claude",
    radius: "0.5rem",
    fonts: {
      sans: "Adamina",
      serif: "Adamina",
      mono: "Fira Code",
    },
    light: {
      background: "#faf9f5",
      foreground: "#3d3929",
      // other light theme properties...
    },
    dark: {
      background: "#262624",
      foreground: "#c3c0b6",
      // other dark theme properties...
    },
  },
  // Add more theme resets as needed...
};

export const transformedThemes = transformThemeResets(themeResets);