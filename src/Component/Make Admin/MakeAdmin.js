import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../Shared/Header';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [refetch, setRefetch] = useState(false)
    const location = useLocation()
    const [users, setUsers] = useState([])
    console.log(users)

    useState(() => {
        fetch('https://medical-clinic-server.vercel.app/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [refetch])

    const makeAdminFn = (id) => {
        console.log(id)
        fetch(`https://medical-clinic-server.vercel.app/makeAdmin?id=${id}`, {
            method: 'PUT',
            body: JSON.stringify(),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                toast.success('You are make a admin')
                console.log(json)
                setRefetch(!refetch)
            });
    }
    return (
        <main>
            <Header location={location}></Header>
            <div className='make-admin'>
                <table border='1' cellSpacing='1'>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <tr>
                            <td>{user.email}</td>
                            <td>{user.role !== 'admin' && <button onClick={() => { makeAdminFn(user._id) }}>Make Admin</button>}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default MakeAdmin;