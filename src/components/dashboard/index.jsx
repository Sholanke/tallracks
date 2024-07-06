import DateRange from "../ui/date";
import Activities from "./activities";
import TopPosts from "./top-posts";
import ContentAnalytics from "./content-analytics";
import TopNumbers from "./top-numbers";
import "./index.scss";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <ContentAnalytics />
      <DateRange />
      <Activities />
      <TopPosts />
      <TopNumbers title="Top Performing Links" />
      <TopNumbers title="Top Devices" />
    </div>
  );
}
