import s from "./Loader.module.css";

export const Loader = () => <ElementLoader />;

const ElementLoader = () => (
  <div className={s["lds-ring"]}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
