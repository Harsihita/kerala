import React from "react"
import { useState,useEffect } from "react";

export default function Goto() {
    const [isVisible, setIsVisible] = useState(false);

    const gotobtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
    
        if (winScroll > heightToHidden) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
      }, []);
    return (
        <div className="wrapper">
            
            <div className="scrool-btn" onClick={gotobtn}>
            <i class="fa-solid fa-arrow-up fa-bounce"></i>
            </div>
            
        </div>

    )
}
