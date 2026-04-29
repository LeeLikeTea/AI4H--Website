import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 关键：设置 base 路径为你的仓库名
  base: '/AI4H--Website/'
})
