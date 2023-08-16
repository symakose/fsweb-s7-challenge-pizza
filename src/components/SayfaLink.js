import React from "react";
import { NavLink } from "react-router-dom/";

function SayfaLink() {
  return (
    <div>
      <nav>
        <ul className="sayfalinks">
          <li>
            <NavLink to={"/"}> Anasayfa </NavLink>
          </li>
          <p> - </p>
          <li>
            <NavLink to={"/pizza"}> Seçenekler </NavLink>
          </li>
          <p> - </p>

          <li>
            <NavLink
              to={"/pizza"}
              style={(isActive) => (isActive ? activeNavLink : null)}
            >
              Sipariş Oluştur
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default SayfaLink;
