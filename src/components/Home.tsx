import { Box, Button, Checkbox, Grid, Grid2 } from "@mui/material";
import { useState } from "react";
import AutocompleteCustom from "./InputComponent/AutocompleteCustom";

function Home() {
  const [checked, setChecked] = useState(false);

  const [data, setData] = useState<{ label: string; value: string }[]>([
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ]);

  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          minHeight: "100vh",
          p: 2,
          minWidth: "100vw",
          marginTop: "40px",
        }}
      >
        <Grid2>
          <AutocompleteCustom
            label="Select an option"
            data={data}
            value={null}
            onChange={(value) => console.log(value)}
          ></AutocompleteCustom>
        </Grid2>
      </Box>
    </>
  );
}

export default Home;
