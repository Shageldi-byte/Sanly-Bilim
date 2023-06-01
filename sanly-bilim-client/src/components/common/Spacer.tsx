import { FC } from "react";

interface ISpace {
  space: number;
}

const Spacer: FC<ISpace> = (props) => {
  const { space } = props;
  return (
    <div>
      {new Array(space).fill(0).map((i) => {
        return <br key={`item-key-${i}`} />;
      })}
    </div>
  );
};

export default Spacer;
