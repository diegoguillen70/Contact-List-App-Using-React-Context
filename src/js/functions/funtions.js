export async function getApiInfo(url, callBack) {
  const response = await fetch(url);
  const dataJson = await response.json();
  console.log(dataJson);
  callBack(dataJson);
  //return dataJson;
  /*
return fetch(`https://playground.4geeks.com/apis/fake/todos/user/${username}`)
    .then(resp => {
        //console.log(resp.ok); // will be true if the response is successful
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        //console.log(resp.json); // will try return the exact result as string
        return resp.json(); 
        // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    }).then(data => {
        console.log(data)
})*/
}

export function deleteContact(url, id, callBack) {
  console.log(url + id);
  fetch(url + id, {
    method: "DELETE",
  })
    .then((resp) => {
      //console.log(resp.ok); // will be true if the response is successful
      console.log(resp.status); // the status code = 200 or code = 400 etc.
      //console.log(resp.json); // will try return the exact result as string
      return resp.json();
      // (returns promise) will try to parse the result as json as return a promise that you can .then for results
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

export function addContact(url, payload) {
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
      return resp.json();
      // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((dataJson) => {
      console.log(dataJson);
      //setList(dataJson);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateContact(url, id, payload) {
  fetch(url + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((resp) => {
      //console.log(resp.ok); // will be true if the response is successful
      console.log(resp.status); // the status code = 200 or code = 400 etc.
      //console.log(resp.json); // will try return the exact result as string
      return resp.json();
      // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteUserToDo(url) {
  fetch(url, {
    method: "DELETE",
  })
    .then((resp) => {
      //console.log(resp.ok);
      console.log(resp.status);
      //console.log(resp.json);
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
