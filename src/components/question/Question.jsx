import React from 'react';

export default function Question(props) {
    return (
        <div style={{ border: "solid 1px gray", padding: "5px" }}>
            <h3>Question</h3>
            <div className="card" style={{ width: "18 rem" }}>
                <div className="title">
                    {props.question.points}
                </div>
                <div className="content">
                    {props.question.q}
                </div>
            </div>
            <br />
            <button className="btn btn-primary">{props.question.points}</button>
            <br />
            <div className="card" style={{width: "18rem;"}}>
                <img className="card-img-top" src="http://placeimg.com/640/480/animals" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
</div>
            </div>
            )
          }
