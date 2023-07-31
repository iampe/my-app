import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from "./Rating";

export default function DemoF2() {
    let names =[
        {name:"Ram" ,branch:"IT" ,value:5 , url:"Image/day1.png"},
        {name:"Abhay" ,branch:"AI" ,value:2 , url:"Image/image2.png"},
        {name:"Sita" ,branch:"DS" ,value:4 , url:"Image/image3.png"},
        {name:"Hanuman" ,branch:"CSE" ,value:5 , url:"Image/image4.png"},
        {name:"Naman" ,branch:"IT" ,value:5 , url:"Image/image5.png"},
        {name:"Ks" ,branch:"AI" ,value:2 , url:"Image/day1.png"},
        {name:"Pranjal" ,branch:"DS" ,value:3 , url:"Image/day2.png"},
        {name:"Sachin" ,branch:"CSE" ,value:5 , url:"Image/day3.png"},
        {name:"Daksh" ,branch:"IT" ,value:1 , url:"Image/day4.png"},
        {name:"Gaurav" ,branch:"AI" ,value:2 , url:"Image/day5.png"},
        {name:"Shyam" ,branch:"DS" ,value:2 , url:"Image/week1.png"},
        {name:"Hns" ,branch:"CSE" ,value:5 , url:"Image/week2.png"},
    ];
    return (
        <>
        { names.map(
            (obj)=>{ 
                return (
                    <div className='col-sm-6 col-md-4 col-lg-3 mt-4'>
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + '/' + obj.url} className="card-img-top rounded mx-auto d-block" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">{obj.name}</h5>
                                <h5 className="card-title">{obj.branch}</h5>
                                <Rating value={obj.value} />
                                <a href="https://www.youtube.com/" className="btn btn-primary">Buy</a>
                            </div>
                    </div>
    
                </div>
                )
                } 
         ) 
        }
           

        </>

    )
}





