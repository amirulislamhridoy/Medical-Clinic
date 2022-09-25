import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import SingleDepartment from './SingleDepartment';
import './Departments.css'
import Footer from '../Shared/Footer';

const Departments = () => {
    const location = useLocation()
    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('https://medical-clinic-server.herokuapp.com/department')
        .then(res => res.json())
        .then(data => setDepartments(data))
    }, [])

    return (
        <main>
            <Header location={location}></Header>
            <div className='department-main'>
                {departments.map(department => <SingleDepartment department={department} key={department._id}></SingleDepartment>)}
            </div>
            <Footer></Footer>
        </main>
    );
};

export default Departments;