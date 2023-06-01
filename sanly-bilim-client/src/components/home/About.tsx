import { Container, Stack, Typography } from "@mui/material";
import LogoOnly from "../../assets/icon/element/LogoOnly";
import styles from "../../helper/style.helper";

const About = () => {
  return (
    <Container>
      <Stack alignItems={"center"}>
        <LogoOnly color="#513AB1" />

        <Stack alignItems={"center"} sx={{ width: "90%", pt: 3 }}>
          <Typography sx={styles.titleMedium}>
            Sanly Bilim is Ashgabat based digital agency.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "36px", //responsive gerek
              textAlign: "center",
            }}
          >
            Our team is lead in creating digital products. But it’s not only
            about creating, Sanly Bilim is about teaching and supporting moves
            like gender equality.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
