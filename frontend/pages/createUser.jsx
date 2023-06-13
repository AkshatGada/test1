import React, { useState } from 'react';
import { useAccount } from './AccountContext';
import { url } from './uploadToPrivate';
import { Account_data } from './AccountContext';
import { useContext } from 'react';

function CreateUser() {
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [fileUrls, setFileUrls] = useState([]);
  // const {account} = useAccount(); // Adjust the destructuring of the context value
const {account} = useContext(Account_data);

  function getFileUrls() {
    const fileUrl = url;
    setFileUrls((prevFileUrls) => [...prevFileUrls, fileUrl]);
  }

  const userArray = [];

  function setUser() {
    getFileUrls();

    const user = {
      name: name,
      imgUrl: imgUrl,
      walletAddress: account,
      fileUrl: fileUrls,
    };

    userArray.push(user);

    console.log(userArray);
  }

  return (
    <div>
      <h1>Users</h1>
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="imgUrl" onChange={(e) => setImgUrl(e.target.value)} />
      <h1>{account}</h1>
      <button onClick={setUser}>Add User</button>
      {/* {userArray.length > 0 && <Users name={userArray[0].name} />} */}
    </div>
  );
}

export default CreateUser;
