import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { StoreContext } from "../store/Store";

const Home = () => {
  const [state, dispatch] = useContext(StoreContext);
  //console.log(state);
  return (
    <>
      {state.map((element, index) => {
        return (
          <div key={index} className="row d-flex justify-content-center mt-5">
            <div className="col-6 col-sm-6">
              <div className="list list-row block">
                <div className="list-item d-flex" style={{ height: "200px" }}>
                  <span className="w-25 avatar gd-warning">
                    <img
                      src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000"
                      alt=""
                    />
                  </span>
                  <div className="d-flex flex-column">
                    <span>{element.full_name}</span>
                    <div className="item-except text-muted text-sm h-1x">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>{element.address}</span>
                      <i className="fa-solid fa-phone-flip"></i>
                      <span>{element.phone}</span>
                      <i className="fa-solid fa-envelope"></i>
                      <span>{element.phone}</span>
                    </div>
                  </div>
                  <div className="no-wrap">
                    <div className="d-flex">
                      <i className="fa-solid fa-pencil"></i>
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
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
