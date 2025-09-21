export default function MyComponent({ label, keyName, handleChange }) {
  return (
    <>
      <label>{label}</label>
      <br />
      <input
        onChange={(event) => {
          handleChange(keyName, event.target.value);
        }}
      ></input>
    </>
  );
}
