import { useAuth0 } from "@auth0/auth0-react";

// component to send JWT to backend and validate user.

const SendRequest = () => {
  const { getAccessTokenSilently } = useAuth0();

  const fetchProtectedData = async () => {
    const token = await getAccessTokenSilently();
    console.log(token);
    const response = await fetch("http://localhost:5000/protected", {
      //this endpoint will be different, im just using the localhost as a placeholder
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return <button onClick={() => fetchProtectedData()}>SendRequest</button>;
};

export default SendRequest;
