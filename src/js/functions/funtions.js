

export async function getToDo(username, setList){
    const response = await fetch(`https://playground.4geeks.com/apis/fake/todos/user/${username}`) 
    const dataJson = await response.json();
    setList(dataJson);


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

export function putToDo(username, list){
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/${username}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(list)
})
    .then(resp => {       
        //console.log(resp.ok); // will be true if the response is successful
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        //console.log(resp.json); // will try return the exact result as string
        return resp.json(); 
        // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(dataJson => {
        console.log(dataJson);
        //setList(dataJson);
    })
    .catch(err => {
        console.log(err);
    });    
}

export function createUserToDo(username){
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/${username}`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify([])
})
    .then(resp => {
        //console.log(resp.ok); // will be true if the response is successful
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        //console.log(resp.json); // will try return the exact result as string
        return resp.json(); 
        // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        console.log(data[0]);
    })
    .catch( error => {
        console.error('Username is already on the list');
    })   
}

export function deleteUserToDo(username){
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/${username}`, {
        method: 'DELETE',      
})
    .then(resp => {
        //console.log(resp.ok); 
        console.log(resp.status);
        //console.log(resp.json);
        return resp.json(); 
        
    })
    .then(data => {
        console.log(data);
    })
    .catch( error => {
        console.error('Username is not found');
    })   
}  