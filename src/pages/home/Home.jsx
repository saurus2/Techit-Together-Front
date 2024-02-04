import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featureInfo/Featuredinfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import Top_Community from '../../components/top_community/Top_Community';

export default function Home() {
  return (
    <div className="home">
{/*       <FeaturedInfo /> */}
    <Top_Community />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
