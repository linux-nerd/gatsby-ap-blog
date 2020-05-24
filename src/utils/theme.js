const commonTheme = {
  font: {
    family: "Montserrat, sans-serif",
  },
}

export const darkTheme = {
  ...commonTheme,
  color: {
    primary: "#86BDFA",
    text: "hsla(0, 0%, 100%, 0.88)",
    bg: "#282c35",
    imgBg: "hsla(0, 0%, 100%, 0.88)",
  },
}

export const lightTheme = {
  ...commonTheme,
  color: {
    primary: "#007acc",
    text: "hsla(0,0%,0%,0.9)",
    bg: "#fff",
    imgBg: "transparent",
  },
}
