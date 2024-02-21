import './activity.css';

export default function Activity({ recentActivityData, bestActivityData }) {
 return (
  <div className="activityContainer">
   <div className="title">Recent activity in your community</div>
   <div className="recentDataContainer">
    {recentActivityData.map((data, index) => (
     <div className="index" key={index}>
      <div className="rank">{index + 1}.</div>
      <div className="student">{data.name}</div>
      <div className="percentage">{data.time}</div>
     </div>
    ))}
   </div>
   <div className="title">Best activity in your community for this week</div>
   <div className="bestDataContainer">
    {bestActivityData.map((data, index) => (
     <div className="index" key={index}>
      <div className="rank">{index + 1}.</div>
      <div className="student">{data.name}</div>
      <div className="percentage">{data.percentage}%</div>
     </div>
    ))}
   </div>
  </div>
 );
}