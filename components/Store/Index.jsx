import React from 'react'
import Shop from './Shop'
import SideBar from './SideBar'

export default function Index() {
  return (
    <div className="flex w-full mt-4">
      <SideBar />
      <Shop />
    </div>
  )
}
