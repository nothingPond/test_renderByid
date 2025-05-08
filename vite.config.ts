import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  build: {
    minify: false, // ปิดการบีบอัดเพื่อให้ใช้ RAM น้อยลง
    cssCodeSplit: false, // ป้องกันการแยกไฟล์ CSS หลายไฟล์
    sourcemap: false, // ไม่ต้อง generate sourcemap
  },
})
