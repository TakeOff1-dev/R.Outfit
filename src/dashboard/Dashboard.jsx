import { useEffect, useState } from 'react'
import Sidenav from '../dashboard/Sidenav'
import Newproduct from '../dashboard/Newproduct';
import Home from '../dashboard/Home'

export default function Dashboard (){

    const [page, setPage] = useState('')
    useEffect(()=>{
        setPage(window.location.pathname);
    },[window.location.pathname])
    return(
        <>
       

<div className="d-flex">
    <div className="col-auto">
        <Sidenav />
        </div>
        <div className='p-5'>
          {
             
            page === '/Dashboard/Newproduct' ? <Newproduct /> :
            <div>404</div>
          }
        </div>
</div>


        </>
        
    )
}

