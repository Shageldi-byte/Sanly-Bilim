import { Button, Container, Stack, Typography } from "@mui/material";
import Logo from "../../assets/icon/element/Logo";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Container sx={{pt: 6, pb: 6}}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Logo />

        <Stack direction={"row"} spacing={2}>
          <Button variant="outlined">
            <CallIcon />
          </Button>
          <Button variant="outlined">
            <EmailIcon />
          </Button>
          <Button variant="outlined">
            <InstagramIcon />
          </Button>
        </Stack>
      </Stack>
      <Typography sx={{textAlign: 'center', pt: 4}}>2022, LaunchLife. All Rights Reserved.</Typography>
    </Container>
  );
};

export default Footer;
