interface MenuItem {
  id: string;
  name: string;
  link: string;
  children?: MenuItem[];
}

// menu management
export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Home",
    link: "/Home",
  },
  {
    id: "2",
    name: "About",
    link: "/About",
  },
  {
    id: "3",
    name: "Profile",
    link: "",
  },
  {
    id: "4",
    name: "Settings",
    link: "/form",
  },
];

export default function MenuId() {
  return (
    <div>
      <h2>Menu Component</h2>
    </div>
  );
}
