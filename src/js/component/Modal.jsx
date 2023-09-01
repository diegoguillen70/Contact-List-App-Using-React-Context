import React, { useContext, useState, useEffect, useCallback } from "react";
import { StoreContext } from "../store/Store.js";
import "./../../styles/modal.css";

const Modal = ({ onShow }) => {
  const [state, dispatch] = useContext(StoreContext);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log("Inside useEffect");
    setFormData({
      ...formData,
      agenda_slug: "diegoguillen",
      address: state.contactSelect.address,
      email: state.contactSelect.email,
      full_name: state.contactSelect.full_name,
      phone: state.contactSelect.phone,
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    //console.log(state.contactSelect.id);
    fetch(
      "https://playground.4geeks.com/apis/fake/contact/" +
        state.contactSelect.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((resp) => {
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        return resp.json();
      })
      .then(() => {
        const getApiInfo = async () => {
          dispatch({ type: "FETCHING_API" });
          try {
            const response = await fetch(
              "https://playground.4geeks.com/apis/fake/contact/agenda/diegoguillen"
            );
            const dataJson = await response.json();
            console.log(state);
            dispatch({ type: "GET_CONTACTS", payload: dataJson });
            onShow(false);
          } catch (error) {
            console.log("Error Fetch");
          }
        };
        getApiInfo();
      });
  };
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      agenda_slug: "diegoguillen",
    });
  }

  console.log(formData);
  return (
    <>
      <div className="form">
        <div className="title">Edit Contact</div>
        <label className="labels">Full Name</label>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />
          <div className="" />
        </div>
        <label className="labels">Address</label>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <div className="" />
        </div>
        <label className="labels">Phone Number</label>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="" />
        </div>
        <label className="labels">Email Address</label>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="" />
        </div>

        <button type="text" className="update" onClick={handleClick}>
          Update
        </button>
        <button type="text" className="cancel" onClick={() => onShow(false)}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default Modal;
