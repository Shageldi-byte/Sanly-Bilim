import { Container, useMediaQuery } from "@mui/material";
import Summary from "../common/Summary";
import { useTheme } from "@mui/material";

const ThirdSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container fixed>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: !isMobile ? "row-reverse" : "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: !isMobile ? "60%" : "100%",
            textAlign: !isMobile ? "right" : "left",
          }}
        >
          <Summary />
        </div>

        <div
          style={{ display: isMobile ? "none" : "inline-flex", width: "40%" }}
        >
          <img
            src="../public/images/secondpsection.png"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default ThirdSection;
