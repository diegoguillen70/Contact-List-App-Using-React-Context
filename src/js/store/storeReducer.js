export const initialState = [
  {
    address: "3290 Naples",
    agenda_slug: "Diego",
    email: "diego@mail.com",
    full_name: "Diego Guillen",
    id: 1,
    phone: "255-658980",
  },
  {
    address: "3265 Fort Myers",
    agenda_slug: "Marilyn",
    email: "marilyn@mail.com",
    full_name: "Marilyn Hernandez",
    id: 2,
    phone: "255-658965",
  },
];

const storeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PUT_CONTACT":
      console.log("PUT_CONTACT", payload);
      return console.log(state);

    case "GET_CONTACT": {
      return [payload];
      /*[
        ...state,
        getToDo(
          "https://playground.4geeks.com/apis/fake/contact/agenda/juana",
          state
        ).then((data) => data),
      ];*/
    }
    default:
      throw new Error("No case Match");
  }
};

async function getInfoAPI() {
  const response = await fetch(
    "https://playground.4geeks.com/apis/fake/contact/agenda/juana"
  );
  const dataJson = await response.json();
  console.log(dataJson);
  return dataJson;
}

export default storeReducer;
