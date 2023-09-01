export const initialState = [
  {
    listContacts: {},
    loading: false,
    contactSelect: [],
  },
];

export function storeReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "FETCHING_API": {
      return {
        ...state,
        loading: true,
      };
    }
    case "ADD_CONTACT": {
      return {
        listContacts: { state, payload },
        loading: false,
      };
    }

    case "GET_CONTACTS": {
      return {
        listContacts: payload,
        loading: false,
      };
    }

    case "UPDATE_CONTACT": {
      return {
        ...state,
        loading: false,
      };
    }

    case "GET_CURRENT_CONTACT": {
      return {
        ...state,
        contactSelect: payload,
      };
    }

    default:
      throw new Error("No case Match");
  }
}
