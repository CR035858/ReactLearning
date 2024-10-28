import React from 'react'

function NameList() {
    const names = ['Harsha','Kiran','Kumar','Girish']
    const persons = [
        {
            id : 1,
            name : 'Harsha',
            age : 28,
            skill: 'React'
        },
        {
            id : 2,
            name : 'Kiran',
            age : 27,
            skill: 'Java FSD'
        },
        {
            id : 3,
            name : 'Mahendra',
            age : 29,
            skill: '.Net FSD'
        },
        {
            id : 4,
            name : 'Meera',
            age : 26,
            skill: 'Data Science'
        }
    ]
  //FISRT APPROACH TO RENDER LIST - MAP
   {/*  <div>
             <h3>{names[0]}</h3>
                <h3>{names[1]}</h3>
                <h3>{names[2]}</h3> 
    {
        names.map(name => <h3> {name} </h3> )
    }
    </div> */}
    // OR Better approach
    const nameList = names.map(name => <span>{name} <br /></span>)
    const personList = persons.map(person =>(
      
        <h3>
            I am {person.name}, I am {person.age} years old. I know {person.skill}
        </h3>
    ))
    return  <div> 
                <h3> Using Lists & Maps Type 01</h3>
                <div> {nameList }</div>
                <div> {personList}</div>
            </div>
    
  
}

export default NameList
