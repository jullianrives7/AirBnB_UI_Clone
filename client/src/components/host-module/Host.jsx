import React from 'react'
import {AiFillStar} from'react-icons/all'
import {HiShieldCheck} from'react-icons/hi'
import {GiMedal} from'react-icons/all'
import Button from "react-bootstrap/Button";
import {TbBrandAirbnb} from'react-icons/all';
import { useContext } from "react";
import { appContext } from "../../App";
function Host() {
    const {showLogInModal,setShowLogInModal  } = useContext(appContext);

    const handleShow = () => {
        setShowLogInModal(true);
      };
  return (
    <>
    <div id='host'>
        <div id='host-information'>
            <img id='profile' style={{height:'64px',width:'64px'}}
            src='https://a0.muscache.com/im/pictures/user/22630b23-75df-4bf5-ac66-0a9f335c3fa7.jpg?aki_policy=profile_large'>
            </img>
            <div style={{marginLeft:'20px'}}>
            <h4> Hosted by Alina</h4>
            <a style={{fontSize:'14px'}}> Joined in June 2016</a>
            </div>
            </div>
    </div>
   
    <div id='detail'>
        <div id='column-1'>
        <div id='host-icon'>
            <AiFillStar/> 1,227 Reviews
            <HiShieldCheck /> Indentity verified
            <GiMedal/> Superhost
        </div>
            <p>Nature loving, outdoorsy, happy, outgoing, fun-loving
             lady. Love to travel and meet new people. Feel so 
             blessed to live where I do, just want to share with 
            others. Hope to meet you soon.</p>
            <h6>During your stay</h6>
            <p>We are about 1/8th mile from the residence
            (you can barely see us through the trees) 
            if you need any assistance.</p>
            <h6>Alina is a Superhost</h6>
            <a>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</a>
        </div>
        <div id='column-2' >
        <p>Response rate: 100%</p>
        <p>Response time: within an hour</p>
        <Button
          onClick={handleShow}
          id="contact-btn1"
          variant="light"
          >Contact Host
        </Button>
        <div>
        <TbBrandAirbnb/> To protect your payment, never tranfert money or communicate outside of the Airbnb website or app
        </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Host