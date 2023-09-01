import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { StoreContext } from "../store/Store";
import Modal from "../component/Modal.jsx";
//"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000"
const Home = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [isShowModal, setIsShowModal] = useState(false);
  const { listContacts, loading, error } = state;
  useEffect(() => {
    //dispatch({ type: "GET_CONTACTS", payload: state });
    const getApiInfo = async () => {
      dispatch({ type: "FETCHING_API" });
      try {
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/diegoguillen"
        );
        const dataJson = await response.json();
        //console.log(state);
        dispatch({ type: "GET_CONTACTS", payload: dataJson });
      } catch (error) {
        console.log("Error Fetch");
      }
    };
    getApiInfo();
  }, []);

  function handleDeleteContact(id) {
    dispatch({ type: "FETCHING_API" });
    console.log("https://playground.4geeks.com/apis/fake/contact/" + id);

    fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
      method: "DELETE",
    })
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
          } catch (error) {
            console.log("Error Fetch");
          }
        };
        getApiInfo();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function showModal(element) {
    dispatch({ type: "GET_CURRENT_CONTACT", payload: element });
    setIsShowModal(true);
  }

  return (
    <>
      {}
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="home-container">
          {isShowModal && <Modal onShow={setIsShowModal} />}
          {listContacts &&
            listContacts.map((element, index) => {
              return (
                <div
                  key={index}
                  className="row d-flex justify-content-center mt-5"
                >
                  <div className="col-6 col-sm-6">
                    <div className="list list-row block">
                      <div
                        className="list-item d-flex justify-content-between"
                        style={{ height: "200px" }}
                      >
                        <span>
                          <img
                            src="https://camo.githubusercontent.com/eb6a385e0a1f0f787d72c0b0e0275bc4516a261b96a749f1cd1aa4cb8736daba/68747470733a2f2f612e736c61636b2d656467652e636f6d2f64663130642f696d672f617661746172732f6176615f303032322d3531322e706e67"
                            alt=""
                            style={{ height: "200px" }}
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
                            onClick={() => showModal(element)}
                          ></i>
                          <i
                            className="fa-solid fa-trash-can ms-2 fs-4"
                            onClick={() =>
                              confirm("Are you sure???") &&
                              handleDeleteContact(element.id)
                            }
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      <style>{`body{background-color: rgb(204, 230, 255);}`}</style>
    </>
  );
};

export default Home;
