import "../style/SmallOutlineButton.css";

function SmallOutlineButton(props) {
  return (
    <a class="SmallOutlineButton" href={props.link}>
      {props.text}
    </a>
  );
}

export default SmallOutlineButton;
