import "./FormStyle.css";
export default function Modal({ visible, message, color }) {
  if (visible == true) {
    return (
      <div className="modal-card">
        <div className="modal-content">
          <h1 style={{ color: color }}>{message}</h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
