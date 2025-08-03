import {

  Avatar,
  Box,
  Button,
  Card,
  CardContent,

  Grid, // Make sure Grid is imported
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
type skill = {
  name: string;
  icon: string;
}
type experiencetype = {
  company: string;
  position: string;
  duration: string;
  description: string;
  TopicName?: string;
}
type EducationType = {
SecondarySchool: string;
HighSchool: string;
  University?: string;
  Degree?: string;
  Major?: string;
  GPA?: string;
  GraduationYear?: string;
  Faculty?: string;
}

type userProfile = {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profilePicture: string;
  skills: skill[];
  experience: experiencetype[];
  Education:EducationType[];
};

export default function About() {
  const userProfile: userProfile = {
    name: "นาย ชัยรัชต์ ศรีเเก้ว",
    title: "Frontend Developer",
    bio: "สนใจเเละต้องการเรียนรู้ความรู้ใหม่ๆ ด้านเทคโนโลยีด้าน Web Development และ Cloud Computing",
    email: "Chairatsrikeaw6@gmail.com",
    phone: "065-673-2572",
    location: "กรุงเทพมหานคร, ประเทศไทย",
    profilePicture: "https://via.placeholder.com/150",
    skills: [
      {
        name: "React Ts",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",

      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        name: "Source Tree",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sourcetree/sourcetree-original.svg",
      },
    ],
    experience: [
      {
        company: "NECTEC : National Electronics and Computer Technology Center (NECTEC)",
        position: "Front - End Developer ",
        duration: "July - Octorber ( 2023 )",
        TopicName: "APPLICATION DEVELOPMENT SYSTEM FOR EXTRACTING ELEMENTS FOR TOURISM",
        description: "This research aims to develop a web-based system for presenting detailed food ingredient information, particularly for individuals with food allergies.Utilizing the React framework, the system classifies and extracts food components to enhance user understanding and support dietary planning for both tourists and the general public",
      },
      {
        company: "CLINITER : CLINITER CO., LTD ",
        position: "Front - End Developer ( junior Frontend Developer ) ",
        duration: "Jun 2020 - Dec 2021",
        TopicName:"HOSPITAL INFORMATION SYSTEM ( MORE-ANAMAI )",
        description: "MORE-ANAMAI is a comprehensive Hospital Information System (HIS) developed to streamline and digitize healthcare operations. Designed with efficiency and accessibility in mind, the system supports hospital staff in managing patient records, appointments, medical histories, prescriptions, and reporting—all within a centralized platform.",
      },
    ],
    Education :[
      {
        SecondarySchool:"Pratumkongkha Samutprakarn School ( 2017 )",
        HighSchool:"Pratumkongkha Samutprakarn School ( 2020 )",
        University:"rajamangala university of technology thanyaburi",
        Faculty:"B. Computer Science : Faculty of Science and Technology "

      },
    ]
  };

  const theme = useTheme();

  return (
    <Grid container spacing={3} sx={{ justifyContent: 'center', py: 4 }}> {/* Added Grid container */}
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            p: 3,
            boxShadow: 3,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <CardContent>
            <Avatar sx={{mb:2 , }} src="/assets/profile/profile.svg"></Avatar>
            <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: "bold" }}> About Me.</Typography>
            <Typography variant="body1"  color="primary "> {userProfile.bio} </Typography>
            <Typography variant="h6" sx={{ mt: 3 }} color="primary">
              ข้อมูลติดต่อ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box component="span" sx={{ fontWeight: "bold" }} >
                อีเมล:
              </Box>{" "}
              {userProfile.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box component="span" sx={{ fontWeight: "bold" }}>
                โทรศัพท์:
              </Box>{" "}
              {userProfile.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box component="span" sx={{ fontWeight: "bold" }}>
                ที่อยู่:
              </Box>{" "}
              {userProfile.location}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            p: 3,
            boxShadow: 3,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              color="primary"
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              EDUCATION
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {userProfile.Education.map((education, index) => (
                <Typography variant="body2" color="text.secondary" key={index}>
              <Box component="span" sx={{ fontWeight: "bold" }} > Secondary School : {education.SecondarySchool} </Box><br/>
               <Box component="span" sx={{ fontWeight: "bold" }} > High School : {education?.HighSchool} </Box><br/>
               <Box component="span" sx={{ fontWeight: "bold" }} > University : {education?.University} : {education?.Faculty}</Box><br/>
            </Typography>
            
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
        <Grid item xs={12} md={8}>
        <Card
          sx={{
            p: 3,
            boxShadow: 3,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              color="primary"
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              SKILL
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {userProfile.skills.map((skill, index) => (
                <Button
                  key={index}
                  variant="outlined" // Or "contained", "text"
                  color="primary"
                  sx={{ fontWeight: "bold", borderRadius: 2, cursor: "pointer" }}
                  startIcon={
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      style={{ width: 20, height: 20 }} 
                    />
                  }
                >
                  {skill.name}
                </Button>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            p: 3,
            boxShadow: 3,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              color="primary"
              sx={{ fontWeight: "bold" , textDecoration: "underline" }}
            >
              EXPERIENCE
            </Typography>
            {userProfile.experience.map((exp, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  pb: 2,
                  borderBottom:
                    index < userProfile.experience.length - 1
                      ? `1px solid ${theme.palette.divider}`
                      : "none", // ใช้สี divider จาก theme
                }}
              >
                <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}
                >
                  {exp.position} ที่ {exp.company}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontStyle: "italic" }}
                >
                  {exp.duration}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {exp.description}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}