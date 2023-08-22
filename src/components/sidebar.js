import React from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
    return (
        <>
            <section>
                <div className='side'>
                            <br></br>
                            <Link to="/">HOME</Link> 
                        <br></br>
                        <br></br>
                        <br></br>
                    
                            <Link to="/romantonumeral">ROMAN-NUMERAL</Link> 
                        <br></br>
                        <br></br>
                        <br></br>
                        
                            <Link to="/numeraltoroman">NUMERAL-ROMAN</Link>    
                </div>
            </section>
        </>
    );
}

export default Sidebar;
