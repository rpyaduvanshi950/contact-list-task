import React from 'react'

function FavContactData(props) {
    return (
        <tbody>
            {
                props.favContacts.map((contact) => {
                    return (
                        <tr key={contact.key}>
                            <td>
                                <div className='profile-img-box'>
                                    <i className='fa-solid fa-user'></i>
                                </div>
                            </td>
                            <td><h2>{contact.name}</h2></td>
                            <td><h2>{contact.email}</h2></td>
                            <td><h2>{contact.tel}</h2></td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default FavContactData