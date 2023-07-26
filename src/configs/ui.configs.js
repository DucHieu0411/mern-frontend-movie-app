const uiConfigs = {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), tgba(0,0,0,0)",
      },
      light: {
        backgroundImage:
          "linear-gradient(to top, rgba(245,245,245,1), tgba(0,0,0,0)",
      },
    },

    horizontalGradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,1), tgba(0,0,0,0)",
      },
      light: {
        backgroundImage:
          "linear-gradient(to right, rgba(245,245,245,1), tgba(0,0,0,0)",
      },
    },

    typoLines: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines,
    }),

    mainContent: {
      maxWidth: "1336px",
      margin: "auto",
      padding: 2,
    },

    backgroundImage: (imgPath) => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPossition: "center",
      backgroundColor: "darkgrey",
      backgroundImage: `url(${imgPath})`,
    }),
  },

  size: {
    sidebarWith: "300px",
    contentMaxWidth: "1366px",
  },
};

export default uiConfigs;
