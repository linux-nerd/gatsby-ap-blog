import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdjust } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Input = styled.input`
  height: 0px;
  width: 0px;
  visibility: hidden;
`

const Label = styled.label`
  cursor: pointer;
`
export const ThemeToggle = ({ isLightTheme, onToggle }) => {
  return (
    <Label>
      <FontAwesomeIcon icon={faAdjust} size="lg" />
      <Input type="checkbox" checked={isLightTheme} onChange={onToggle} />
    </Label>
  )
}
