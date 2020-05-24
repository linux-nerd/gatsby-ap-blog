import React from "react"

export const ThemeToggle = ({ isLightTheme, onToggle }) => {
  return <input type="checkbox" checked={isLightTheme} onChange={onToggle} />
}
