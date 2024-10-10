import React from "react";
import { social } from "../data/data";

function Socials() {
  return (
    <ul className="social-icons">
      {social.map((socialIcon) => {
        return (
          <li key={socialIcon.id}>
            <a href={socialIcon.url}>{socialIcon.icon}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Socials;