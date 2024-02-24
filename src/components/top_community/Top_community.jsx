import './top_community.css';

export default function Top_community({ communityData }) {
  const imgData = ["public/images/Community 1.png", "public/images/Community 2.png", "public/images/Community 3.png"];
  return (
    <div className="top3community">
      <div className="title">Top 3 Community for this week!</div>
      <div className="communities-container">
        {communityData.map((data, index) => (
          <div className="community-item" key={index}>
            <img src={imgData[index]} alt={`Community ${index + 1}`} />
            <div className="community-name">{data.name}</div>
            <div className="community-percentage">{data.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
