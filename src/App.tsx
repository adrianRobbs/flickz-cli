import { Box, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Flickz</title>
        <meta
          name="description"
          content="Making your event experience magical"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        height="100vh"
      >
        <Stack spacing={2} textAlign="center">
          <Typography variant="h3" component="h1" color="primary">
            Flickz
          </Typography>
          <Typography variant="h5">Your future awaits</Typography>
          <Typography variant="body1">Coming soon.</Typography>
        </Stack>
      </Box>
    </>
  );
}

export default App;
