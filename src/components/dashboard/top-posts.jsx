import Dropdown from "../ui/dropdown";
import Icon from "../ui/icon";

export default function TopPosts() {
  return (
    <div className="dashboard-top gradient-border">
      <div className="dashboard-top__header">
        <h3 className="dashboard-top__title">
          Top Post
          {/* prettier-ignore */}
          <Icon name="circle-info" />
        </h3>

        <Dropdown value="Last Month" />
      </div>

      <table className="base-table">
        <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "10%" }} />
        </colgroup>

        <thead>
          <tr>
            <td>Rank</td>
            <td>Title</td>
            <td>Artist</td>
            <td>Streams</td>
            <td>Release Date</td>
          </tr>
        </thead>
        <tbody>
          {TOP_POSTS.map((post, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <div className="dashboard-top__music-title">
                  <img src="/images/music-thumbnail.svg" alt="music" />
                  <p>{post.title}</p>
                </div>
              </td>
              <td>{post.artists}</td>
              <td>{post.streams}</td>
              <td>{post.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="dashboard-top__more gradient-border">View More</button>
    </div>
  );
}

const TOP_POSTS = [
  {
    title: "We Deserve Bettr...",
    artists: "DJ HopeStar",
    streams: "405k",
    release_date: "July 29, 2022",
  },

  {
    title: "We Deserve Bettr...",
    artists: "DJ HopeStar",
    streams: "405k",
    release_date: "July 29, 2022",
  },

  {
    title: "We Deserve Bettr...",
    artists: "DJ HopeStar",
    streams: "405k",
    release_date: "July 29, 2022",
  },

  {
    title: "We Deserve Bettr...",
    artists: "DJ HopeStar",
    streams: "405k",
    release_date: "July 29, 2022",
  },

  {
    title: "We Deserve Bettr...",
    artists: "DJ HopeStar",
    streams: "405k",
    release_date: "July 29, 2022",
  },
];
