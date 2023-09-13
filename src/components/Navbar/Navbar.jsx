import React,{useState} from 'react';
import './Navbar.scss';
import Toggle from './Toggle.jsx'

const Navbar = ()=>{
    const[acc,setacc]=useState(false);
    return (
        <>
        <div className="Navbar">
            <div className="contents">
                <div className="Nav-left">
                    <img src=".\public\logo.1white.png" alt=""/>
                </div>
                <div className="Nav-center">
                    <input type="text" placeholder="Search for the Service that you want? " className="searchbox"></input>
                    <button className="searchbtn">Search</button>

                

                </div>
                <div className="Nav-right">
                <i class="fa-regular fa-bell"></i>
                <i class="fa-regular fa-message"></i>
                <Toggle/>
                <i class="fa-solid fa-cart-shopping"></i>
                <div className="accname">Hey! vinay</div>
                <button className="acc" onClick={()=>setacc(true)}>V</button>

                </div>

            </div>
        </div>
        <div className={acc?"accsec":"nonesec"}>
            <button className="closesec" onClick={()=>{setacc(false)}}>X</button>

        </div>
        </>

    );
}
export default Navbar;