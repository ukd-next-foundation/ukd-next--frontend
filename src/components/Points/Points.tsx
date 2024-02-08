import cls from "./Points.module.scss";

interface IPoints {
  pairs: number[];
  activeId: number;
}

function Points({ pairs, activeId }: IPoints) {
  return (
    <section className={cls.steps_container}>
      <ul className={cls.steps}>
        {pairs.map((_, index) => (
          <li
            className={`${cls.step_container}  ${
              activeId === index + 1 && cls.step_active
            }`}
          >
            <div className={`${cls.step}`}></div>
            <div className={cls.stick}></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Points;
