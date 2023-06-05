import React from "react";
import { fonts } from "../../helper/style.helper";

import {
  Grid,
  Typography,
} from "@mui/material";

interface IProps {
  title: string;
  desc: string;
}

const styles = {
  title: {
    fontFamily: fonts.Bold,
    fontSize: "66px",
    lineHeight: "130%",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#585858",
  },
  desc: {
    fontFamily: fonts.SemiBold,
    fontSize: "26px",
    lineHeight: "130%",
    textAlign: "center",
    color: "#585858",
  },
};

const CounterItem: React.FC<IProps> = (props) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography sx={styles.title}>{props.title}</Typography>
      <Typography sx={styles.desc}>{props.desc}</Typography>
    </div>
  );
};

const Counter = () => {
  //   const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Grid
        sx={{ width: "100%", pt: 10, pb: 10 }}
        container
        alignItems={"center"}
        rowSpacing={10}
      >
        <Grid item xs={12} sm={12} md={4}>
          <CounterItem title="10 ýyl" desc="Iş tejribe" />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CounterItem title="100%" desc="Hil üpjünçiligi" />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CounterItem title="200+" desc="Edilen işler" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Counter;
