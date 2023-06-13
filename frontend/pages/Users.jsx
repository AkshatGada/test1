import React from 'react'
import {app,database} from './firebaseConfig'
import {collection,addDoc,getDocs} from 'firebase/firestore';


function users() {

  const collectionRef = collection(database,'users');

  function getUsers() {
    getDocs(collectionRef).then((response) => {
      console.log(
        response.docs.map((item) => {
          return{...item.data(), id : item.id};
        })
      )
    })

  }

  return (
<button onClick={getUsers}>get</button>  )
}

export default users