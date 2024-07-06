export default function Activities() {
  return (
    <div className="dashboard-activities gradient-border">
      <h3 className="dashboard-activities__title">
        Activity
        {/* prettier-ignore */}
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.85 3.25H7.15V4.55H5.85V3.25ZM5.85 5.85H7.15V9.75H5.85V5.85ZM6.5 0C2.912 0 0 2.912 0 6.5C0 10.088 2.912 13 6.5 13C10.088 13 13 10.088 13 6.5C13 2.912 10.088 0 6.5 0ZM6.5 11.7C3.6335 11.7 1.3 9.3665 1.3 6.5C1.3 3.6335 3.6335 1.3 6.5 1.3C9.3665 1.3 11.7 3.6335 11.7 6.5C11.7 9.3665 9.3665 11.7 6.5 11.7Z" fill="white"/>
        </svg>
      </h3>

      <div className="dashboard-activities__cards">
        <div className="gradient-border">
          <span>Plays</span>
          <p>4</p>
        </div>

        <div className="gradient-border">
          <span>Likes</span>
          <p>4</p>
        </div>

        <div className="gradient-border">
          <span>Comments</span>
          <p>4</p>
        </div>

        <div className="gradient-border">
          <span>Shares</span>
          <p>10</p>
        </div>

        <div className="gradient-border">
          <span>Saves</span>
          <p>10</p>
        </div>
      </div>
    </div>
  );
}
