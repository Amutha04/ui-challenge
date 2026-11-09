import { Route, Routes } from "react-router"
import ObjectDashboard from "./components/ObjectDashboard"
import ObjectList from "./components/ObjectList"

function App() {
  return (
    <Routes>
      <Route path="" element={<ObjectDashboard/>}>
      <Route path="object-list" element={<ObjectList/>}/>
      </Route>
    </Routes>
    
  )
}

export default App