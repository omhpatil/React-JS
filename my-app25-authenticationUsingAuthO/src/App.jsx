import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {

  const {
    isAuthenticated,
    isLoading
  } = useAuth0();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <h1>React Authentication using Auth0</h1>

      {!isAuthenticated && (
        <LoginButton />
      )}

      {isAuthenticated && (
        <>
          <Profile />

          <br />

          <LogoutButton />
        </>
      )}

    </div>
  );
}

export default App;