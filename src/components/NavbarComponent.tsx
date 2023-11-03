import { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";

import { logout, changeCompany } from '../services/user.services';
import araucanaLogo from '../assets/img/araucana-logo.png'
import menuIcon from '../assets/img/menu-icon.svg'
import cardBlue from '../assets/img/card-blue.svg'
import clipboardBlue from '../assets/img/clipboard-blue.svg'
import fileBlue from '../assets/img/file-blue.svg'
import medicalBlue from '../assets/img/medical-blue.svg'
import userBlue from '../assets/img/user-blue.svg'

import userWhite from '../assets/img/user-white.svg'
import changeRings from '../assets/img/change-rings.svg'
import logoutRings from '../assets/img/logout-rings.svg'
import passwordRings from '../assets/img/password-rings.svg'
import userCogRings from '../assets/img/user-cog-rings.svg'
import userRings from '../assets/img/user-rings.svg'

import creditosLogo from '../assets/img/creditos-logo.svg';
import licenciasLogo from '../assets/img/licencias-logo.svg';
import asignacionLogo from '../assets/img/asignacion-logo.svg';
import certificadosLogo from '../assets/img/certficados-logo.svg';
import cotizacionesLogo from '../assets/img/cotizaciones-logo.svg'

import CambiaClaveModal from './CambiaClaveModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarMenu from './NavbarMenu';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { makeStyles } from '@material-ui/core/styles';


export default function NavbarComponent() {
  const [menuVisible, setMenuVisible] = useState(false);

  const [dynamicMenuVisible, setDynamicMenuVisible] = useState(false);

  const [userMobileVisible, setUserMobileVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const [userMobile, setShowUserMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [userMenu, setShowUserMenu] = useState(false);
  const [empresa, setEmpresa] = useState('')
  const [empresaRut, setEmpresaRut] = useState('')
  const [rotate, setRotate] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const handleButtonClick = () => {
    setShowUserMobile(!userMobile);
    setRotate(!rotate);
  };

  const notifyPwChanged = () => toast.success("Clave cambiada con exito", {
    hideProgressBar: true,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
      <path d="M22.5 3.75C12.15 3.75 3.75 12.15 3.75 22.5C3.75 32.85 12.15 41.25 22.5 41.25C32.85 41.25 41.25 32.85 41.25 22.5C41.25 12.15 32.85 3.75 22.5 3.75ZM22.5 37.5C14.2313 37.5 7.5 30.7687 7.5 22.5C7.5 14.2313 14.2313 7.5 22.5 7.5C30.7687 7.5 37.5 14.2313 37.5 22.5C37.5 30.7687 30.7687 37.5 22.5 37.5ZM31.1063 14.2125L18.75 26.5688L13.8937 21.7313L11.25 24.375L18.75 31.875L33.75 16.875L31.1063 14.2125Z" fill="#0A8200" />
    </svg>,
    theme: "colored",
  });

  useEffect(() => {
    const empresa = sessionStorage.getItem('empresa')
    const empresaRut = sessionStorage.getItem('empresaRut')
    setDynamicMenuVisible(false)
    if (true) {
      setEmpresa(empresa)
      setEmpresaRut(empresaRut)
    } else {
    }

  }
    , [])

  function cerrarSesion() {
    logout();
  }

  return (
    <>
      <nav className="bg-white b-orange content-center align-middle w-full">
        <div className="w-full sm:p-0 lg:px-2">
          <div className="flex items-center justify-between sm:justify-center md:justify-center lg:justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 hidden lg:inline ">
                <img className="h-8 w-auto" src={araucanaLogo} alt="La Araucana" />
              </div>
              <div className="h-16 hidden lg:block">
                <div className="ml-10 h-full flex align-middle items-center space-x-4">
                  <a
                    onClick={() => setDynamicMenuVisible(!dynamicMenuVisible)}
                    className="bg-azul_araucana text-white focus:outline-none h-full px-4 py-5 text-sm font-medium cursor-pointer flex items-center"
                  >
                    <img src={menuIcon} alt="Menú" className="mr-2" />
                    Menú
                  </a>

                  <p className="cursor-default">
                    <span className="font-poppins-thin text-azul_araucana text-xl">Portal</span>
                    <span className="font-poppins text-azul_araucana text-xl"> Empresas</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Desktop */}
            <div className="w-full flex justify-center items-center hidden sm:hidden md:hidden lg:block lg:w-1/3">
              <div className="flex items-center h-16 md:justify-center lg:justify-end ">
                <button
                  className="px-2 pr-6 pt-6 align-middle bg-white text-azul_araucana focus:outline-none lg:hidden h-16 flex flex-col items-center"
                  onClick={() => setOpen(!open)}
                  aria-label="Open menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button
                  className="px-4 py-2 pl-8 sm:pl-8 md:pl-8 lg:pl-4 bg-white text-azul_araucana hover:bg-blue-100 focus:outline-none h-16 flex flex-col items-center
                  whitespace-nowrap"
                  onClick={() => {
                    changeCompany()
                  }}
                >
                  <span className="font-poppins-thin text-sm">{empresaRut}</span>
                  <span className="font-poppins text-sm">
                    <span className="icon-change pr-1" />{empresa}</span>

                </button>
                <button
                  className="pl-4 bg-white p-1 text-azul_araucana hover:bg-blue-100 focus:outline-none h-16 
                  flex flex-col items-center hidden lg:block md:hidden sm:hidden whitespace-nowrap"
                  onClick={() => setShowUserMenu(!userMenu)}
                >
                  <span className="font-poppins-thin text-sm">¡Hola!</span>
                  <br />
                  <span className="font-poppins text-sm">Juan Pérez
                    <span className="pl-2 icon-open-down text-xs"></span>
                  </span>
                </button>
              </div>
            </div>
            {/* Mobile */}
            <div className="flex items-center w-full justify-center h-16 sm:flex-wrap md:flex-wrap lg:hidden ">
              <div className="w-4/6 justify-start h-16 flex items-center">
                <img className="h-9 w-auto ml-4" src={araucanaLogo} alt="La Araucana" />
              </div>
              <div className="w-2/6 justify-end flex text-center h-16 items-center">
                <button
                  className="bg-azul_araucana text-white focus:outline-none h-14 w-14 py-4 text-sm font-medium cursor-pointer mr-2"
                  onClick={handleButtonClick}
                >
                  <img src={menuIcon} alt="Menú" className='mx-auto' />
                  <span className="font-poppins-thin text-xs text-center">Menú</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu - Main menu */}
        {open && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-100 text-azul_araucana">
              <ul className="flex flex-col space-y-4 text-center">
                <li className="p-2 m-1 text-azul_araucana rounded hover:bg-azul_araucana hover:text-white">Inicio</li>
                <li className="p-2 m-1 text-azul_araucana rounded hover:bg-azul_araucana hover:text-white">Créditos</li>
                <li className="p-2 m-1 text-azul_araucana rounded hover:bg-azul_araucana hover:text-white">Licencias médicas</li>
                <li className="p-2 m-1 text-azul_araucana rounded hover:bg-azul_araucana hover:text-white">Certificados</li>
                <li className="p-2 m-1 text-azul_araucana rounded hover:bg-azul_araucana hover:text-white">Cotizaciones</li>
              </ul>
            </div>
          </div>
          /* Mobile menu - User menu */
        )}

        {/* Mobile menu - User menu */}
        {userMobile && (
          <div className="lg:hidden bg-white fixed inset-0 z-20 h-screen">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-azul_araucana">
              <div className="p-4 flex items-center justify-center">
                <img src={araucanaLogo} alt="" className="w-40" />
                <span onClick={handleButtonClick} className="icon-close-blue text-xl pr-8 absolute right-0"></span>
              </div>
              <div className="w-full flex justify-center items-center h-12 bg-azul_araucana">
                <div className="w-1/6 flex justify-center">
                  <div className="mr-2">
                    <img src={userWhite} alt="User" className="h-9" />
                  </div>
                </div>
                <div className="w-2/6 flex justify-center b-right-orange">
                  <span className="text-white font-light text-sm">Juan Pérez </span>
                </div>
                <div className="w-2/6 flex justify-center">
                  <span className="text-white font-light text-sm">
                    {empresa}
                  </span>

                </div>
                <div className="w-1/6 flex justify-center"
                  onClick={() => setUserMobileVisible(!userMobileVisible)}>
                  {!userMobileVisible && (
                    <span className="icon-chevron-right text-sm"></span>
                  )}
                  {userMobileVisible && (
                    <span className="icon-chevron-left text-sm"></span>
                  )}
                </div>
              </div>

              {!userMobileVisible && (
                <div>
                  <Fade direction="left">
                    <Accordion className="border-none shadow-none" >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                      >
                        <Typography>
                          <div className="flex items-center">
                              <img src={creditosLogo} alt="" className="mobile-icon mr-2" />
                            <span className="font-extralight text-md text-azul_araucana">
                              Créditos
                            </span>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <span className="text-azul_araucana" onClick={() => window.location.replace('http://localhost:9000/credito/carga-financiera')}>Estado Carga Financiera</span>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="border-none shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                      >
                        <Typography>
                          <div className="flex items-center">
                              <img src={licenciasLogo} alt="" className="mobile-icon mr-2" />
                            <span className="font-extralight text-md text-azul_araucana" onClick={() => window.location.replace('http://localhost:9000/licencias')}>
                              Licencias médicas
                            </span>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <span className="text-azul_araucana">Estado Licencias Medicas</span>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="border-none shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                      >
                        <Typography>
                          <div className="flex items-center">
                              <img src={asignacionLogo} alt="" className="mobile-icon mr-2" />
                            <span className="font-extralight text-md text-azul_araucana">
                              Asignación Familiar
                            </span>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <span className="text-azul_araucana">Contenido del acordeón</span>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="border-none shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                      >
                        <Typography>
                          <div className="flex items-center">
                              <img src={certificadosLogo} alt="" className="mobile-icon mr-2" />
                            <span className="font-extralight text-md text-azul_araucana">
                              Certificados
                            </span>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className="flex flex-col items-center text-left">
                            <p className="text-azul_araucana my-2 font-light">Certificado Asignación Familiar</p>
                            <p className="text-azul_araucana my-2 font-light">Certificado Afiliación</p>
                            <p className="text-azul_araucana my-2 font-light">Certificado Licencias Médicas</p>
                            <p className="text-azul_araucana my-2 font-light">Certificado Créditos Vigentes</p>
                            <p className="text-azul_araucana my-2 font-light">Certificado Deuda Previsional</p>
                            <p className="text-azul_araucana my-2 font-light">Certificado Deudas Pagadas</p>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="border-none shadow-none">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                      >
                        <Typography>
                          <div className="flex items-center">
                              <img src={cotizacionesLogo} alt="" className="mobile-icon mr-2" />
                            <span className="font-extralight text-md text-azul_araucana">
                              Cotizaciones
                            </span>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <span className="text-azul_araucana">Contenido del acordeón</span>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Fade>


                </div>
              )}

              {userMobileVisible && (
                <div>
                  <Fade direction="right">
                    <ul className="flex flex-col items-start text-start">
                      <li className="w-full p-2 mt-1 text-start cursor-pointer rounded hover:bg-azul_araucana hover:text-white"
                      onClick={() => { window.location.replace("http://localhost:9000/test") }}>
                        <img src={userRings} alt="User" className="h-9 inline-block mr-3" /> Mis datos
                      </li>
                      <li className="w-full p-2 mt-1 text-start cursor-pointer rounded hover:bg-azul_araucana hover:text-white">
                        <img src={changeRings} alt="User" className="h-9 inline-block mr-3" /> Cambio de empresa
                      </li>
                      <li className="w-full p-2 mt-1 text-start cursor-pointer rounded hover-bg-azul_araucana hover-text-white" onClick={() => { setShowUserMobile(false); setShowModal(true); }}>
                        <img src={passwordRings} alt="Password" className="h-9 inline-block mr-3" /> Cambiar clave
                      </li>
                      <li className="w-full p-2 mt-1 text-start cursor-pointer rounded hover-bg-azul_araucana hover-text-white" onClick={() => window.location.replace('http://localhost:9000/admin-usuarios')}>
                        <img src={userCogRings} alt="Admin" className="h-9 inline-block mr-3" /> Administrar usuarios
                      </li>
                      <li className="w-full p-2 mt-1 text-start cursor-pointer rounded hover-bg-azul_araucana hover-text-white" onClick={() => cerrarSesion()}>
                        <img src={logoutRings} alt="Logout" className="h-9 inline-block mr-3" /> Cerrar sesión
                      </li>
                    </ul>
                  </Fade>

                </div>
              )}



            </div>
          </div>
        )}
      </nav>
      {/* Desktop menu - User menu */}
      <div className="hidden md:block sm:block sm:w-full fixed top-0 right-0 z-50">
        {userMenu && (
          <div className="bg-blue-100 text-azul_araucana absolute rounded top-16 right-0 w-1/6 p-4 hidden lg:block md:hidden sm:hidden mt-1">
            <ul className="flex flex-col space-y-4">
              <li className="p-2 m-1 text-left cursor-pointer rounded hover:bg-azul_araucana hover:text-white"
                onClick={() => { window.location.replace("http://localhost:9000/test") }}>
                <span className="icon-user pr-2"></span>Mis datos</li>
              <li className="p-2 m-1 text-left cursor-pointer rounded hover:bg-azul_araucana hover:text-white">
                <span className="icon-change pr-2"></span>Cambio de empresa</li>
              <li className="p-2 m-1 text-left cursor-pointer rounded hover:bg-azul_araucana hover:text-white" onClick={() => {
                setShowUserMenu(false)
                setShowModal(true)
              }}>
                <span className="icon-lock pr-2"></span>Cambiar clave</li>
              <li className="p-2 m-1 text-left cursor-pointer rounded hover:bg-azul_araucana hover:text-white" onClick={() => window.location.replace('http://localhost:9000/admin-usuarios')}>
                <span className="icon-user-cog pr-2" ></span>Administrar usuarios</li>
              <li className="p-2 m-1 text-left cursor-pointer rounded hover:bg-azul_araucana hover:text-white"
                onClick={() => cerrarSesion()}>
                <span className="icon-logout-blue pr-2"></span>Cerrar sesión</li>
            </ul>
          </div>
        )}
      </div>
      {/* Desktop menu - Main menu */}
      <div className="hidden md:block z-50">
        {showMenu && (
          <div className="bg-blue-100 text-azul_araucana absolute rounded top-16 left-0 w-1/4 p-4 hidden lg:block mt-1">
            <ul className="flex flex-col space-y-4 text-center cursor-pointer">
              <li className="p-2 m-1 text-azul_araucana cursor-pointer rounded hover:bg-azul_araucana hover:text-white">Inicio</li>
              <li className="p-2 m-1 text-azul_araucana cursor-pointer rounded hover:bg-azul_araucana hover:text-white" onClick={() => window.location.replace('http://localhost:9000/credito/carga-financiera')}>Créditos</li>
              <li className="p-2 m-1 text-azul_araucana cursor-pointer rounded hover:bg-azul_araucana hover:text-white" onClick={() => window.location.replace('http://localhost:9000/licencias')}>Licencias médicas</li>
              <li className="p-2 m-1 text-azul_araucana cursor-pointer rounded hover:bg-azul_araucana hover:text-white">Certificados</li>
              <li className="p-2 m-1 text-azul_araucana cursor-pointer rounded hover:bg-azul_araucana hover:text-white">Cotizaciones</li>
            </ul>
          </div>
        )}
      </div>
      {dynamicMenuVisible && <NavbarMenu dynamicMenuVisible={dynamicMenuVisible} setDynamicMenuVisible={setDynamicMenuVisible} />}
      <CambiaClaveModal show={showModal} close={() => setShowModal(false)} notify={notifyPwChanged} />
      <ToastContainer closeButton={false} />
    </>
  );
}

