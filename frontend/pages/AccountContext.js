import React,{createContext,useContext,useState} from 'react';

// const AccountContext = createContext();

// export function useAccount() {
//     return useContext(AccountContext);
// }

// export function AccountProvider({children}) {
//     const [account,setAccount] = useState('');


//     return (
//         <AccountContext.Provider value={[account,setAccount]}>
//             {children}
//         </AccountContext.Provider>

//     )
// }

export const Account_data = createContext(null);

function AccountContext({children} ) {
    const [account,setAccount] = useState();

    return (
        <Account_data.Provider value={{account,setAccount}}>
            {children}
        </Account_data.Provider>
    )
}

export default AccountContext;