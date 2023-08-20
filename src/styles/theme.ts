const PALETTE = {
  primary: {
    100: "#B041FF",
    200: "#A23BEC",
    300: "#893BFF",
  },
  hover: "#7F38EC",
  fontColor: {
    100: "#FFFFFF",
    200: "#646F7C",
    300: "#181D1F",
  },
  gray: {
    100: "#E9E9E9",
    200: "#D9D9D9",
    300: "#656565",
    400: "#333",
  },
};

const FONT_SIZE = {
  xxs: "1.0rem",
  xs: "1.4rem",
  small: "1.6rem",
  sm: "1.8rem",
  medium: "2.0rem",
  ml: "2.1rem",
  large: "2.6rem",
  big: "3.6rem",
  huge: "4.8rem",
};

const FONT_WEIGHT = {
  light: "Suite_light",
  regular: "Suite_regular",
  bold: "Suite_bold",
  extraBold: "Suite_extraBold",
  heavy: "Suite_heavy",
};

const LOGO_FONT = {
  logo: "PartialSans_regular",
};

const DEVICE_WIDTH = {
  mobile: 414,
  tablet: 768,
  pc: 1440,
};

const DEVICE = {
  mobile: `screen and (max-width: ${DEVICE_WIDTH.mobile}px)`,
  tablet: `screen and (max-width: ${DEVICE_WIDTH.tablet}px)`,
  pc: `screen and (max-width: ${DEVICE_WIDTH.pc}px)`,
};

export const theme = {
  PALETTE,
  FONT_SIZE,
  FONT_WEIGHT,
  LOGO_FONT,
  DEVICE,
};
