import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featureInfo/Featuredinfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import CircleChart from '../../components/circleChart/CircleChart';

export default function Home() {
  return (
    <div className="home">
      <CircleChart />
      {/* <FeaturedInfo /> */}
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
