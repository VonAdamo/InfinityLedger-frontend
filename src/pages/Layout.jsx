import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import { NavLink } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <div className="wrapper">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/infinityledger">Infinity Ledger</NavLink></li>
                            <li><NavLink to="/transactions">Transactions</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};