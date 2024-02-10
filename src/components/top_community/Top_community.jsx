import './top_community.css';

export default function Top_Community({num1CommunityName, num2CommunityName, num3CommunityName, num1Percentage, num2Percentage, num3Percentage}) {
  return (
    <div className="community">
      <div className="title">Top 3 Community for this week!</div>
      <span className="number1">#1.(나중에 지우기){num1CommunityName}</span>
      <span className="number2">#2.(나중에 지우기){num2CommunityName}</span>
      <span className="number3">#3.(나중에 지우기){num3CommunityName}</span>


    </div>
  );
}
