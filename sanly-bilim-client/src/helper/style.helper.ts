import { grey } from "@mui/material/colors";

export const fonts = {
  Bold: "Manrope-Bold",
  ExtraBold: "Manrope-ExtraBold",
  ExtraLight: "Manrope-ExtraLight",
  Light: "Manrope-Light",
  Medium: "Manrope-Medium",
  Regular: "Manrope-Regular",
  SemiBold: "Manrope-SemiBold",
  PlayFairDisplay: "PlayfairDisplay-Bold",
};

const styles = {
  titleMedium: {
    fontFamily: fonts.SemiBold,

    // coto ishlanak
    fontSize: {
      xs: "32px",
      sm: "32px",
      md: "36px",
    },

    // taze goshdum
    background: "linear-gradient(278.86deg, #302460 14.37%, #593EC5 100%)",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  body1: {
    fontFamily: fonts.SemiBold,
    fontSize: "16px",
    lineHeight: "130%",
    color: grey[800],
  },

  sectionTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: "36px",
    lineHeight: "130%",
    color: "#FFFFFF",
  },
};

export default styles;
