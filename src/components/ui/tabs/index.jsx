import "./index.scss";

export function Tabs({ children }) {
  return <div className="tabs">{children}</div>;
}

export function Tab({ label, active }) {
  return (
    <button className={`tab ${active ? "active" : ""}`}>
      {label}
      {/* prettier-ignore */}
      <svg width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.8125 3L0 0H5.625L2.8125 3Z" fill="currentColor"/>
      </svg>
    </button>
  );
}
