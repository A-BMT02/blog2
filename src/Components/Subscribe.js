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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
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
