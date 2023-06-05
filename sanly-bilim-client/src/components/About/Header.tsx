import { Container, Stack, Typography } from "@mui/material";
import { fonts } from "../../helper/style.helper";

const styles = {
  main: {
    fontFamily: fonts.Bold,
    fontSize: "66px",
    lineHeight: "130%",
    background: "linear-gradient(278.86deg, #FFFFFF 14.37%, #D6CCFF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  desc: {
    fontFamily: fonts.SemiBold,
    fontSize: "16px",
    lineHeight: "130%",
    color: "#F7F7F7",
  },
};

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/banner/about.png)",
        width: "100%",
        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 1,
      }}
    >
      <Stack width={"100%"} height={"90vh"} justifyContent={"center"}>
        <Container fixed>
          <Stack>
            <Typography sx={styles.main}>About us</Typography>
            <Typography sx={styles.desc}>
              Our team is great, because <br />
              of our past.
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </div>
  );
};

export default Header;
