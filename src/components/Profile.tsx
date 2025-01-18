import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // Gives us back our valid Token in console proof we logged in
  getAccessTokenSilently().then((token) => console.log(token));

  return (
    isAuthenticated && (
      <div className="pl-11 pb-5">
        <img className="rounded-3xl" src={user?.picture} alt={user?.name} />
        <div className="font-mono text-2xl text-[#ffffff] bg-[#0ca884] rounded-lg w-96 text-center">
        <h2>{user?.name}</h2>
        <p >{user?.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
