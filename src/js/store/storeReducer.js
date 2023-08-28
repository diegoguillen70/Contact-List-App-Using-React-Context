

export const initialState = [{
    address: "3290 Florida",
    agenda_slug: "Diego",
    email: "diego@mail.com",
    full_name: "Diego Guillen",
    id: 1,
    phone: "255-658980"
},{
    address: "3265 Georgia",
    agenda_slug: "Marilyn",
    email: "marilyn@mail.com",
    full_name: "Marilyn Hernandez",
    id: 2,
    phone: "255-658965"
}
];

const storeReducer = (state, action) => {
    const {type, payload} = action

        switch (type) {
            case "PUT_CONTACT":
                console.log("PUT_CONTACT", payload);
            return console.log(state);
            
            default:
                throw new Error('No case Match');
            }
}


export default storeReducer;