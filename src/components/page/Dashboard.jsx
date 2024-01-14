import { useState } from 'react'
import Hearder from './Hearder'
import Sidebar from './Sidebar'
import "./Dashboard.css"
import Homee from './Homee'

function Dashboard() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const openSidebar = () => {
      setOpenSidebarToggle (!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Hearder openSidebar={openSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
      <Homee />
    </div>
  )
}

export default Dashboard
