import "./navbar.css"
import { useRef } from 'react';


function Navbar(){
    const sideBarRef = useRef(null);

    const handleOpenSideBar = () => {
        if (sideBarRef.current) {
            sideBarRef.current.classList.remove("close-sidebar");
            sideBarRef.current.classList.add("open-sidebar");
        }
    };

    const handleCloseSideBar = () => {
        if (sideBarRef.current) {
            sideBarRef.current.classList.remove("open-sidebar");
            sideBarRef.current.classList.add("close-sidebar");
        }
    };

    return (
        <>
            <div className="nav-bar">
                <div className="logo">
                    <img src="/static/images/logo/logo5.png" alt="logo" />
                    <h1><span style={{color: "aqua"}}>Ritesh</span> Birthal</h1>
                </div>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="box-icons">
                    <a href="https://www.github.com/riteshbirthal"><i className='bx bxl-github' ></i></a>
                    <a href="https://www.linkedin.com/in/ritesh-birthal/"><i className='bx bxl-linkedin-square' ></i></a>
                    <a href="/"><i className='bx bxl-youtube'></i></a>
                </div>

                <div className="menu-icon" onClick={handleOpenSideBar}><i className='bx bx-menu'></i></div>
            </div>
            <div className="sidebar" ref={sideBarRef}>
                <div className="close-icon" onClick={handleCloseSideBar}>
                    <i className='bx bx-x' ></i>
                </div>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="social-icons">
                    <a href="https://www.github.com/riteshbirthal"><i className='bx bxl-github' ></i></a>
                    <a href="https://www.linkedin.com/in/ritesh-birthal/"><i className='bx bxl-linkedin-square' ></i></a>
                    <a href="/"><i className='bx bxl-youtube'></i></a>
                </div>
            </div>
        </>
    );
}

export default Navbar;