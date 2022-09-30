import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../Shared/Header';
import Loading from '../Shared/Loading';
import './AllAppointments.css'

const AllAppointments = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const [appointments, setAppointments] = useState([])
    const [todayAllResult, setTodayAllResult] = useState([])
    const today = format(new Date(), 'PP')

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/allAppointments?today=${today}`)
            .then(res => res.json())
            .then(data => {
                setAppointments(data?.allResult)
                setTodayAllResult(data?.todayAllResult)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [refetch])

    const deleteFn = (id) => {
        setLoading(true)
        fetch(`http://localhost:5000/appointment/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                setRefetch(!refetch)
                toast.error(`You are delete an appointment.`)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='all-appointments'>
            <Header location={location}></Header>
            <h2>All Today Appointments</h2>
            {todayAllResult.length > 1 ? <table border='1' cellSpacing='1'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Department</th>
                        <th>Doctor</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todayAllResult?.map(appointment => <tr key={appointment._id}>
                        <td>{appointment.date}</td>
                        <td>{appointment.department}</td>
                        <td>{appointment.doctor}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td onClick={() => deleteFn(appointment._id)}>Delete</td>
                    </tr>)}
                </tbody>
            </table>
                :
                <table>
                    <tbody>
                        <tr>
                            <td colSpan='7' style={{ textAlign: 'center' }}>Today you have no appointment</td>
                        </tr>
                    </tbody>
                </table>}
            <h2>All Appointments</h2>
            {appointments.length > 1 ? <table border='1' cellSpacing='1'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Department</th>
                        <th>Doctor</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {appointments?.map(appointment => <tr key={appointment._id}>
                        <td>{appointment.date}</td>
                        <td>{appointment.department}</td>
                        <td>{appointment.doctor}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td onClick={() => deleteFn(appointment._id)}>Delete</td>
                    </tr>)}
                </tbody>
            </table>
                :
                <table>
                    <tbody>
                        <tr>
                            <td colSpan='7' style={{ textAlign: 'center' }}>You have no appointment</td>
                        </tr>
                    </tbody>
                </table>}
        </div>
    );
};

export default AllAppointments;