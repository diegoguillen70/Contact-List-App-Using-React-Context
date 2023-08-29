import { addContact } from "../functions/funtions";

export const initialState = [
  {
    address: "3290 Naples",
    agenda_slug: "diegoguillen",
    email: "diego@mail.com",
    full_name: "Diego Guillen",
    phone: "255-658980",
  },
];

const storeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      console.log(payload);
      addContact("https://playground.4geeks.com/apis/fake/contact/", payload);
      break;

    case "GET_CONTACT": {
      return payload;
    }
    default:
      throw new Error("No case Match");
  }
};

export default storeReducer;
