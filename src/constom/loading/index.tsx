import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

interface IProps {
  space: number;
  start: boolean;
}

const Loading = ({ start, space }: IProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: any;
    if (start) {
      timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + space
        );
      }, 800);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start]);

  return (
    <CircularProgress
      value={progress}
      variant="static"
      color="secondary"
      thickness={8}
      size={60}
    />
  );
};

export default React.memo(Loading);
