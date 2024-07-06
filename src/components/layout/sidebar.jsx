import Icon from "../ui/icon";

export default function Sidebar() {
  return (
    <div className="layout__sidebar-container">
      <div className="layout__sidebar">
        <a href="#" className="active">
          <Icon name="home" />
        </a>

        <a href="#">
          <Icon name="stats" />
        </a>

        <a href="#">
          <Icon name="folder" />
        </a>

        <a href="#">
          <Icon name="plus" />
        </a>

        <a href="#">
          <Icon name="shop" />
        </a>

        <a href="#">
          <Icon name="wallet" />
        </a>

        <a href="#">
          <Icon name="settings" />
        </a>
      </div>

      <div className="layout__sidebar">
        <a href="#">
          <Icon name="info" />
        </a>

        <a href="#">
          <Icon name="menu-add" />
        </a>
      </div>
    </div>
  );
}
