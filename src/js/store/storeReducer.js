import {
  addContact,
  deleteContact,
  updateContact,
} from "../functions/funtions";

export const initialState = [
  {
    address: "3290 Naples",
    agenda_slug: "diegoguillen",
    email: "diego@mail.com",
    full_name: "Diego Guillen",
    phone: "255-658980",
  },
];

function storeReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      console.log(payload);
      return payload;

    case "HOLD_USER": {
      console.log(payload);
      return payload;
    }
    case "UPDATE_CONTACT": {
      console.log(payload);
      return payload;
    }

    case "DELETE_CONTACT": {
      deleteContact(
        "https://playground.4geeks.com/apis/fake/contact/" + payload.id
      );
      break;
    }

    default:
      throw new Error("No case Match");
  }
}

export default storeReducer;
