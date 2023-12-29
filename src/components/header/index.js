import { React, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import "rbx/index.css";
import { Navbar, Button } from "rbx";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";


const Sidenav = () => {

  useEffect(() => {

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });
  }
  )

  const handleSetActive = (to) => {
    console.log(to);
  };


  return (
    <Navbar color="light" style={{ position: "fixed", width: '100%', top: 0, left: 0 }}>
      <Navbar.Brand>
        <Navbar.Item href="#">
          <Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-65}
            duration={800}

            onSetActive={handleSetActive}

          >
            <span style={{ color: "black" }}>Início</span>
          </Link>

        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          <Navbar.Item>
            <Link
              activeClass="active"
              to="profissional"
              spy={true}
              smooth={true}
              offset={-65}
              duration={800}

              onSetActive={handleSetActive}

            >
              <span style={{ color: "black" }}>Histórico profissional</span>

            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link
              activeClass="active"
              to="formacao"
              spy={true}
              smooth={true}
              offset={-65}
              duration={800}

              onSetActive={handleSetActive}

            >
              <span style={{ color: "black" }}>Formação acadêmica</span>
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link
              activeClass="active"
              to="competencias"
              spy={true}
              smooth={true}
              offset={-65}
              duration={800}

              onSetActive={handleSetActive}

            >
              <span style={{ color: "black" }}>Competências</span>

            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link
              activeClass="active"
              to="cursos"
              spy={true}
              smooth={true}
              offset={-65}
              duration={800}

              onSetActive={handleSetActive}

            >
              <span style={{ color: "black" }}>Cursos</span>
            </Link>
          </Navbar.Item>
          <Navbar.Item>

            <Link
              activeClass="active"
              to="projetos"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onSetActive={handleSetActive}
            >
              <span style={{ color: "black" }}>Projetos</span>
            </Link>

          </Navbar.Item>
        </Navbar.Segment>

       
      </Navbar.Menu>
    </Navbar>
  );
};

export default Sidenav;