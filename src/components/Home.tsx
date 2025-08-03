import { Avatar, Box, Card, CardContent, Grid, Typography, } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TypographyCustom from "../components/InputComponent/TypographyCustom";
type userProfile = {
  name: string;
  title: string;
  implyText?: string
  bio: string;
  email: string;
  phone: string;
  location: string;
  profilePicture: string;
  skills: string[];
  experience: {
    company: string;
    position: string;
    duration: string;
    description: string;

  }[];
};

function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));



  const userProfile: userProfile = {
    name: "Mr.Chairat Srikeaw",
    title: "Frontend Developer",
    implyText: "Hello world i'm",
    bio: "รักการเขียนโค้ดและการเรียนรู้สิ่งใหม่ๆ สนใจเทคโนโลยีด้าน Web Development และ Cloud Computing",
    email: "Chairatsrikeaw6@gmail.com",
    phone: "065-673-2572",
    location: "กรุงเทพมหานคร, ประเทศไทย",
    profilePicture: "/assets/profile/profile.svg",
    skills: [
      "React Ts",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Python (intermediate)",
      "SQL (intermediate)",
      "HTML",
      "CSS",
      "Git",
      "Docker",
      "AWS",
      "Source Tree",
    ],
    experience: [
      {
        company: "Tech Solutions Co.",
        position: "Software Developer",
        duration: "Jan 2022 - Present",
        description: "พัฒนาระบบหลังบ้านและส่วนหน้าสำหรับแพลตฟอร์มอีคอมเมิร์ซ",
      },
      {
        company: "Digital Innovations Ltd.",
        position: "Junior Developer",
        duration: "Jun 2020 - Dec 2021",
        description: "ช่วยเหลือในการพัฒนาแอปพลิเคชันมือถือและเว็บไซต์",
      },
    ],
  };
  const fullText = `Welcome to my profile! I'm a ${userProfile.title} with a passion for coding and technology.`;

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', backgroundColor: '#302f2fff', overflow: 'hidden', }}
    >

      <Grid container
        spacing={4} // กำหนดระยะห่างระหว่าง Grid items (Card)
        justifyContent="center" // จัด Card ให้อยู่ตรงกลางแนวนอนของ Grid container
        alignItems="center" // จัด Card ให้อยู่ตรงกลางแนวตั้งภายใน Grid item ของตัวเอง
        sx={{ maxWidth: 'lg' }}
      >
        {/* Card ใบที่ 1 */}
        <Grid item>
          <Typography variant='h6' component='div' sx={{ color: "#f2f2f2ff", mb: 1 }} > {userProfile.implyText} </Typography>
          <Typography variant='h4' component='div' sx={{ fontWeight: "bold", color: "#f2f2f2ff", mb: 1, }} > {userProfile.name} </Typography>
          <TypographyCustom
            text={fullText}
            delay={50} // ความเร็วในการพิมพ์ (ms)
            initialDelay={500} // หน่วงเวลาก่อนเริ่มพิมพ์ครั้งแรก (ms)
          />
        </Grid>

        {/* Card ใบที่ 2 */}
        <Grid item>
          <Card
            sx={{ maxWidth: 400, minWidth: 300, textAlign: "center", p: 4, boxShadow: 6, borderRadius: 2, }}
          >
            <CardContent>
              <Avatar
                alt={userProfile.name}
                src={userProfile.profilePicture}
                sx={{ width: 150, height: 150, margin: "0 auto 25px auto", border: "4px solid #3f51b5", boxShadow: 3, }}
              />
              <Typography variant='body1' color='text.secondary'>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
