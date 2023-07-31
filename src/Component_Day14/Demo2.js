import React from 'react';
let names =[
    {name:"Ram" ,branch:"IT"},
    {name:"Abhay" ,branch:"AI"},
    {name:"Sita" ,branch:"DS"},
    {name:"Hanuman" ,branch:"CSE"},
];

export default function Demo2() {
  return (
    <div>
        <h1>Task-2</h1>
        { names.map(
            (obj)=>{ 
                return <p> Name is {obj.name} and  branch is {obj.branch}.</p>
                } 
         ) 
        }

    </div>
  )
}
