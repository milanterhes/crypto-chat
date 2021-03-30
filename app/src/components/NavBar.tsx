import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import WaxLogo from "../assets/wax-logo.svg"

const NavBar = () => {
    return (
        <Navbar variant="dark" expand="lg" className="border-bottom">
            <Container>
                <Navbar.Brand>
                    <img
                        alt="logo"
                        src={WaxLogo}
                        className="d-inline-block align-top"
                    />{' '}
                    Crypto Chat
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;