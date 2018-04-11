import React from "react";

const BotCard = props => {

  const { bot } = props;

  let botType;

  switch (bot.bot_class) {
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

  const addBotToArmy = (e) => {
    if (props.addBot && props.botIsInArmy){
      if (props.botIsInArmy(props.bot)) {
        console.log('beeep boooop: already enlisted');
      } else {
          props.addBot(props.bot);
      }
    } else {
      props.removeFromArmy(props.bot)
    }
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={addBotToArmy}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
