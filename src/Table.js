import React from 'react'
import './Table.css'

function Table({countries}) {
    return (
        <div className='table'>
            {countries.map((itemCountry) => (
                <tr>
                    <td>{itemCountry.country}</td>
                    <td>
                    <strong>{itemCountry.cases}</strong>
                    </td>
                </tr>
               
            ))}
        </div>
    )
}

export default Table
