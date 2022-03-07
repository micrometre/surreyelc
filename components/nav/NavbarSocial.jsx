import Image from 'next/image'
import Link from "next/link";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../../data/social-data";
import { FaPhone} from 'react-icons/fa'
function NavBarPhones( ) {
   const socialIconStyles = {fontSize: "2.7em",color: "white"};
 return (
<>
   {data.map((e, i) => {
     return (
    <div className="socialdiv" key={i}>
       {e.socialLinks.map((e, i) => {
         return (
      <a style={socialIconStyles} href={e.href} key={i}  title={e.title}>
        <e.icons className={socialIconStyles} />
           </a>
         );
      })}
       </div>
     );
    })}
            <style jsx>{`
.socialdiv {
width: 100%;
display: flex;
justify-content: space-evenly;
background-color: #6c757d;
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 1030;
padding: 0rem;
margin-bottom: 1rem;
}

socialdiv::-webkit-justify-content {
  background: #1e1e24;
}


.socialdiv:hover {
background: green;
}
@media (max-width: 990px) {
.socialdiv {
    font-size: 0.8rem;
    }
}

`}</style>
    </>
  );
};

export default NavBarPhones;
