import { useAuth0 } from "@auth0/auth0-react";

// component to send JWT to backend and validate user.

const SendRequest = () => {
  const { getAccessTokenSilently } = useAuth0();

  const fetchProtectedData = async () => {
    const token = await getAccessTokenSilently();
    console.log(token);
    const response = await fetch("https://aura-library.onrender.com/users/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    body: JSON.stringify({
      auth0_token: token
    })
    const data = await response.json();
    console.log(data);
  };
  return <button onClick={() => fetchProtectedData()}>SendRequest</button>;
};

export default SendRequest;
