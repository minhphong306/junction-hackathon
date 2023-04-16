import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const Form = ({ value }) => {
  const [typeForm, setTypeForm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value:", typeForm);
    // Do something with the form value (e.g. submit to server)
  };

  const handleChange = (event) => {
    setTypeForm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          columnGap: 1,
          borderRadius: "16px",
          p: 2,
          mx: "8rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <TextField
          value={value}
          fullWidth
          size="small"
          onChange={handleChange}
          placeholder="Paste here urls you want to check"
          sx={(theme) => ({
            "& fieldset": {
              border: "none",
            },
            "& input": {
              color: theme.palette.text.secondary,
            },
          })}
          InputProps={{
            endAdornment: (
              <Button
                type="submit"
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  boxShadow: "none",
                  fontWeight: 400,
                }}
                variant="contained"
                onClick={handleSubmit}
              >
                Check
              </Button>
            ),
          }}
        />
      </Box>
    </form>
  );
};

export default Form;
