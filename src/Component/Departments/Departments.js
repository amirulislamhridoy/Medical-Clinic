import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import SingleDepartment from './SingleDepartment';
import './Departments.css'
import Footer from '../Shared/Footer';

const Departments = ({ children }) => {
    const location = useLocation()
    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('https://medical-clinic-server.vercel.app/department')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])

    return (
        <main>
            <Header location={location}></Header>
            {departments && <div className='sub-title'>
                <div>{children}</div>
            </div>}
            <div className='department-main'>
                <div className='department-left'>
                    {departments?.map(department => <SingleDepartment department={department} key={department._id}></SingleDepartment>)}
                </div>
                <div className='department-right'>
                    <div>
                        <h3>Our Departments</h3>
                        {departments.map(department => <p><Link to=''>{department.name}</Link> <hr /></p>)}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
};

export default Departments;