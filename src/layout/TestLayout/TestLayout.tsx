import { Outlet } from "react-router-dom";

function TestLayout () {
    return (
        <div className="test-layout">
            <Outlet/>
        </div>
    );
}

export default TestLayout;