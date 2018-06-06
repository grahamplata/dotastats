export const styles = {
  app: {},
  applogo: {
    animation: "App-logo-spin infinite 20s linear",
    height: "80px"
  },
  appHeader: {
    background: "black",
    color: "white",
    textAlign: "center",
    height: "175px",
    padding: "20px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  },
  appTitle: { fontSize: "1.5em" },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    background: "#3498db",
    borderRadius: "5px",
    border: "none",
    color: "white",
    fontSize: "12px",
    padding: "10px 20px 10px 20px",
    textDecoration: "none"
  }
};

export const keyframesStyle = `
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  `;
