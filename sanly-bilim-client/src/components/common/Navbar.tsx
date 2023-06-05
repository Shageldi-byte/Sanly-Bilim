import Logo from "../../assets/icon/element/Logo";
import MenuIcon from "../../assets/icon/element/MenuIcon";
import NavbarSelect from "./NavbarSelect";
import { Box, Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        pt: 2,
        pb: 2,
        backgroundColor: offset >= 100 ? "rgba(0,0,0,0.5)" : "transparent",
        backdropFilter: `blur(${offset >= 100 ? 10 : 0}px)`,
        zIndex: 10,
      }}
    >
      <Container fixed sx={{ width: "100%" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            width: "100%",
          }}
        >
          <Logo />
          <NavbarSelect />

          <Button variant="outlined" sx={{ pt: 1.5, pb: 1.5 }}>
            <MenuIcon />
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
