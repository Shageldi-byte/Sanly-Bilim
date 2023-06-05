import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { fonts } from "../../helper/style.helper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Summary from "../common/Summary";

const circle = {
  background: "rgba(255, 255, 255, 0.2)",
  border: "1px solid #9E9E9E",
  backdropFilter: "blur(20px)",
  borderRadius: "50%",
  width: "210px",
  height: "210px",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "45%",
  translate: "-45%",
};

const SecondSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ padding: "0 5%", position: "relative" }}>
      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{ pt: 6, pb: 10 }}
        alignItems={"flex-start"}
        spacing={5}
      >
        <div style={{ paddingTop: "200px", width: "50%" }}>
          <Summary />
        </div>

        <Box sx={circle}>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontFamily: fonts.SemiBold,
              fontSize: "20px",
            }}
          >
            Learn More <ArrowForwardIcon />
          </Typography>
        </Box>

        <Stack sx={{ width: "50%" }}>
          <img src="../public/images/secondpsection.png" alt="" />
        </Stack>
      </Stack>
    </div>
  );
};

export default SecondSection;
