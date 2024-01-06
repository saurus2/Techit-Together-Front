import { useParams } from 'react-router-dom';
import './team.css';

export default function Team() {
  const { team } = useParams();
  return (
    <div className="team">
      <h1>Team</h1>
      <h2>{team}</h2>
    </div>
  );
}
