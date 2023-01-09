import React from "react";

const NavLinks = () => {
    const Links=[
        {
            name:'Home',
            link:"/",
        },
        {
            name:'Location',
            link:"/",
        },
        {
            name:'About',
            link:"/",
        },
        {
            name:'Blog',
            link:"/",
        },
        {
            name:'Contact',
            link:"/",
        },
    ]
  return (
    <>
        {Links.map((link,i)=>(
            <li key={i}>
                <a href={link.link} className="font-semibold hover:text-primary">
                    {link.name}
                </a>
            </li>
        ))}
    </>
    )
};

export default NavLinks;
