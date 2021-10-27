import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Course from "../Interfaces/Course";
import COURSES from "../Assets/courses.json";

export function ControlPanel({setCourse}:
    {
        setCourse: (c: Course) => void
    }): JSX.Element{
    // doesn't do anything
    function setDefault() {
        setCourse(COURSES[0]);
    }
    return(
        <div className="control">
            <Button onClick={setDefault} className="btn btn-light">Set default classes</Button>
        </div>
    );
}