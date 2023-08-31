export async function getApiInfo(url, callBack) {
  const response = await fetch(url);
  const dataJson = await response.json();
  console.log(dataJson);
  callBack(dataJson);
}

export function deleteContact(url, id, callBack) {
  console.log(url + id);
  fetch(url + id, {
    method: "DELETE",
  })
    .then((resp) => {
      console.log(resp.status); // the status code = 200 or code = 400 etc.

      return resp.json();
    })
    .then(
      (dataJson) =>
        dataJson.msg == "Contact deleted successfully" &&
        getApiInfo(url + "agenda/diegoguillen", callBack)
    )
    .catch((err) => {
      console.log(err);
    });
}

export function addContact(url, payload, callBack) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((resp) => {
      //console.log(resp.ok); // will be true if the response is successful
      console.log(resp.status); // the status code = 200 or code = 400 etc.
      //console.log(resp.json); // will try return the exact result as string
      callBack({ type: "ADD_CONTACT", payload: payload });
      return resp.json();
      // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((dataJson) => dataJson)
    .catch((err) => {
      console.log(err);
    });
}

export function updateContact(url, id, payload, callBack) {
  console.log(url + id);
  fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((resp) => {
      console.log(resp.status); // the status code = 200 or code = 400 etc.
      callBack({ type: "UPDATE_CONTACT", payload: payload });
    })
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
}
