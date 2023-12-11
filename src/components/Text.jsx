const Text = (props) => {
  return (
    <div>
      <h1>{props.textic}</h1>
      <p>{props.paragraf}</p>
      <p style={{ marginLeft: 10 }}>{props.rewiev}</p>
      <h4 style={{ fontSize: 14 }}>{props.h4}</h4>
      <p style={{ fontSize: 20 }}>{props.p20}</p>
    </div>
  );
};
export default Text;
