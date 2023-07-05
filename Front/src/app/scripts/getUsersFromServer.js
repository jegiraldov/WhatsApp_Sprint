const URL_API = 'http://localhost:5000/usuarios'

const getUsersFromServer = async () =>{
    const response = await fetch (URL_API);

    const data = await response.json();
    
}

