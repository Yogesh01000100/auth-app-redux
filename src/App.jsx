import "./App.css";
import { connect } from "react-redux";

function App({ isVerified, login, logout }) {
  return (
    <div>
      {isVerified ? (
        <>
          <h1>Hello User!</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please login</h1>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isVerified: state.isVerified
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({ type: "LOGIN" }),
  logout: () => dispatch({ type: "LOGOUT" })
});

const app=connect(mapStateToProps, mapDispatchToProps)(App);

export default app;
