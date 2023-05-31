import { useState } from "react";

export default function PhoneBook(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState(props.details);
  const [searchPhone, setSearchPhone] = useState("");
  const [isEdit, setIsEdit] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDetail = {
      id: details.length + 1,
      name: name,
      phone: phone
    };
    setDetails([...details, newDetail]);
    setName("");
    setPhone("");
  };

const handleUpdate=(id)=>{
    setDetails(details.find(n=>n.id === id).name)
    setIsEdit(true)
}

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete detail ${id}?`)) {
      setDetails(details.filter((detail) => detail.id !== id));
    }
  };

  const handleSearch = (event) => {
    setSearchPhone(event.target.value);
  };
  const filteredDetails = details.filter((detail) =>
    detail.name.toLowerCase().includes(searchPhone.toLowerCase())
  );

  return (
    <div>
         <input
        type="text"
        placeholder="Search by name"
        value={searchPhone}
        onChange={handleSearch}
      />
      <h3>PhoneBook</h3>
      <ul>
        {filteredDetails.map((detail) => (
          <li key={detail.id}>
            {detail.name} {detail.phone}
            <br />
            <button onClick={() => handleUpdate(detail.id)}>Update</button>
            <br />
            <button onClick={() => handleDelete(detail.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <br />
        <br />
        <input type="number" placeholder="PhoneNumber" value={phone} onChange={handlePhoneChange} />
        <br />
        {
          isEdit?<button onClick={handleUpdate}>save</button>
          : <button type="submit">Submit</button>
        }
       
      </form>
    </div>
  );
}
