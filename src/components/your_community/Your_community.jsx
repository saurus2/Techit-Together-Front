import './your_community.css';

export default function Your_community({ communityData }) {
 return (
  <div className="yourCommunity">
   <div className="title">Your Community</div>
   <div className="columnContainer">
    <div className="rankTitle">Rank</div>
    <div className="studentTitle">Student</div>
    <div className="percentageTitle">Percentage</div>
   </div>
   <div className="dataContainer">
    {communityData.map((data, index) => (
     <div className="index" key={index}>
      <div className="rank">{index + 1}.</div>
      <div className="student">{data.name}</div>
      <div className="percentage">{data.percentage}%</div>
      {/* <div>{data.rank}</div> */}
     </div>
    ))}
   </div>
  </div>
 );
}