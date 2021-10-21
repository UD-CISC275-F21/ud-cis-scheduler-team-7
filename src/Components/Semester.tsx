import React, { useState } from "react";
import Course from "../Interfaces/Course";
export function Semester(props:{year :number,season:string,courses:Course[]}): JSX.Element{
    const[courses,SetSemester]=useState(props.courses);
    const[course,SetCourse]=useState(null);
    let i:number;
    function clearSemester(){
        for(i=0;courses[i]==null;i++){
            SetCourse(null);
        }
    }
    return <div className={"semester"}>
        <div>Year {props.year} {props.season} Semester  <button onClick={clearSemester}>Clear</button></div>
        <div>Courses:
        </div>
        <p>{courses[0].name}    Credits:{courses[0].credits}</p>
        <p>{courses[1].name}    Credits:{courses[1].credits}</p>
    </div>
    ;
}
