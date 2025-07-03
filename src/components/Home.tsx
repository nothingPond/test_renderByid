import { Box, Grid2 } from "@mui/material";
import { useState } from "react";
import AutocompleteCustom from "./InputComponent/AutocompleteCustom";

function Home() {
  // const [checked, setChecked] = useState<boolean>(false);

  const [data, setData] = useState<{ label: string; value: string }[]>([
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ]);
  setData((prevData) => [...prevData, { label: "Option 4", value: "option4" }]);
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
      {/* sadsadsada */}
    </>
  );
}
// //  เพิ่ม rebase commit 1
// //  เพิ่ม rebase commit 2
export default Home;
//  เพิ่ม rebase commit 1
//  เพิ่ม rebase commit 2
