import React from 'react'
import { useRouter } from 'next/router'

function User() {

    const router = useRouter();

  return (
   <button onClick={() => router.push('/userUploadVideo')}>Upload</button>
    )
}

export default User