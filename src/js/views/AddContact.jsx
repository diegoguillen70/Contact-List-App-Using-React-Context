import React, { useState, useContext } from "react";
import { StoreContext } from "../store/Store";
import { Link } from "react-router-dom";
import "../../styles/addContact.css";
import { addContact } from "../functions/funtions.js";

const AddContact = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [formData, setFormData] = useState({
    address: "",
    agenda_slug: "",
    email: "",
    full_name: "",
    phone: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    //console.log(formData);
    dispatch({ type: "ADD_CONTACT", payload: formData });
    setFormData({
      address: "",
      email: "",
      full_name: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      agenda_slug: "diegoguillen",
      [e.target.name]: e.target.value,
    });
  };
  //console.log(formData);
  return (
    <>
      <div className="container">
        <div className="text">Add Contact Form</div>
        <form action="#">
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="full_name"
                required=""
                value={formData.full_name}
                onChange={handleChange}
              />
              <div className="underline" />
              <label htmlFor="">Full Name</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="address"
                required=""
                value={formData.address}
                onChange={handleChange}
              />
              <div className="underline" />
              <label htmlFor="">Address</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                required=""
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
              <div className="underline" />
              <label htmlFor="">Email Address</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                required=""
                value={formData.phone}
                name="phone"
                onChange={handleChange}
              />
              <div className="underline" />
              <label htmlFor="">Phone</label>
            </div>
          </div>
          <div className="form-row">
            <input
              type="submit"
              value="Add Contact"
              name="clear"
              onClick={handleClick}
            />
            <input
              className="mx-3"
              type="submit"
              value="Clear"
              name="clear"
              onClick={handleClick}
            />
          </div>
        </form>
      </div>
      <style>{`body{background-color: rgb(217, 217, 217);}`}</style>
    </>
  );
};

export default AddContact;
