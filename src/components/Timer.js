import { useEffect } from "react";

function Timer({ dispatch, timer }) {
  const mins = Math.floor(timer / 60);
  const sec = timer % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && 0}
      {mins}: {sec < 10 && 0}
      {sec}
    </div>
  );
}

export default Timer;
