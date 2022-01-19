import "../style/OutlineButtonPrimary.css";

function OutlineButton(props) {
  return (
    <a class="OutlineButton" href={props.link}>
      {props.text}
    </a>
  );
}

export default OutlineButton;
