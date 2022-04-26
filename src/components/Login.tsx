import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { object } from "yup";

const schemaName = object({});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schemaName),
    mode: "onBlur",
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      height={"calc(100% - 63px)"}
    >
      <Box width="450px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              label="Email:"
              sx={{
                ":focus": {
                  backgroundColor: "teal",
                },
              }}
              {...register("email")}
              error={!!errors.email}
              helperText={!!errors.email && errors.email.message}
            />
            <TextField
              label="Password:"
              type={"password"}
              {...register("password")}
              error={!!errors.password}
              helperText={!!errors.password && errors.password.message}
            />
            <Button
              variant="contained"
              sx={{
                padding: ".8rem",
                backgroundColor: "black",
                ":hover": {
                  backgroundColor: "darkgray",
                },
              }}
              disableElevation
              type="submit"
            >
              Log In
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
