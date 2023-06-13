import React, { useEffect, useState } from 'react';
import { app, database } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function Users() {
  const [users, setUsers] = useState([]);

  const collectionRef = collection(database, 'users');

  function getUsers() {
    getDocs(collectionRef)
      .then((response) => {
        const fetchedUsers = response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        setUsers(fetchedUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  return <button onClick={getUsers}>Get Users</button>;
}

export default Users;
