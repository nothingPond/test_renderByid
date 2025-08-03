import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface TypographyCustomProps {
  text: string;
  delay?: number; 
  initialDelay?: number; 
}
export default function TypographyCustom(props: TypographyCustomProps) {

   const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // หน่วงเวลาเริ่มต้นก่อนที่เอฟเฟกต์จะเริ่มทำงาน
    const initialTimer = setTimeout(() => {
      if (index < props.text.length) {
        const charTimer = setTimeout(() => {
          setDisplayedText((prev) => prev + props.text[index]);
          setIndex((prev) => prev + 1);
        }, props.delay); // หน่วงเวลาระหว่างตัวอักษรแต่ละตัว
        return () => clearTimeout(charTimer);
      }
    }, index === 0 ? props.initialDelay : 0); // ใช้ initialDelay เฉพาะครั้งแรก

    return () => clearTimeout(initialTimer);
  }, [index, props.text, props.delay, props.initialDelay]);

  return (
    <Typography
      variant='body1'
      sx={{
        fontWeight: 'bold',
        color: '#f2f2f2',
        mb: 1,
        borderRight: '2px solid transparent', 
        animation: index < props?.text.length ? 'none' : 'blink-caret .75s step-end infinite', 
        '@keyframes blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#f2f2f2' }, 
        },
      }}
      {...props} 
    >
      {displayedText}
    </Typography>
  );
}
