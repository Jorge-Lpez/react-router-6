import logo from '../logo.svg';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

const Navigation = () => {

    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="Logo react" />
                    <ul>
                        <li>
                            <NavLink 
                                to="/home"  
                                className={ ({ isActive }) => isActive ? "nav-active" : "" }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about"  
                                className={ ({ isActive }) => isActive ? "nav-active" : "" }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/users"  
                                className={ ({ isActive }) => isActive ? "nav-active" : "" }>
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route 
                        path="home" 
                        element={<h1>Hola home</h1>} />
                    <Route 
                        path="about" 
                        element={<h1>Hola acerca</h1>} />
                    <Route 
                        path="users" 
                        element={<h1>Hola users</h1>} />
                    <Route
                        path="/*"
                        element={<Navigate to="/home" replace/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )

}

export default Navigation;

