import "../style/SmallOutlineButton.css";

export default function SmallWhiteOutlineButton(props) {
  return (
    <a class="SmallOutlineButton" href={props.link}>
      {props.text}
    </a>
  );
}
