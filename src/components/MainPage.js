import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Navpage from  './navpage';
const MainPages=()=>{
    return(
        <>
        <section>
            <div>
                <Navbar/>
            </div>
        </section>
        <section>
            <div className='sidemainclass'>
                <div className='side2'>
                    <Sidebar/>
                </div>
                <div className='side3'>
                    <Navpage/>
                </div>
            </div>
        </section>
        </>
       
    )
}
export default MainPages