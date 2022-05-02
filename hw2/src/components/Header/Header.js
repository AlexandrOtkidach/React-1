import logo from'../../image/1643633638_1-papik-pro-p-smeshnie-logotipi-1.png'

export function Header () {
 return(
     <header className="header-block">
        <img src={logo} alt="Pumba" className="header-logo"/>
        <ul>
            <li><a href="google.com">Home</a></li>
            <li><a href="google.com">About</a></li>
            <li><a href="google.com">Contact</a></li>
        </ul>
     </header>
 )
}