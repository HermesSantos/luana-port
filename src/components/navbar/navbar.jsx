import { Navbar, Container, Nav } from "react-bootstrap"
export const TheNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/public/lf.png" alt="logo" height={35} style={{borderRadius: "10px"}} />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Início</Nav.Link>
          <Nav.Link href="#features">Sobre</Nav.Link>
          <Nav.Link href="#pricing">Trabalhos</Nav.Link>
          <Nav.Link href="#pricing">Contatos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}