import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}