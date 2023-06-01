import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import styles, { fonts } from "../../helper/style.helper";

const cardTitle = {
  fontFamily: fonts.SemiBold,
  fontSize: "22px",
  lineHeight: "130%",
  color: "#000",
  textAlign: "center",
};

const Services = () => {
  return (
    <Box sx={{ pt: 7, pb: 15, bgcolor: "#111111" }}>
      <Container>
        <Typography sx={{...styles.sectionTitle, mb: 5}}>Service</Typography>

        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography sx={cardTitle}>Web Development</Typography>
                <img
                  src="/public/images/service/webDevelopment.png"
                  alt=""
                  width={"100%"}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography sx={cardTitle}>Web Development</Typography>
                <img
                  src="/public/images/service/mobileDevelopment.png"
                  alt=""
                  width={"100%"}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography sx={cardTitle}>Web Development</Typography>
                <img
                  src="/public/images/service/product.png"
                  alt=""
                  width={"100%"}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography sx={cardTitle}>Web Development</Typography>
                <img
                  src="/public/images/service/consulting.png"
                  alt=""
                  width={"100%"}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
