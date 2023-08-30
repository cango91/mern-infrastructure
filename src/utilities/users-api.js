import sendRequest from "./send-request";
const  BASE_URL = "/api/users";

export async function signUp(data){
    try {
        return sendRequest(BASE_URL,'POST',data);
    } catch (error) {
        throw new Error('Invalid sign up');
    }
}

export async function logIn(data){
    try {
        return sendRequest(`${BASE_URL}/login`,'POST',data);
    } catch (error) {
        throw new Error('Invalid login');
    }
}

export function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`)
}