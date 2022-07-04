import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";


function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, [])

  return user ? <h3>{user.displayName}</h3> : 'Not Found'
}

export default Profile;