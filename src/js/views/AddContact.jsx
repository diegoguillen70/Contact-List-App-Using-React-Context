import React, { useState, useContext } from "react";
import { StoreContext } from "../store/Store";
import "../../styles/addContact.css";

const AddContact = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [formData, setFormData] = useState({
    address: "",
    agenda_slug: "",
    email: "",
    full_name: "",
    phone: "",
    //image: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    fetch("https://playground.4geeks.com/apis/fake/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        return resp.json();
        // (returns promise) will try to parse the result as json as return a promise that you can .then for results
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
          } catch (error) {
            console.log("Error Fetch");
          }
        };
        getApiInfo();
      })
      .catch((err) => {
        console.log(err);
      });
    setFormData({
      address: "",
      email: "",
      full_name: "",
      phone: "",
      //image: "",
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
