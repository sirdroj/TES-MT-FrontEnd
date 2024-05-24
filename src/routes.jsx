import App from "./App";
import AddClientData from "./components/AddClientData";
import MapClient from "./components/MapClient";
import ViewClient from "./components/ViewClient";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientInfo from "./routes/ClientPortfolio";
import Dashboard from "./routes/Dashboard";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "",
                element: <Home />,
                children: [
                    {
                        path: "clientinfo",
                        element: <ClientInfo />,
                        children: [
                            {
                                path:"viewClient",
                                element: <ViewClient />
                            },
                            {
                                path:"",
                                element: <ViewClient />
                            },
                            {
                                path:"addClient",
                                element: <AddClientData />
                            },
                            {
                                path:"mapClient",
                                element: <MapClient />
                            }

                        ],
                    },
                    {
                        path: "dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "",
                        element: <Dashboard />
                    }
                ]
            }
        ]
    },
];

export default routes;
