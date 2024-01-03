import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext'; // Import your UserContext

function UserList() {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from your API
  }, []);

  const makeAdmin = async (userId) => {
    if (user.admin) {
      // Send a request to your API to make the user an admin
    }
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          {user.admin ? (
            <p>Admin</p>
          ) : (
            <button onClick={() => makeAdmin(user.id)}>Make Admin</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;