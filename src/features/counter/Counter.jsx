import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Refresh from "@mui/icons-material/Refresh";
// Import redux hooks
// Import counter actions

export default function Counter() {
  const [multiplyAmount, setMultiplyAmount] = React.useState(0);

  // Get counter state
  // Initialize dispatch method

  const resetAll = () => {
    setMultiplyAmount(0);
  };

  return (
    <Container>
      <Stack mt={8} direction="column" display="flex" alignItems="center">
        <Typography component="h1" variant="h3">
          Counter
        </Typography>

        <Box mt={2}>
          <TextField
            id="amount"
            type="number"
            margin="normal"
            fullWidth
            label="Multiply by this"
            value={multiplyAmount}
            onChange={(e) => setMultiplyAmount(e.target.value)}
          />

          <Button
            onClick={() => {}} // ToDo Multiply by amount
            fullWidth
            variant="contained"
          >
            Multiply Amount
          </Button>
        </Box>

        <Typography component="p" variant="h1">
          {0}
        </Typography>

        <Stack direction="row" mt={2} spacing={2}>
          <Button
            onClick={() => {}} // ToDo Decrement
            variant="contained"
          >
            <Remove />
          </Button>
          <Button
            onClick={() => {}} // ToDo Increment
            variant="contained"
          >
            <Add />
          </Button>
          <Button
            onClick={resetAll} // ToDo Reset
            variant="contained"
            color="warning"
          >
            <Refresh />
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
