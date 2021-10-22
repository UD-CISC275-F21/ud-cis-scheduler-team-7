import React, { useState } from "react";
import Course from "../Interfaces/Course";
export function Semester(props:{year :number,season:string,courses:Course[]}): JSX.Element{
    const[courses,SetSemester]=useState(props.courses);
    const[course,SetCourse]=useState(null);
    const[year,SetYear]=useState(props.year);
    let i:number;
    function clearSemester(){
        SetCourse(null);
    }
    function clearYear(){
        SetYear(0);
    }
    return <div className={"semester"}>
        <div>Year {year} {props.season} Semester  <button onClick={clearSemester}>Clear</button><button onClick={clearYear}></button></div>
        <div>Courses:
        </div>
        <p>{courses[0].name}    Credits:{courses[0].credits}</p>
        <p>{courses[1].name}    Credits:{courses[1].credits}</p>
    </div>
    ;
}
