import { Stack, Typography } from "@mui/material";
import styles from "../../helper/style.helper";

const Summary = () => {
  return (
    <Stack>
      <Typography sx={styles.titleMedium}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Sanly Bilim Ashgabat based digital and creative <br /> agency. Our team
        is lead in creating digital products. <br /> Sanly Bilim is not only
        about creating, but it’s about <br /> teaching, and support moves like
        gender equality.
      </Typography>
    </Stack>
  );
};

export default Summary;
