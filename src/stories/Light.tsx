type Props = {
  /** some description from component type Props!!!! */
  variant?: 'green' | 'yellow' | 'red';
};

/** This comment is in front of component Light */
const Light = ({ variant = 'green' }: Props) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: '50%',
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Light;
