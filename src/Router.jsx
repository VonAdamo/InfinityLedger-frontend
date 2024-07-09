import { createBrowserRouter } from "react-router-dom";
import {Layout} from "./pages/Layout.jsx";
import {Home} from "./pages/Home.jsx";
import {Login} from "./pages/Login.jsx";
import { InfinityLedger } from "./pages/InfinityLedger.jsx";
import { Transactions } from "./pages/Transactions.jsx";
import {NotFound} from "./pages/NotFound.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/infinityledger",
                element: <InfinityLedger />
            },
            {
                path: "/transactions",
                element: <Transactions />
            }
        ]
    }
]);

export default router;