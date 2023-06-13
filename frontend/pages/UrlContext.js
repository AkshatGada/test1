import React,{createContext,useContext,useState} from 'react';


export const Url_data = createContext(null);

function UrlContext({children} ) {
    const [url,setUrl] = useState();

    return (
        <Url_data.Provider value={{url,setUrl}}>
            {children}
        </Url_data.Provider>
    )
    }

    export default UrlContext;