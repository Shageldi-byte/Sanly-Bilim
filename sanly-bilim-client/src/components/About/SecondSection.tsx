import { Container, Stack, useMediaQuery } from "@mui/material";
import Summary from "../common/Summary";
import Counter from "../common/Counter";
import { useTheme } from "@mui/material";

const SecondSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container fixed>
        {/* responsive-a seretmeli (mobile) */}
      <div
        style={{
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
          alignItems: 'flex-start',
          width: "100%",
          height: !isMobile ? "740px" : "950px",
          paddingTop:!isMobile ? "100px": '50px',
        }}
      >
        <Stack>
          <div style={{ width: "60%" }}>
            <Summary />
          </div>
          <Counter />
        </Stack>
        <div
          style={{
            position: "absolute",
            right: 0,
            zIndex: -1,
            display: isMobile ? "none" : "inline-flex",
          }}
        >
          <img src="../../../public/images/about/bgsection.png" alt="" />
        </div>
      </div>
      <div style={{ width: "100%", height: "300px", background: "red" }}></div>
    </Container>
  );
};

export default SecondSection;
