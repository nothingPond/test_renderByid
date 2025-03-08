import { Grid2 } from '@mui/material';
import { menuItems } from './menuId';

interface MenuItem {
  id: string;
  name: string;
  link: string;
  children?: MenuItem[];
}

export default function MenuTest() {
  return (
    <Grid2
      sx={{
        position: "fixed",
        top: 0,
        justifyContent: "flex-start",
        justifyItems: "flex-start",
        width: "100%",
        backgroundColor: "white",
        zIndex: 10,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "10px 0",
      }}
    >
      <Grid2 container spacing={2} display={"flex"} justifyContent={"center"}>
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

  );
}