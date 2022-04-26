import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

function SingleCol() {
  return (
    <Box px={3} height="100vh">
      <Box display="flex" justifyContent={"space-between"} height="60px">
        <Typography variant="h3">Flickz</Typography>
        <Stack direction={"row"}>
          <Button>Log In</Button>
          <Button>Sign up</Button>
        </Stack>
      </Box>
      <Divider />
      <Outlet />
    </Box>
  );
}

export default SingleCol;
