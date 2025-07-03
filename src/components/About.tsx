import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import { API_URL } from "../api/constance";
import axios from "axios";

export default function About() {
  type User = {
    id?: number;
    fname?: string;
    lname?: string;
    username?: string;
    avatar?: string;
  };

  const [user, setUser] = useState<User[]>([]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(API_URL);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  console.log(user);
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      {user.map((item, index) => (
        <Grid2
          container
          direction="column"
          spacing={1}
          sx={{ mt: 2 }}
          key={index}
        >
          <Grid2>
            <Avatar
              alt={item.username}
              src={item.avatar}
              sx={{ width: 56, height: 56 }}
            />
          </Grid2>
          <Grid2>
            <Typography>
              <strong>{item.username}:</strong>
            </Typography>
            <Typography>
              <strong>{item.fname}:</strong>
            </Typography>
            <Typography>
              <strong>{item.lname}:</strong>
            </Typography>
          </Grid2>
        </Grid2>
      ))}
    </>
  );
}
