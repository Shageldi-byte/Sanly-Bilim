import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LogoOnly from "../../assets/icon/element/LogoOnly";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fonts } from "../../helper/style.helper";

export const styles = {
  regionText: {
    fontFamily: fonts.Regular,
    fontSize: "15px",
    lineHeight: "130%",
    color: "#FFFFFF",
  },
  clockText: {
    fontFamily: fonts.Regular,
    fontSize: "15px",
    lineHeight: "130%",
    color: "#FFFFFF",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    p: 0.6,
  },
  quoteText: {
    fontFamily: fonts.PlayFairDisplay,
    fontSize: "4.5vw",
    lineHeight: "130%",
    color: "#FFFFFF",
    width: "70%",
  },
  circle: {
    background: "rgba(255, 255, 255, 0.2)",
    border: "1px solid #9E9E9E",
    backdropFilter: "blur(20px)",
    borderRadius: "50%",
    width: {
      xs: "80px",
      sm: "100px",
      md: "130px",
      lg: "170px",
    },
    height: {
      xs: "80px",
      sm: "100px",
      md: "130px",
      lg: "170px",
    },
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};

const Header = () => {
  const height = 90;
  return (
    <div
      style={{
        backgroundImage: "url(/images/banner/header.png)",
        width: "100%",
        height: `${height}vh`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 1,
      }}
    >
      <Stack
        sx={{ width: "100%", height: `${height}vh` }}
        justifyContent={"center"}
      >
        <Container fixed>
          <Grid container>
            <Grid item xs={8}>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography sx={styles.regionText}>
                  Turkmenistan, Ashgabat
                </Typography>
                <Typography sx={styles.clockText}>20C 20:33</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Typography sx={styles.quoteText}>
                  Bridge between dreams and reality!
                </Typography>
                <Box sx={styles.circle}>
                  <Typography
                    sx={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: fonts.SemiBold,
                    }}
                  >
                    Our
                    <ArrowForwardIcon />
                  </Typography>
                  <Typography
                    sx={{ color: "white", fontFamily: fonts.SemiBold }}
                  >
                    Projects
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <h1></h1>
            </Grid>
          </Grid>
        </Container>
        <Stack
          sx={{
            position: "absolute",
            mt: 60,
            width: "100%",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          direction="row"
          spacing={2}
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="scroll-down-arrow"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <Typography
              sx={{ color: "rgba(255,255,255,0.5)", fontFamily: fonts.Medium }}
            >
              Scroll Down
            </Typography>
            <LogoOnly color="rgba(255,255,255,0.5)" />
          </motion.div>
        </Stack>
      </Stack>
    </div>
  );
};

export default Header;
