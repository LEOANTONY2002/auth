import "./App.css";
import firebase from "firebase";
import { fbProvider, glProvider } from "./firebase";
import fb from "./fb.png";
import gl from "./gl.png";

function App() {
  const login = (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <img onClick={() => login(glProvider)} src={gl} alt="" />
      <img onClick={() => login(fbProvider)} src={fb} alt="" />
    </div>
  );
}

export default App;
