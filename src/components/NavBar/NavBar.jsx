import {logOut} from '../../utilities/users-service'
import { Link } from "react-router-dom"

export default function NavBar({user, setUser}){

    function handleLogout(){
        logOut();
        setUser(null);
    }

    return (<nav>
        {user ? `Welcome, ${user.name} @ ${user.email} ` : ''}
        <br />
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogout}>Logout</Link>
    </nav>);
}