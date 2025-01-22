import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Flsdmfr from "../components/Flsdmfr";
import Header from "../containers/Header/Header";

const items = [
    {id: 1, title: "Item 1", desc: "This is the desc of item 1"},
    {id: 2, title: "Item 2", desc: "This is the desc of item 2"}, 
    {id: 3, title: "Item 3", desc: "This is the desc of item 3"}
]

function TestPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            <Header/>
            <Flsdmfr whatever = {items}/>
        </div>
    );
}

export default TestPage;