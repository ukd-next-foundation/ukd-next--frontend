import { useEffect, useRef } from "react";

const DATE_WIDTH = 47;
export function useScheduleSlider(
  currentDate: string,
  weeks: { date: string }[],
) {
  const slider = useRef<HTMLUListElement>(null);
  const currentDateIndex = weeks.findIndex((day) => day.date === currentDate);

  useEffect(() => {
    if (slider.current) {
      slider.current.scrollTo({ left: (currentDateIndex - 1) * DATE_WIDTH });
    }
  }, [currentDateIndex]);

  const next = () => {
    slider?.current?.scrollTo({
      left: slider.current.scrollLeft + DATE_WIDTH,
    });
  };

  const prev = () => {
    slider?.current?.scrollTo({
      left: slider.current.scrollLeft - DATE_WIDTH,
    });
  };

  return {
    slider,
    next,
    prev,
  };
}
