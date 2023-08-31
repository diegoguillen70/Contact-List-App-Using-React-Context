import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../store/Store.js";
import { updateContact } from "../functions/funtions.js";

const Modal = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [formData, setFormData] = useState({
    address: "",
    agenda_slug: "diegoguillen",
    email: "",
    full_name: "",
    phone: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
    updateContact(
      "https://playground.4geeks.com/apis/fake/contact/",
      state.id,
      formData,
      dispatch
    );
    //dispatch({ type: "UPDATE_CONTACT", payload: formData });
    console.log(state);
  };
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      agenda_slug: "diegoguillen",
    });
  }

  //console.log(state);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Contact
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Phone
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => handleClick(e)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
