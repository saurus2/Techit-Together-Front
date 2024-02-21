import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featureInfo/Featuredinfo';
import './home.css';
import { userData } from '../../dummyData';
import { communityNames } from '../../dummyDataForCommunity';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import Top_community from '../../components/top_community/Top_community';

export default function Home() {
  return (
    <div className="home">

      <div className="homeWidgets1">
        <WidgetSm />
        <Top_community
          communityData={communityNames}
        />
      </div>
      {/* <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      /> */}
      <div className="homeWidgets2">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
