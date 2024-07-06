import Icon from "../ui/icon";

export default function Navbar() {
  return (
    <div className="app-navbar">
      <h4>Tallracks</h4>

      <div className="app-navbar__search">
        <Icon name="search" />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="app-navbar__actions">
        <button className="app-navbar__button">Create</button>
        <Icon name="send" />
        <Icon name="notification" active />
        <Icon name="message" active />
        <div className="app-navbar__profile">
          <img src="/images/avatar.png" alt="profile image" />
        </div>
      </div>
    </div>
  );
}
