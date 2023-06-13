import React from 'react';
import { useAccount } from './AccountContext';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { Account_data } from './AccountContext';
import {useContext} from'react';
import {useRouter} from "next/router";

function Navbar() {
  // const [account, setAccount] = useAccount(); // Adjust the destructuring of the context value
const {account,setAccount} = useContext(Account_data);

const router = useRouter();
  async function connectWallet() {
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

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button><br></br>
      <button onClick={() => router.push("/createUser")}>user </button>
      <h1>{account}</h1>
    </div>
  );
}

export default Navbar;
