import "style/Card.css";
import { ColorBaseEnum, ColorBasePrimaryEnum } from "style/Color";
import { ReactComponent as IconEth } from "assets/images/icon-ethereum.svg";
import { ReactComponent as IconClock } from "assets/images/icon-clock.svg";
import { ReactComponent as IconView } from "assets/images/icon-view.svg";
import { Dispatch, SetStateAction } from "react";

interface CardPropsInterface {
  name?: string;
  desc?: string;
  value?: string;
  timeLeft?: string;
  author?: string;
  iShowPreview: boolean;
  setIShowPreview: Dispatch<SetStateAction<boolean>>;
}
const Card = (props: CardPropsInterface) => {
  return (
    <div className="container-card">
      <div
        onMouseEnter={() => props.setIShowPreview(true)}
        onMouseLeave={() => props.setIShowPreview(false)}
        className="container-image-layout"
      >
        <img
          className="container-image"
          src={require("../assets/images/image-equilibrium.jpg")}
          alt="equilibrium"
        />
        {props.iShowPreview && (
          <>
            <div className="container-view">
              <IconView />
            </div>
            <div className="hover-view"></div>
          </>
        )}
      </div>
      <h3 style={{ marginTop: 32 }} className="font-600 hover-animation">
        {props.name}
      </h3>
      <p style={{ marginTop: 16, color: ColorBasePrimaryEnum.softBlue }}>
        {props.desc}
      </p>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 32,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconEth />
          <p
            style={{ color: ColorBasePrimaryEnum.cyan, marginLeft: 8 }}
            className="font-600"
          >
            {props.value} ETH
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconClock />
          <p
            style={{ color: ColorBasePrimaryEnum.softBlue, marginLeft: 8 }}
            className="font-600"
          >
            {props.timeLeft}
          </p>
        </div>
      </section>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: 16,
          marginTop: 32,
          borderTop: `1px solid ${ColorBaseEnum.veryDarkBlueLine}`,
        }}
      >
        <img
          src={require("../assets/images/image-avatar.png")}
          alt="avatar-author"
          width={36}
          height={36}
        />
        <p
          className="font-300"
          style={{ color: ColorBasePrimaryEnum.softBlue, marginLeft: 8 }}
        >
          Creation of{" "}
          <span>
            <a
              rel="noreferrer"
              className="font-400 hover-animation"
              href="https://www.linkedin.com/in/yen-san-443429187/"
              target="_blank"
            >
              {props.author}
            </a>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Card;
