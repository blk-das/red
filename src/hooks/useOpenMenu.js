import { useState } from 'react'

export default function useOpenMenu() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = (e) => {
    setOpenMenu(!openMenu)
  }

  return {
    openMenu,
    handleOpenMenu
  }
}
