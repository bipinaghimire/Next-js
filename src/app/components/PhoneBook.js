import axios from "axios";
import { useEffect, useState } from "react";

export default function PhoneBook(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState([]);
  const [searchPhone, setSearchPhone] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [targetDetail, setTargetDetail] = useState();

  const baseUrl = "http://localhost:4000/details";

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      console.log(response);
      setDetails(response.data);
    });
  }, []);

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
      phone: phone,
    };
    axios.post(baseUrl, newDetail).then((response) => {
      console.log(response.data);
      setDetails(details.concat(response.data));
    });
    setName("");
    setPhone("");
  };

  const handleUpdate = (id) => {
    const detailToUpdate = details.find((detail) => detail.id === id);
    setName(detailToUpdate.name);
    setPhone(detailToUpdate.phone);
    setTargetDetail(detailToUpdate);
    setIsEdit(true);
  };


  const handleSave = (event) => {
    event.preventDefault();
    axios
      .put(`${baseUrl}/${targetDetail.id}`, { ...targetDetail, name: name, phone: phone })
      .then((response) => {
        setDetails(details.map((detail) => (detail.id === targetDetail.id ? response.data : detail)));
      });
    setName("");
    setPhone("");
    setIsEdit(false);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete phone number ${id}?`)) {
      axios.delete(`${baseUrl}/${id}`).then(() => {
        setDetails(details.filter((detail) => detail.id !== id));
      });
    }
  };

  const handleSearch = (event) => {
    setSearchPhone(event.target.value);
  };

  const filteredDetails = details.filter(
    (detail) =>
      detail.name.toLowerCase().includes(searchPhone.toLowerCase()) ||
      detail.phone.toLowerCase().includes(searchPhone.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or phone number"
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
      <form>
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <br />
        <br />
        <input type="number" placeholder="Phone Number" value={phone} onChange={handlePhoneChange} />
        <br />
        {
                    isEdit
                        ? <button onClick={handleSave}>save</button>
                        : <button onClick={handleSubmit}>add</button>
                }
      </form>
    </div>
  );
}
