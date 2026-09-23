import { useAuth0 } from "@auth0/auth0-react";

function Profile() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div>

            <h2>User Profile</h2>

            <img
                src={user.picture}
                alt={user.name}
                width="100"
            />

            <p>
                <strong>Name:</strong> {user.name}
            </p>

            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <p>
                <strong>Username:</strong> {user.nickname}
            </p>

        </div>
    );
}

export default Profile;