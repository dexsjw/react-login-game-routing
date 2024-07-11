import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Header() {
    return <h1>🎲 The Game App</h1>
}

function RootLayout() {
    return (
        <div>
            <Header />
            <NavBar />
            <main style={{ padding: 20 }}>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;