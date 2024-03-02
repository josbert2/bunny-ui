import React from "react";

function BgGradient() {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full min-h-screen">
            <div className="absolute w-full h-full ">
                
            </div>
     
            <div className="absolute inset-0 bg-[url('https://play.tailwindcss.com/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
    );
}


export default BgGradient;