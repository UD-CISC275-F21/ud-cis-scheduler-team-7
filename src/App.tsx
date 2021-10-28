import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Menu.css";
import COURSES from "./Assets/courses.json";
import {Menu} from "./Components/Menu";
import "./Components/Semester.css";
import { Semester } from "./Components/Semester";
import "./Components/Welcome.css";
import { Welcome } from "./Components/Welcome";
import { ControlPanel } from "./Components/ControlPanel";
import Course from "./Interfaces/Course";
import "./App.css";
import "./Components/Semester.css";
import "./Components/Menu.css";
//comment to force a commit
function App(): JSX.Element {
    const [currentCourse, setCurrentCourse] = useState<Course>(COURSES[0] as Course);
    return (
        <div className="App">
            <Welcome />
            <div className="container-fluid">
                <div className="row">
                    <header className="App-header">
                        <h1>UD CIS Scheduler</h1>
                    </header>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Menu />
                    </div>
                    <div className="col">
                        <Semester 
                            year = {1}
                            season = {"Fall"} 
                            course = {currentCourse}/>

                        <Semester 
                            year={2} 
                            season={"Fall"} 
                            course={currentCourse}/>
                        <Semester 
                            year={3} 
                            season={"Fall"} 
                            course={currentCourse}/>
                        <Semester 
                            year={4} 
                            season={"Fall"} 
                            course={currentCourse}/>
                        <div className="row">
                            <ControlPanel
                                setCourse={setCurrentCourse}/>
                        </div>
                    </div>
                    <div className="col">
                        <Semester 
                            year={1} 
                            season={"Spring"} 
                            course={currentCourse} />
                        <Semester 
                            year={2} 
                            season={"Spring"} 
                            course={currentCourse} />
                        <Semester 
                            year={3} 
                            season={"Spring"} 
                            course={currentCourse} />
                        <Semester 
                            year={4} 
                            season={"Spring"} 
                            course={currentCourse} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
// commment to force a commit