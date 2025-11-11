import { Link } from 'react-router-dom'
import '../css/Sidenav.css'


export default function Sidenav (){
    return(
        <>
        
       
<div className="d-flex flex-column p-2  bg-dark  ">
    <ul className="nav nav-data pt-2 flex-column">
        <li className="nav-item pt-3 ">
            <Link href=""  >
                <i class="bi bi-menu-button-wide"  fs-6 ></i>
                <span className="fs-6 p-2">Dashboard</span>
            </Link>
        </li>
        <li className="nav-item pt-2 ">
            <Link to="/Home" >
                <i class="bi bi-house"  fs-6 ></i>
                <span className="fs-6 p-2">Home</span>
            </Link>
        </li>
         <li className="nav-item pt-2 ">
           <Link to="/Newproduct" >
                <i class="bi bi-boxes"  fs-6 ></i>
                <span className="fs-6 p-2">Products</span>
            </Link>
        </li>
         <li className="nav-item pt-2 ">
            <Link href="" >
                <i class="bi bi-box-seam"  fs-6 ></i>
                <span className="fs-6 p-2">Orders</span>
            </Link>
        </li>
        <li className="nav-item pt-2 ">
           <Link href="" >
                <i class="bi bi-person"  fs-6 ></i>
                <span className="fs-6 p-2">Customers</span>
            </Link>
        </li>
        <li className="nav-item pt-2 ">
            <Link href="" >
                <i class="bi bi-gear"  fs-6 ></i>
                <span className="fs-6 p-2">Settings</span>
            </Link>
        </li>
        
    </ul>
</div>





        </>
    )
}