import { grey } from "@mui/material/colors";

export const fonts = {
    Bold: 'Manrope-Bold',
    ExtraBold: 'Manrope-ExtraBold',
    ExtraLight: 'Manrope-ExtraLight',
    Light: 'Manrope-Light',
    Medium: 'Manrope-Medium',
    Regular: 'Manrope-Regular',
    SemiBold: 'Manrope-SemiBold',
    PlayFairDisplay: 'PlayfairDisplay-Bold'
}

const styles = {
  titleMedium: {
    fontFamily: fonts.SemiBold,
    fontSize: {
      xs: "32px",
      sm: "32px",
      md: "36px",
    },
  },
  body1: {
    fontFamily: fonts.SemiBold,
    fontSize: "16px",
    lineHeight: "130%",
    color: grey[800]
  },
};

export default styles;
