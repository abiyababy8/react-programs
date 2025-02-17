import React from 'react'

function EmployeeDetails() {
    const empDetails = [
        { emp_id: 342, name: 'sean', department: 'hr', salary: 40000 },
        { emp_id: 343, name: 'todd', department: 'developer', salary: 35000 },
        { emp_id: 344, name: 'emma', department: 'finance', salary: 45000 }
    ]
    return (
        <>
            <h2 style={{ color: 'blue' }}>Employee Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>EMP ID</th>
                        <th>EMP NAME</th>
                        <th>DEPARTMENT</th>
                        <th>SALARY</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        empDetails.map(item => (
                            <tr>
                                 <td>{item.emp_id}</td>
                                 <td>{item.name}</td>
                                 <td>{item.department}</td>
                                 <td>{item.salary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default EmployeeDetails