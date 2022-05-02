import logo from'../../image/1643633638_1-papik-pro-p-smeshnie-logotipi-1.png'

export function Header () {
 return(
     <header className="header-block">
        <img src={logo} alt="Pumba" className="header-logo"/>
        <ul>
            <li><a href>Home</a></li>
            <li><a href>About</a></li>
            <li><a href>Contact</a></li>
        </ul>
     </header>
 )

}