import Icon from "../ui/icon";
import "./index.scss";

export default function Profile() {
  return (
    <div className="app-profile">
      <div className="app-profile__image">
        <img src="/images/avatar.png" alt="profile image" />

        <div className="app-profile__handle">
          @NastyC
          <Icon name="copy" />
        </div>

        <p className="app-profile__display-name">
          Nasty C
          <Icon name="verified" />
        </p>
      </div>

      <div className="app-profile__details">
        <div className="app-profile__details__header">
          <div className="app-profile__details__follow">
            <span>Following</span>
            <p>250</p>
          </div>

          <div className="app-profile__details__follow">
            <span>Followers</span>
            <p>15.1M</p>
          </div>

          <button className="app-profile__details__edit">Edit Profile</button>

          <button>
            <Icon name="link" />
          </button>
        </div>

        <div className="app-profile__details__about">
          David Junior Ngcobo, who is more popularly known as Nasty C, is the
          voice of his generation. The multi-award winning South African...
          <button>Read More</button>
          <br />
          <br />
          In partnership with <button>@Tallracks</button>{" "}
          <button>@CocaCola</button>
        </div>

        <div className="app-profile__details__bio">
          <a className="app-profile__details__bio-link" href="#">
            <Icon name="link-gradient" />
            ivsyosnarmy.com
          </a>

          <a className="app-profile__details__bio-link" href="#">
            <Icon name="location" />
            Cape Town, South Africa
            <img src="https://flagcdn.com/h240/za.png" alt="South Africa"></img>
          </a>
        </div>

        <div className="app-profile__details__bio">
          <a href="#">
            <Icon name="instagram" />
          </a>
          <a href="#">
            <Icon name="twitter" />
          </a>
          <a href="#">
            <Icon name="facebook" />
          </a>
          <a href="#">
            <Icon name="youtube" />
          </a>
          <a href="#">
            <Icon name="soundCloud" />
          </a>
        </div>
      </div>
    </div>
  );
}
