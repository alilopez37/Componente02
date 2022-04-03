import React from "react";

const Card = (props)=> {
    return (
        <React.Fragment>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">{props.name}</p>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Card;