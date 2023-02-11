import React,{useState} from 'react'
import './Registration.css'



export default function Registration() {
    const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  });


  const handleInputChange = (event) => {
    setNewMember({
      ...newMember,
      [event.target.name]: event.target.value
    });
  };

  const handleAddMember = (event) => {
    event.preventDefault();
    setMembers([...members, newMember]);
    setNewMember({
      name: '',
      email: '',
      phoneNumber: '',
      address: ''
    });
  };
  return (
    <div className="form-top">
    <h1>Fitness Club Registration </h1>
    <div className="form-container">
      <form className="form">
        <div className="form-field">
          <input type="text" id="name" name="name" required value={newMember.name} onChange={handleInputChange} placeholder="Enter Your Name" />
        </div>
        <div className="form-field">
          <input type="email" id="email" name="email" required value={newMember.email} onChange={handleInputChange}placeholder="Enter Your Email" />
        </div>
        <div className="form-field">
          <input type="text" id="phoneNumber" required name="phoneNumber" value={newMember.phoneNumber} onChange={handleInputChange} placeholder="Enter Your Phone Number"/>
        </div>
        <div className="form-field">
          <input type="text" id="address" required name="address" value={newMember.address} onChange={handleInputChange}placeholder="Enter Your Address" />
        </div>
        <div className="form-field">
        <button type="submit" onClick={handleAddMember} className="add-member-button">Add Member</button>
        </div>
      </form>
      <div className="member-list">
      <button type="submit" className = "add-member-button"onClick={handleAddMember}>View Member</button>
      <h2>Members:</h2>
      </div>
      <ul className="members-list">
        {members.map((member, index) => (
          <li key={index}>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Phone Number: {member.phoneNumber}</p>
            <p>Address: {member.address}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>

  );
}
