import { Typography, Box, keyframes, styled } from "@mui/material";
import KeywordCloud from '../components/KeywordCloud.jsx';

const Home = () => {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography variant="h3" gutterBottom color="primary" align="center">
          Minto Joseph
        </Typography>
        

      </Box>

    </>
  );
};

export default Home;