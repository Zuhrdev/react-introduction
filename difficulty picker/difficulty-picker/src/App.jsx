import { DisplayDifficulty } from "./components/DisplayDifficulty/DIsplayDifficulty";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";
import { MenuList } from "./components/MenuList/MenuList";
import { useState } from "react";
import { update } from "lodash";
import s from "./style.module.css";

export function App() {
    const [currentDifficulty, setCurrentDifficulty] = useState("");
    function updateDifficulty(difficulty){
        setCurrentDifficulty(difficulty);
    }
    return( 
    <div>
        <h1 className={s.title}>Select your React difficulty</h1>
        <div className={s.workspace}>
            <MenuList 
            difficulty={currentDifficulty}
            onItemClick={updateDifficulty}
            />
            <DisplayDifficulty difficulty={currentDifficulty}/>
        </div>
    </div>
    );
}