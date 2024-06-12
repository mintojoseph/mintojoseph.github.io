import { Typography, Link, Box } from "@mui/material";
import {
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    Email as EmailIcon,
    SaveAlt as SaveAltIcon,
  } from "@mui/icons-material";
  import {  Container, Grid, Tooltip } from "@mui/material";
  import { Snackbar, Alert } from '@mui/material';

  import { toast } from "react-toastify";
  import React, { useState } from 'react'; 


const Footer = ({ fontSize = "large" }) => {
  const [isCopied, setIsCopied] = useState(false);
  const onClick = () => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText("mintojoseph@gmail.com");
    } else {
      document.execCommand("copy", true, "mintojoseph@gmail.com");
    }
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };
  
  return (

    <Box
    sx={{
      bottom: 0,
      left: 0,
      position: "fixed",
      justifyContent: "space-between",
      bgcolor: "background.paper",
      paddingTop: 1.5,
      paddingBottom: 3,
      width: "100vw",
      height: "100px",
    }}
  >
    <Container maxWidth="lg">
      <Grid container justifyContent="space-between" alignItems="center">
        <Tooltip
          describeChild
          title="Github Profile"
          arrow={true}
          placement="top"
        >
          <GitHubIcon
            sx={{ mx: 1, color: "text.primary", "&:hover": { cursor: "pointer" }}}
            onClick={() => {
              window.open("https://github.com/mintojoseph", "_blank");
            }}
            fontSize="large"
          />
        </Tooltip>
        <Tooltip
          describeChild
          title="LinkedIn Profile"
          arrow={true}
          placement="top"
        >
          <LinkedInIcon
            sx={{ mx: 1, color: "text.primary", "&:hover": { cursor: "pointer" }}}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/mintojoseph",
                "_blank"
              );
            }}
            fontSize="large"
          />
        </Tooltip>
        <Tooltip
          describeChild
          title="Download Resume"
          arrow={true}
          placement="top"
        >
          <SaveAltIcon
            sx={{ mx: 1, color: "text.primary", "&:hover": { cursor: "pointer" }}}
            onClick={() => {
            window.open(
                "/src/assets/Resume-minto-with-pic.pdf",
                "_blank"
              );
            }}
            fontSize="large"
          />
        </Tooltip>
        <Tooltip
          describeChild
          title="Copy Email"
          arrow={true}
          placement="top"

        >
          <EmailIcon
            sx={{ mx: 1, color: "text.primary", "&:hover": { cursor: "pointer" }}}
            onClick={onClick}
            fontSize={fontSize}
          />
          <Snackbar
        open={isCopied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
      >
        <Alert onClose={() => setCopied(false)} severity="success">
          Email copied to clipboard!
        </Alert>
      </Snackbar>
        </Tooltip>
        </Grid>
    </Container>
  </Box>
  );
};

export default Footer;