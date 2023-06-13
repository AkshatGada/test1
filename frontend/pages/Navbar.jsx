// 

import React from 'react';
import { useAccount } from './AccountContext';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { Account_data } from './AccountContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { app, database } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function Navbar() {
  const [users, setUsers] = useState([]);
  const [registered, setRegistered] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);

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

  function checkUsers() {
    const isRegistered = users.some((user) => user.walletAddress === account);
    setRegistered(isRegistered);
  }

  useEffect(() => {
    getUsers();
  }, []);

  const { account, setAccount } = useContext(Account_data);

  const router = useRouter();

  async function connectWallet() {
    setButtonClick(true);
    if (window.ethereum) {
      try {
        await window.ethereum.enable();

        const alchemy = createAlchemyWeb3('https://polygon-mumbai.g.alchemy.com/v2/aZ0iDaHlWI3hr6RgDk3F56iVT80IX2mc');
        const accounts = await alchemy.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    checkUsers();
  }, [users, account]);

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <br />
      <button onClick={() => router.push('/createUser')}>user</button>
      <h1>{buttonClick && registered ? 'yes' : buttonClick && !registered ? 'no' : 'I dont know'}</h1>
      <h1>{account}</h1>
    </div>
  );
}

export default Navbar;
