import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
    const [item,setItem] = useState({
        name:"all"
    });
    const [projects,setProjects] = useState([]);
    const [active,setActive]=useState(0);
    const handleClick = (e, index) => {
        setItem({name:e.target.textContent});
        setActive(index);
        console.log(item);
    }

    useEffect(() => {
        if(item.name === "all"){
            setProjects(projectsData);
        }
        else{
            const newProjects = projectsData.filter((x)=>{
               return x.category===item.name;
            });
            setProjects(newProjects);
            
            console.log(projects);
        }
    },[item]);
  return (
    <div>
        <div className="work__filters">
        {projectsNav.map((item,index)=>{
            return (
                <span onClick={(e)=>{handleClick(e,index);}} className={`${active === index ? 'active-work' : ''} work__item`} key={index}>
                    {item.name}
                </span>
            )
        })}

    </div>
    <div className="work__container container grid">
        {projects.map((item)=>{
            return <WorksItems item={item} key={item.id}/>
        })}
    </div>
    </div>
  )
}

export default Works
