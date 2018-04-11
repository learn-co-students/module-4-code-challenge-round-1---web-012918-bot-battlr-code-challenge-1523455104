import React from "react";

const BotCard = props => {


  let botType;

  switch (props.datum.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }


  return (
    <div className="ui column" id={props.datum.id}>
      <div
        className="ui card"
        key={props.datum.id}
        onClick={props.handleClick}
        id={props.datum.id}
        name={props.datum.yourBot}
      >
        <div className="image">
          <img alt="oh no!" src={props.datum.avatar_url} id={props.datum.id}/>
        </div>
        <div className="content">
          <div className="header" id={props.datum.id}>
            {props.datum.name} {props.datumType}
          </div>

          <div className="meta text-wrap" id={props.datum.id}>
            <small>{props.datum.catchphrase}</small>
          </div>
        </div>
        <div className="extra content" id={props.datum.id}>
          <span>
            <i className="icon heartbeat" id={props.datum.id}/>
            {props.datum.health}
          </span>

          <span>
            <i className="icon lightning" id={props.datum.id}/>
            {props.datum.damage}
          </span>
          <span>
            <i className="icon shield" id={props.datum.id}/>
            {props.datum.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
