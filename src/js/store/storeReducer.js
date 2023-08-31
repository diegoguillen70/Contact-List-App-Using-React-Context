export const initialState = [
  {
    listContacts: {},
    loading: false,
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

    default:
      throw new Error("No case Match");
  }
}
