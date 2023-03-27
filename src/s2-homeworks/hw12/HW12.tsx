import React, { useEffect, useReducer } from "react";
import s from "./HW12.module.css";
import s2 from "../../s1-main/App.module.css";
import SuperSelect from "../hw07/common/c5-SuperSelect/SuperSelect";
import {
  changeThemeId,
  getThemIdSelector,
  themeReducer,
} from "./bll/themeReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

/*
 * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
 * 2 - получить themeId из редакса
 * 3 - дописать тип и логику функции change
 * 4 - передать пропсы в SuperSelect
 * */

const themes = [
  { id: 1, value: "light" },
  { id: 2, value: "blue" },
  { id: 3, value: "dark" },
];

export type themeType = {
  id: number;
  value: string;
};

const HW12 = () => {
  // взять ид темы из редакса
  const themeId = useAppSelector(getThemIdSelector);
  const dispatch = useAppDispatch();
  const change = (id: any) => {
    // дописать функцию
    dispatch(changeThemeId(id));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + "";
  }, [themeId]);

  return (
    <div id={"hw12"}>
      <div id={"hw12-text"} className={s2.hwTitle}>
        Homework #12
      </div>
      <label className={s.selectPhrase} htmlFor='selectName0'>
        Выберите тему
      </label>
      <div id='selectName0' className={s2.hw}>
        <SuperSelect
          id={"hw12-select-theme"}
          className={s.select}
          options={themes}
          onChangeOption={change}
          // сделать переключение тем
        />
      </div>
    </div>
  );
};

export default HW12;