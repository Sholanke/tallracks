import Icon from "../ui/icon";

export default function TopNumbers({ title }) {
  return (
    <div className="dashboard-top gradient-border">
      <div className="dashboard-top__header">
        <h3 className="dashboard-top__title">
          {title}
          {/* prettier-ignore */}
          <Icon name="circle-info" />
        </h3>
      </div>

      <table className="dashboard-top__numbers">
        <colgroup>
          <col style={{ width: "50%" }} />
          <col style={{ width: "5%" }} />
        </colgroup>

        <thead>
          <tr>
            <td></td>
            <td>Clicks</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Total Schedule</td>
            <td>6,390,975</td>
          </tr>

          <tr>
            <td>Contact me</td>
            <td>1,484,160</td>
          </tr>

          <tr>
            <td>Buy my book</td>
            <td>923,814</td>
          </tr>

          <tr>
            <td>Sign Up for a class</td>
            <td>893,525</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
