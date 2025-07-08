import { Box, Button, Card, TextField, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <Box width="600px" margin="auto" p="2rem">
        <Typography variant="h2" fontWeight="bold" fontSize="2rem">
          Registration Form
        </Typography>
        <Card
          sx={{
            padding: "2rem 3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <TextField label="first name" fullWidth size="small"></TextField>
          <TextField label="last name" fullWidth size="small"></TextField>
          <TextField label="username" fullWidth size="small"></TextField>
          <TextField
            label="email"
            type="email"
            fullWidth
            size="small"
          ></TextField>
          <TextField
            label="password"
            type="password"
            fullWidth
            size="small"
          ></TextField>
          <TextField label="image url" fullWidth size="small"></TextField>
          <Button variant="contained" fullWidth>
            Register
          </Button>
        </Card>
      </Box>
    </>
  );
}

export default App;
