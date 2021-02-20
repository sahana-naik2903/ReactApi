import React, {useState, useEffect} from "react";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect( () => {
        getData()
    },[])

    const getData = async () => {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3003/users', {
             method: 'GET',
            })
            .then((response) => {
               return response.json()    
            }).then((data) => {
                setUser(data)
             }).catch((error) => {
                reject(error)
             });
         });
    }

    return (
        <div className="home-page red-hat-regular">
            <div className="user-data">
                <table id="customtable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.body}</td>
                                    <td>Edit</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home;