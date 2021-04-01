import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import WaxLogo from "../../assets/wax-logo.svg"
import { FC, Fragment } from "react"

interface NavbarProps {
    isLoggedIn: Boolean;
    showModal: () => void;
    userName: string | null;
    logout: () => void;
}

const NavBar: FC<NavbarProps> = ({ isLoggedIn, showModal, userName, logout }) => {

    const renderLoginButton = () => {
        if (!isLoggedIn) {
            return (
                <Button variant="wax-orange" onClick={() => showModal()}>Login</Button>
            )
        }
        return null;
    }

    const renderUserInfo = () => {
        if (isLoggedIn) {
            return (
                <Fragment>
                    <Nav.Item>
                        <Navbar.Text>Hello, {userName}</Navbar.Text>
                    </Nav.Item>
                    <Nav.Item>
                        <Button variant="wax-orange" className="ml-sm-2" onClick={() => logout()}>Logout</Button>
                    </Nav.Item>
                </Fragment>
            )
        }
        return null;
    }

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
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        {renderLoginButton()}
                        {renderUserInfo()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;