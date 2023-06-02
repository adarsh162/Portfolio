import React from 'react';

const WorksItems = ({item}) => {
  return (
     <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        {item.code!="" ? (
        <a href={item.code} target="blank" className="work__button">
            code <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>)
         : ""}
         {item.demo!=""?(
        <a href={item.demo} target="blank" className="work__button">
            demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        ):"" }
     </div>
  )
}

export default WorksItems
