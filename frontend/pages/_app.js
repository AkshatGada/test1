import dynamic from 'next/dynamic'
import Head from 'next/head'
import '../styles/globals.css'
import AccountContext from './AccountContext'
import Navbar from './Navbar';
import CreateUser from './createUser';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <AccountContext>
                         
 <Component {...pageProps} />
                </AccountContext>
        </>
    )
}

export default MyApp
