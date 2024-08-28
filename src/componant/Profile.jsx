import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'


function Profile() {
    const [data, setData] = useState([])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        document.title = 'profile page';
        fetchData()
    })

    const fetchData = async () => {
        try {
            const response = await fetch('https://seenunseendesign.com/seen_unseen/api/user/detailinfo?=', +user.id + 'active_token' + user.active_token)
            const jsonData = await response.json()
            setData(jsonData.data)
        }
        catch (error) {
            console.log("fetching error ", error);
        }

    }




    return (
        <>
            <div className="flex items-center justify-center w-full">

                <div className="flex w-50 h-50  m-auto p-3 ">

                    <h1 className='font-bold text-center text-lg  '> Profile</h1> <br />
                    <h3> Name {data.Name}  </h3>
                    <h3> Email {data.Email}  </h3>
                    <h3> Mobile {data.Mobile}  </h3>
                    <h3> Address {data.Address}  </h3>

                </div>

            </div>

        </>)
}

export default Profile