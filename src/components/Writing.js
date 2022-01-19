import StarLinkImg from "../img/star.svg";
import SmallOutlineButton from "./SmallOutlineButton";
import "../style/Writing.css";

function WritingItem(props) {
  return (
    <div className="WritingItem">
      <h2 className="WritingTitle">{props.WritingTitle}</h2>
      <p className="WritingGenres">
        <b>Genres:</b>&nbsp;
        {props.WritingGenres.map((element) => {
          if (element === props.WritingGenres.slice(-1)[0]) {
            return <span>{element}</span>;
          } else {
            return <span>{element + ", "}</span>;
          }
        })}
      </p>
      <p className="WritingDescription">{props.WritingDescription}</p>
      {props.WritingButtonText && (
        <div className="AlignRight">
          <SmallOutlineButton
            className="SmallOutlineButton"
            text={props.WritingButtonText}
            link={props.WritingButtonLink}
          ></SmallOutlineButton>
        </div>
      )}
    </div>
  );
}

function Writing() {
  return (
    <div className="Writing">
      <div className="DivTitle">
        <img src={StarLinkImg} />
        Writing
      </div>
      <WritingItem
        WritingTitle="A Waltz of Swords and Daggers"
        WritingGenres={["Romance", "Fanfiction"]}
        WritingDescription="Sent by the Trifarix to infiltrate the great city of Demacia during the coronation of the crown prince, Noxian assassin Katarina du Couteau disguises herself as a Demacian noblewoman to orchestrate the murders of several high-ranking military officers, only to find herself falling in love with her sworn enemy — Garen Crownguard, Sword-Captain of the Dauntless Vanguard."
        WritingButtonText="Read on Archive of Our Own"
        WritingButtonLink="https://archiveofourown.org/works/30914375/chapters/76339709"
      ></WritingItem>
      <WritingItem
        WritingTitle="Mayhem Online"
        WritingGenres={["Young Adult", "Romance", "Science Fiction", "Fantasy"]}
        WritingDescription="After high school junior Irina Morales overrides the safety measures on the software of her virtual reality headgear and purposely traps herself in the MMORPG universe of Mayhem Online, her ex-boyfriend Flynn Townsend attempts to find her and convince her to return to the real world."
      ></WritingItem>
    </div>
  );
}

export default Writing;
