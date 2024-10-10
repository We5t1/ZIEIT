import React from "react";
import { links } from "../data/data";

function Sidebar() {
  if (!Array.isArray(links)) {
    console.error("links is not an array:", links);
    return null; 
  }

  return (
    <ul className="links">
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;