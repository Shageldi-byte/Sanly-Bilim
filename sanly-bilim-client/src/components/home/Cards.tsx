import { Card, Container, Grid } from "@mui/material";



const Cards = () => {
  return (
    <Container sx={{ pt: 8, pb: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <img
              src="/public/images/card/bootcamp.png"
              alt=""
              width={"100%"}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <img
              src="/public/images/card/launchLife.png"
              alt=""
              width={"100%"}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <img src="/public/images/card/sepgit.png" alt="" width={"100%"} />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;
