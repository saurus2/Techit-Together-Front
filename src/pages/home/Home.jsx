// import Chart from '../../components/chart/Chart';
// import FeaturedInfo from '../../components/featureInfo/Featuredinfo';
import './home.css';
// import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';

// import WidgetLg from '../../components/widgetLg/WidgetLg';
import Top_community from '../../components/top_community/Top_community';
import { communityNames } from '../../dummyDataForCommunity';
import Your_community from '../../components/your_community/Your_community';
import { yourCommunityData } from '../../dummyDataForYourCommunity';
import Activity from '../../components/activity/Activity';
import { recentDatas } from '../../dummyDataForRecent';
import { bestDatas } from '../../dummyDataForBest';

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
        <Your_community
          communityData={yourCommunityData} />
        {/* <WidgetSm /> */}
        {/* <WidgetLg /> */}
        <Activity
          recentActivityData={recentDatas}
          bestActivityData={bestDatas} />
      </div>
    </div>
  );
}
