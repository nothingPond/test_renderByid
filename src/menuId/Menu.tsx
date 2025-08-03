import { Grid2 } from "@mui/material";
import { menuItems } from "./menuId";

interface MenuItem {
  id: string;
  name: string;
  link: string;
  children?: MenuItem[];
}

export default function MenuTest() {
  return (
    <>
      <Grid2
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#302f2fff",
          zIndex: 10,
          boxShadow: "0px 4px 10px rgba(10, 9, 9, 0.1)",
          padding: "10px 0",
        }}
      >
        <Grid2
          container
          spacing={2}
          display={"flex"}
          justifyContent={"center"}
          sx={{
            "& > li": { listStyle: "none", margin: "0 10px" },
            "& ul": { listStyle: "none", padding: 0, margin: 0 },
            "& ul li": { listStyle: "none" },
            "& a": {
              textDecoration: "none",
              color: "#FFD700",
              textDecorationColor: "transparent", 
              transition: "text-decoration-color 0.3s ease-in-out, color 0.3s ease-in-out",
              "&:hover": { color: "#FFA500", textDecoration: "underline" }, // ตัวอย่าง: เปลี่ยนเป็นสีส้มทองเมื่อ hover
            },
          }}
        >
          {menuItems.map((menu: MenuItem) => (
            <li key={menu.id}>
              <a href={menu.link}>{menu.name}</a>
              {menu.children && (
                <ul>
                  {menu.children.map((child: MenuItem) => (
                    <li key={child.id}>
                      <a href={child.link}>{child.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </Grid2>
      </Grid2>
    </>

  );
}
