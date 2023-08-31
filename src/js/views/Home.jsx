import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { StoreContext } from "../store/Store";
import { getApiInfo, deleteContact } from "../functions/funtions.js";
import Modal from "../component/Modal.jsx";

const Home = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [resultFetch, setResultFetch] = useState(null);
  useEffect(() => {
    getApiInfo(
      "https://playground.4geeks.com/apis/fake/contact/agenda/diegoguillen",
      setResultFetch
    );
  }, []);

  useEffect(() => {
    if (resultFetch) {
      //const data = resultFetch;
      //dispatch({ type: "GET_CONTACT", payload: data });
    }
  }, [resultFetch]);

  function handleDeleteContact(index) {
    console.log(index);
    deleteContact(
      "https://playground.4geeks.com/apis/fake/contact/",
      index,
      setResultFetch
    );
  }

  //console.log(state);
  return (
    <>
      {resultFetch &&
        resultFetch.map((element, index) => {
          return (
            <div key={index} className="row d-flex justify-content-center mt-5">
              <div className="col-6 col-sm-6">
                <div className="list list-row block">
                  <div
                    className="list-item d-flex justify-content-between"
                    style={{ height: "200px" }}
                  >
                    <span className="w-25 avatar gd-warning ">
                      <img
                        src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000"
                        alt=""
                      />
                    </span>
                    <div className="d-flex flex-column me-auto">
                      <span>{element.full_name}</span>

                      <span>
                        <i className="fa-solid fa-location-dot me-2 mt-2"></i>
                        {element.address}
                      </span>

                      <span>
                        <i className="fa-solid fa-phone-flip me-2 mt-2"></i>
                        {element.phone}
                      </span>

                      <span>
                        <i className="fa-solid fa-envelope me-2 mt-2"></i>
                        {element.email}
                      </span>
                    </div>
                    <div className="d-flex">
                      <i
                        className="fa-solid fa-pencil ms-2 fs-4"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() =>
                          dispatch({ type: "HOLD_USER", payload: element })
                        }
                      ></i>
                      <i
                        className="fa-solid fa-trash-can ms-2 fs-4"
                        onClick={() =>
                          confirm("Are you sure???") &&
                          handleDeleteContact(element.id)
                        }
                      ></i>
                      <Modal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      <style>{`body{background-color: rgb(204, 230, 255);}`}</style>
    </>
  );
};

export default Home;
