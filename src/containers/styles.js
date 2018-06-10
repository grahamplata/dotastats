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
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  formInput: {
    borderRadius: "5px",
    border: "none",
    color: "black",
    fontSize: "12px",
    maxWidth: "150px",
    marginLeft: "10px",
    padding: "10px 20px 10px 20px",
    textDecoration: "none",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  },
  formLabel: {
    color: "#fff",
    fontSize: "18px",
    marginLeft: "10px",
    textDecoration: "none"
  },
  formButton: {
    background: "#2489cd",
    borderRadius: "5px",
    border: "none",
    color: "white",
    fontSize: "12px",
    maxWidth: "150px",
    marginLeft: "10px",
    padding: "10px 20px 10px 20px",
    textDecoration: "none",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  },
  cards: {
    marginTop: 15,
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
    width: "400px",
    height: "200px",
    paddingLeft: "20px",
    paddingRight: "20px"
  }
};

export const keyframesStyle = `
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  `;
