import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <h4>
      <div className="watch">
        <span>{hours > 9 ? hours : `0${hours}`}</span>:
        <span>{minutes > 9 ? minutes : `0${minutes}`}</span>:
        <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
      </div>
    </h4>
  );
}
