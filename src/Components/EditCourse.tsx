import React, { useState } from "react";
interface IProps{
   editTmpId:number;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   editAddCourse: (tmpCourse: any) => void
}
 
const EditCourse:React.FC<IProps> = ({editTmpId,editAddCourse}) => {
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const [credits, setCredits] = useState<number>();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (e:any) =>{
        e.preventDefault();
        const id = editTmpId;
    
        editAddCourse({id,name,description,credits}) ;
    };
    return (
        <div >
            <br/>
            <form onSubmit={onSubmit} >
                <p><label><li>Course ID</li></label></p>
                <input type='text' placeholder='edit course name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <p></p>
                <p><label><li>Name</li></label></p>
                <input type='text' placeholder='edit description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <p></p>
                <p><label><li>Credits</li></label></p>
                <input type='number' placeholder='edit credit'value={credits}  onChange={(e)=>setCredits(parseInt(e.target.value))}/>
    
                <p><input type="submit" className="btn btn-primary m-2" value="Save course"/></p>
            </form>
        </div>
    );
};
 
export default EditCourse;
