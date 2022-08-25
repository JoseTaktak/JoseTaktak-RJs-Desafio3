import logo from "./Image/MF-logo.jpg";
import "../App.css"

const NavBar = () => {
  return (
    <header>
      <h1><img src={logo} alt="logo" /> </h1>
      <ul className='BtnCenter'>
          <button> Nosotros</button>
          <button> Productos</button>
          <button> Contacto</button>
      </ul>
      <div className='BtnRight'>

      
      <button>Login</button>
      </div> 
        
    </header>
  );
}

export default NavBar;
