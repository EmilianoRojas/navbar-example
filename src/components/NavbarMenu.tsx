import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import araucanaLogo from '../assets/img/araucana-logo.png';
import creditosLogo from '../assets/img/creditos-logo.svg';
import licenciasLogo from '../assets/img/licencias-logo.svg';
import asignacionLogo from '../assets/img/asignacion-logo.svg';
import certificadosLogo from '../assets/img/certficados-logo.svg';
import cotizacionesLogo from '../assets/img/cotizaciones-logo.svg'
import { navigateToUrl } from 'single-spa';





export default function NavbarMenu({ dynamicMenuVisible, setDynamicMenuVisible }) {
    const [empresa, setEmpresa] = useState('')
    const [empresaRut, setEmpresaRut] = useState('')
    const [activeSection, setActiveSection] = useState(null);
    const [isVisible, setIsVisible] = useState(true);



    useEffect(() => {
        const empresa = sessionStorage.getItem('empresa')
        const empresaRut = sessionStorage.getItem('empresaRut')
        handleSectionClick("creditos")
        if (true) {
            setEmpresa(empresa)
            setEmpresaRut(empresaRut)
        } else {
        }
    },
        [])

    const handleSectionClick = (sectionKey) => {
        setActiveSection((prevSection) => (prevSection === sectionKey ? null : sectionKey));
    };

    const handleDynamicMenuButtonClick = () => {
        setDynamicMenuVisible(!dynamicMenuVisible);
    };

    const isActive = (sectionKey) => {
        return activeSection === sectionKey ? 'active-section' : '';
    };

    const changeCompany = () => {
        setDynamicMenuVisible(!dynamicMenuVisible);
        window.location.href = 'http://localhost:9000'
    }

    return isVisible ? (
        <>
            <div className="fixed inset-0 bg-black menu-bg z-20">
                <div className="fixed inset-0 flex items-start justify-start">
                    <Fade>
                        <div className="w-48 h-screen bg-white flex flex-col items-center">
                            {/* w-1/8 */}
                            <div className="araucana-logo pt-4 p-4 h-24">
                                <img src={araucanaLogo} alt="Araucana Logo" className="p-4" />
                            </div>
                            <div
                                className="flex items-center text-start  bg-azul_araucana 
                            w-full justify-center h-24 py-2 flex-col
                            cursor-pointer"
                                onClick={() => {
                                    changeCompany()
                                }}>
                                <span className="font-poppins-thin text-white text-sm">{empresaRut}</span>
                                <span className="font-poppins text-white text-sm">
                                    <span className="icon-change-white text-sm pr-1"></span>
                                    {empresa}
                                </span>
                            </div>
                            <div
                                className={`flex items-center text-center w-full 
                            justify-center h-24 py-2 flex-col 
                            text-azul_araucana navbar-card
                            cursor-pointer ${isActive("creditos")}`}
                                onClick={() => handleSectionClick("creditos")}>
                                <img src={creditosLogo} alt="" className="h-12" />
                                <span className="font-extralight text-sm">
                                    Crédito
                                </span>
                            </div>
                            <div
                                className={`flex items-center text-center w-full 
                                justify-center h-24 py-2 flex-col 
                                text-azul_araucana navbar-card
                                cursor-pointer ${isActive("licencias")}`}
                                onClick={() => handleSectionClick("licencias")}>
                                <img src={licenciasLogo} alt="" className="h-12" />
                                <span className="font-extralight text-sm">
                                    Licencias médicas
                                </span>
                            </div>
                            <div
                                className={`flex items-center text-center w-full 
                                justify-center h-24 py-2 flex-col 
                                text-azul_araucana navbar-card
                                cursor-pointer ${isActive("asignacion")}`}
                                onClick={() => handleSectionClick("asignacion")}>
                                <img src={asignacionLogo} alt="" className="h-12" />
                                <span className="font-extralight text-sm">
                                    Asignación familiar
                                </span>
                            </div>
                            <div
                                className={`flex items-center text-center w-full 
                                justify-center h-24 py-2 flex-col 
                                text-azul_araucana navbar-card
                                cursor-pointer ${isActive("certificados")}`}
                                onClick={() => handleSectionClick("certificados")}>
                                <img src={certificadosLogo} alt="" className="h-12" />
                                <span className="font-extralight text-sm">
                                    Certificados
                                </span>
                            </div>
                            <div
                                className={`flex items-center text-center w-full 
                               justify-center h-24 py-2 flex-col 
                               text-azul_araucana navbar-card
                               cursor-pointer ${isActive("cotizaciones")}`}
                                onClick={() => handleSectionClick("cotizaciones")}>
                                <img src={cotizacionesLogo} alt="" className="h-12" />
                                <span className="font-extralight text-sm">
                                    Cotizaciones
                                </span>
                            </div>
                        </div>
                    </Fade>

                    <div className="w-7/8 z-30">
                        <div className="w-full ml-8">
                            {/* w-3/4 */}
                            <Fade direction="left">
                                <p className="pt-8 pl-4 mb-4">
                                    <span className="text-4xl pr-1 text-white font-extralight b-orange">Portal</span>
                                    <span className="text-4xl text-orange font-bold">Empresa</span>
                                    <span
                                        className="icon-close-icon text-2xl 
                                        pr-12 absolute right-0 cursor-pointer"
                                        onClick={() => {
                                            setIsVisible(true);
                                            setDynamicMenuVisible(false);
                                        }}>
                                    </span>
                                </p>
                            </Fade>
                            <Fade>
                                <div className="w-full flex ml-30 mx-4 mt-20 my-8 items-center"
                                >
                                    <span className="text-white font-bold text-md cursor-pointer"
                                        onClick={() => {
                                            navigateToUrl('/home')
                                            setDynamicMenuVisible(false);
                                        }}>
                                        <span className="icon-back-home text-md pr-1"></span>
                                        Volver a Inicio</span>
                                </div>
                            </Fade>

                            <div className={`w-full flex flex-wrap mx-4 items-center justify-start ${activeSection === "creditos" ? "block" : "hidden"}`}>
                                <Fade direction="up">
                                    <div className="mr-16 mb-8 card-content rounded-lg " onClick={() => {
                                        navigateToUrl('/credito/carga-financiera')
                                        setDynamicMenuVisible(false);
                                        }}>
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Consulta Carga Financiera
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg" onClick={() => {
                                        navigateToUrl('/credito/saldo-favor')
                                        setDynamicMenuVisible(false);
                                    }}>
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg 
                                    cursor-pointer">
                                            <span className="text-md">
                                                Consulta Saldo a Favor
                                            </span>
                                        </div>
                                    </div>



                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Licencias Médicas
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg 
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Créditos Vigentes
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Deuda Previsional
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Cotizaciones pagadas
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className={`w-full flex flex-wrap mx-4 items-center justify-start ${activeSection === "licencias" ? "block" : "hidden"}`}>
                                <Fade direction="up">
                                    <div className="mr-16 mb-8 card-content rounded-lg " onClick={() => {
                                        navigateToUrl('/licencias')
                                        setDynamicMenuVisible(false);
                                    }}>
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Estado Licencias Médicas
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Afiliación
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Licencias Médicas
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Créditos Vigentes
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Deuda Previsional
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Cotizaciones pagadas
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className={`w-full flex flex-wrap mx-4 items-center justify-start  ${activeSection === "asignacion" ? "block" : "hidden"}`}>
                                <Fade direction="up">
                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Asignación Familiar
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Afiliación
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Licencias Médicas
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Créditos Vigentes
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Deuda Previsional
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Cotizaciones pagadas
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className={`w-full flex flex-wrap mx-4 items-center justify-start  ${activeSection === "certificados" ? "block" : "hidden"}`}>
                                <Fade direction="up">
                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Asignación Familiar
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Afiliación
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Licencias Médicas
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Créditos Vigentes
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Deuda Previsional
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg 
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Cotizaciones pagadas
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className={`w-full flex flex-wrap mx-4 items-center justify-start  ${activeSection === "cotizaciones" ? "block" : "hidden"}`}>
                                <Fade direction="up">
                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Asignación Familiar
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                    flex items-center 
                                    justify-center text-center
                                    rounded-lg
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Afiliación
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Licencias Médicas
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                     justify-center text-center
                                     rounded-lg
                                     cursor-pointer">
                                            <span className="text-md">
                                                Certificado Créditos Vigentes
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg ">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg 
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Deuda Previsional
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mr-16 mb-8 card-content rounded-lg">
                                        <div className="h-44 w-64 p-8 bg-white 
                                     flex items-center 
                                    justify-center text-center
                                    rounded-lg 
                                    cursor-pointer">
                                            <span className="text-md">
                                                Certificado Cotizaciones pagadas
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                            <Fade>
                                <div className="w-full mx-4 my-8 pt-24">
                                    <div className="w-5/6 flex items-center justify-end">
                                        <span className="text-white font-bold text-md pr-1">Llámanos al</span>
                                        <span className="text-orange font-bold text-md pr-2">600 4228 100</span>
                                        <span className="icon-facebook-logo text-md pr-1"></span>
                                        <span className="icon-instagram-logo text-md pr-1">
                                            <span className="path1">
                                            </span>
                                            <span className="path2"></span>
                                        </span>
                                        <span className="icon-twitter-logo pr-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                        </span>
                                        <span className="icon-linkedin-logo text-md pr-1"></span>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;

}