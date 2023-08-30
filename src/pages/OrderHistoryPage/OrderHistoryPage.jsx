import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage(){
    async function handleClick(){
        const expDate = await checkToken();
        console.log(expDate);
    }
    return (
    <>
    <h1>Order History Page</h1>
    <button onClick={handleClick}>Check when my login expires</button>
    </> 
    );
}