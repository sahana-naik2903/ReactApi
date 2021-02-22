import React,{useState} from 'react'
import './User.css';
import {useHistory} from 'react-router-dom';
const AddUser = () => {
    const [user,setUser] = useState({
        postid :"",
        id : "",
        name : "",
        email : "",
        body : ""
    });
let History = useHistory();
    const {postid,id,name,email,body} = user;

    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit = async e =>{
     e.preventDefault();
     return new Promise((resolve,reject) => {
        fetch('http://localhost:3003/users/',{
            method:'POST',
            body: JSON.stringify(user),
            headers: {
               'Content-Type': 'application/json'
            }

        })
        .then((response) => {
            return response.json()
            History.push("/");
        }).catch((error) =>{
            reject(error)
        });
    });
    }
    return (
        <>
           <div className="container">
           
                   <h2>Add User</h2><br/>
            
               <form onSubmit={e=>onSubmit(e)}>
                   <div className="formgroup">
                       <input type="text" placeholder="Enter post id"
                       name="postid" value={postid} onChange={e => onInputChange(e)}
                       /><br/><br/>
                        <input type="text" placeholder="Enter id"
                       name="id" value={id} onChange={e => onInputChange(e)}/><br/><br/>
                        <input type="text" placeholder="Enter name"
                       name="name" value={name} onChange={e => onInputChange(e)}/><br/><br/>
                        <input type="text" placeholder="Enter email"
                       name="email" value={email} onChange={e => onInputChange(e)}/><br/><br/>
                        <input type="text" placeholder="Enter description"
                       name="body" value={body} onChange={e => onInputChange(e)}/><br/><br/>
                   </div>
                   <div className="form-submit">
                       <button>Submit</button>
                   </div>
               </form>
           </div>
        </>
    )
}

export default AddUser
