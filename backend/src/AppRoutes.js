import { Route, Routes } from "react-router-dom";
import Form1 from "./Form1";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Form1 />} />
        </Routes>
    );
}

export default AppRoutes;