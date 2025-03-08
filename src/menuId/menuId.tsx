interface MenuItem {
  id: string;
  name: string;
  link: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Home',
    link: '/Home',
  },
  {
    id: '2',
    name: 'About',
    link: '/About',
  }
];

export default function MenuId() {
  return (
    <div>
      <h2>Menu Component</h2>
    </div>
  );
}