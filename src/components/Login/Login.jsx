import React, { useState } from "react";
import "./Login.css";
import {
  GithubAuthProvider,
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
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggenInUser = result.user;
        console.log(loggenInUser);
        setUser(loggenInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
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
          <>
            <button onClick={handleGoogleSignIn}>Google Login</button>
            <button onClick={handleGithubSignIn}>GitHub Login</button>
          </>
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
