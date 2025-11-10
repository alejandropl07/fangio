import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import "react-toastify/dist/ReactToastify.css";
import Typography from "@mui/material/Typography";

export default function Footer() {


  return (
   <React.Fragment>
  <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: { xs: 4, sm: 8 },
      py: { xs: 8, sm: 10 },
      textAlign: { sm: "center", md: "left" },
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pt: { xs: 1, sm: 3 },
        width: "100%",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* Primer bloque con encabezado */}
      <Stack direction="column" sx={{ mr: 10 }}>
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, ml: 1, color: "#286bce", fontWeight: 600 }}
        >
          Fangio Habana
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ color: "#286bce" }}>
          <IconButton
            color="inherit"
            size="small"
            href="https://multisoft.com"
            aria-label="Facebook"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://multisoft.com"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://multisoft.com"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Stack direction="column">
        <Typography
          variant="subtitle1"
          sx={{ mb: 1,ml: 1, color: "#286bce", fontWeight: 600 }}
        >
          Asia de Cuba
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ color: "#286bce" }}>
          <IconButton
            color="inherit"
            size="small"
            href="https://multisoft.com"
            aria-label="Facebook"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://multisoft.com"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://multisoft.com"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  </Container>
</React.Fragment>

  );
}
