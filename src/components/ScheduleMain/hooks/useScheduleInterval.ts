import { useEffect, useState } from "react";
import { currentTime } from "../../../utils/moment.ts";

export function useScheduleInterval() {
  const [time, setTime] = useState<string>(() => currentTime());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(currentTime());
    }, 5000);

    return () => {
      window.clearTimeout(interval);
    };
  }, []);

  return {
    time,
  };
}
