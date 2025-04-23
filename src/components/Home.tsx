import { Checkbox, Grid2, Typography } from "@mui/material";
import { useState } from "react";

function Home() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Grid2>
        <Typography> home</Typography>
      </Grid2>
      <Grid2>
        <Checkbox
          title="Checkbox"
          id="checkbox"
          name="checkbox"
          value={checked}
          onChange={(e) => {
            console.log(e.target.value);
            setChecked(e.target.checked);
          }}
        ></Checkbox>
      </Grid2>
    </>
  );
}

export default Home;

//
//

// export function Home = () => {

//   return (

//     <>
//
//     </>
//   );
// };

// export default Home;
