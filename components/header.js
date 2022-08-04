import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
    <div>
      <div class="header">
        <a href="#" class='logo-a'>
          <img class="h-8 w-auto sm:h-10 img-w" src="/resources/images/examine_logo.png" alt="logo"/>
        </a>
        <div class='flex search-input'>
          <img src="/resources/images/search.png" />
          <input type='text'placeholder="What do you want to learn about?"/>
        </div>
        <div id="menubar" class='nav nav-initial'>
          <ul class='nav-list flex'>
            <li class='nav-items'>
              <Link href="/login">
                <a href="#">Login</a>
              </Link>
            </li>
            <li class='nav-items'>
              <Link href={"/"}>
                <a href="#" class='sign-up'>Sign up</a>
              </Link>
            </li>
            <li class='nav-items'>
              <a href="#">Categories</a>
            </li>
            <li class='nav-items'>
              <a href="#">Conditions</a>
            </li>
            <li class='nav-items'>
              <a href="#">Interventions</a>
            </li>
            <li class='nav-items'>
              <a href="#">Outcomes</a>
            </li>
            <li class='nav-items'>
              <a href="#">Membership</a>
            </li>
            <li class='nav-items'>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>

        <div class='toggle-menu' onClick={handleClick} >
          <span id="faBars"><FontAwesomeIcon icon={faBars} style={{ fontSize: 18, color: "black" }} /></span>
          <span id="faTimes" style={{ display: "none" }}><FontAwesomeIcon icon={faTimes} style={{ fontSize: 18, color: "black" }} /></span>
        </div>
      </div>
      <div class='res-mobile--header'>
        <div class='flex menu-items items-center justify-between'>
          <div class='flex items-center'>
            <span id="faBars"><FontAwesomeIcon icon={faBars} style={{ fontSize: 18, color: "white", background: "#826595", padding: "8px", borderRadius: "4px" }} /></span>
            <img class="h-8 w-auto sm:h-10 responsive-logo" src="/resources/images/examine_logo_white.png" alt="logo"/>
          </div>
          <span id="faBars"><FontAwesomeIcon icon={faSearch} style={{ fontSize: 18, color: "white", }} /></span>
        </div>
      </div>
    </div>
  );
}

let toggle = false;
const handleClick = (e) =>  {
  toggle = !toggle;
  document.getElementById("faBars").style.display= "none";
  document.getElementById("faTimes").style.display= "none";
  if(toggle) {
    document.getElementById("faTimes").style.display= "block";
    document.getElementById("menubar").classList.remove("nav-initial");
  } else {
    document.getElementById("faBars").style.display= "block";
    document.getElementById("menubar").classList.add("nav-initial");
  }
}