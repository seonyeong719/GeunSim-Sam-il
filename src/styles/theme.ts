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

const FONT_WEIGHT = {
  light: "Suite_light",
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
  FONT_WEIGHT,
  DEVICE,
};
