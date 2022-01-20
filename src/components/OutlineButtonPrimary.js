import "../style/OutlineButtonPrimary.css";

function OutlineButtonPrimary(props) {
  return (
    <a class="OutlineButtonPrimary" href={props.link}>
      {props.text}
    </a>
  );
}

export default OutlineButtonPrimary;
