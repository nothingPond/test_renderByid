
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Grid2 } from "@mui/material";



export default function About() {
  return (
    <Paper elevation={3} sx={{ maxWidth: 400, mx: "auto", p: 3, borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Profile
      </Typography>
      <Grid2 container spacing={2} alignItems="center">
        <Grid2>
          <Avatar
            sx={{ width: 80, height: 80 }}
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </Grid2>
        <Grid2>
          <Typography variant="h6">John Doe</Typography>
          <Typography color="textSecondary">Web Developer</Typography>
        </Grid2>
      </Grid2>
      <Grid2 container direction="column" spacing={1} sx={{ mt: 2 }}>
        <Grid2>
          <Typography><strong>Email:</strong> john.doe@example.com</Typography>
        </Grid2>
        <Grid2>
          <Typography><strong>Location:</strong> Bangkok, Thailand</Typography>
        </Grid2>
        <Grid2>
          <Typography><strong>About Me:</strong> Passionate about building web applications and learning new technologies.</Typography>
        </Grid2>
      </Grid2>
    </Paper>
  );
};
