import { useState } from "react"
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";


export default function Portfolio (){
  const theme = useTheme();
const userProfile = {
  // ... other profile data
  projects: [
    {
      title: "E-commerce Website",
      description: "Developed a full-stack e-commerce platform with secure payment integration.",
      image: "/assets/projects/ecommerce-website.jpg",
    },
    {
      title: "Mobile App for Local Businesses",
      description: "Designed and built a native mobile application to connect users with local services.",
      image: "/assets/projects/mobile-app.jpg",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created interactive dashboards to visualize complex datasets using modern charting libraries.",
      image: "/assets/projects/data-dashboard.jpg",
    },
    // ... more projects
  ],
};

  return(
    <>
    <Grid item xs={12} md={8} > 
     <Card
       sx={{
         p: 3,
         boxShadow: 3,
         backgroundColor: "#302f2fff",
       }}
     >
       <CardContent>
         <Typography
           variant="h5"

           color="white"
           sx={{ fontWeight: "bold", textDecoration: "none" , mb:4}}
         >
           PROJECTS
         </Typography>
         <Grid container spacing={3}> {/* New inner Grid container for projects */}
           {userProfile.projects.map((project, index) => (
             <Grid item xs={12} sm={6} md={4} key={index}> {/* Project card Grid item */}
               <Card
                 sx={{

                   p: 2,
                   boxShadow: 8,
                   backgroundColor: theme.palette.background.paper,
                   height: '100%',
                   display: 'flex',
                   flexDirection: 'column',
                   
                 }}
               >
                 <CardContent sx={{ flexGrow: 1 }}>
                   <Box
                     sx={{
                       width: '100%',
                       height: 180,
                       overflow: 'hidden',
                       borderRadius: 1,
                       mb: 1.5,
                     }}
                   >
                     <img
                       src={project.image}
                       alt={project.title}
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                     />
                   </Box>
                   <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: "bold" }}>
                     {project.title}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     {project.description}
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
           ))}
         </Grid>
       </CardContent>
     </Card>
   </Grid>
    </>
  )
}