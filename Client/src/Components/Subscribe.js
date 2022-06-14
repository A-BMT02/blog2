import React from 'react';
import { IoIosSend } from "react-icons/io" ; 
import "./Subscribe.css" ; 

export default function Subscribe() {
  return <div className="container wholeSubscribe">
      <div className="background">
        <div className="left">
            <div className="title">
                <h2>Newslettter Subscribe</h2>
            </div>
            <div className="content">
                <p>Recive updates on peoples progress as they navigate into tech</p>
            </div>
        </div>

        <div className="searchAndIcon">
            <div className="search">
            <input className="searchTxt" type="text" placeholder="Enter Your Email"/>
            </div>

            <div className="icon">
                <IoIosSend className="send"/>
            </div>
        </div>

      </div>
  </div>;
}
