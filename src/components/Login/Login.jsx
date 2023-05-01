import React, { useState } from "react";
import "./Login.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggenInUser = result.user;
        console.log(loggenInUser);
        setUser(loggenInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="centre">
        {/* user ? logout : sign in */}
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleGoogleSignIn}>Google Login</button>
        )}
      </div>

      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
<button>Google Login</button>;
