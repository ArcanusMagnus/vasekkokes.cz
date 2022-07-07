const Left = (props: { title: string; description: string; color: string }) => {
  return <div style={{"backgroundColor": props.color}}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>;
};

export default Left;
