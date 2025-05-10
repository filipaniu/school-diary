import './App.css';
import CreateStudent from "./createStudent";
import {useEffect, useState} from "react";
import StudentsList from "./studentsList";

function App() {

    const [shouldRender, setShouldRender] = useState(new Date());

    return (
        <div className="App">
            <header>
                <h1>
                    School Diary
                </h1>
            </header>
            <main>
                <StudentsList shouldRender={shouldRender}></StudentsList>
                <CreateStudent setShouldRender={setShouldRender}></CreateStudent>
            </main>
        </div>
    );
}

export default App;
