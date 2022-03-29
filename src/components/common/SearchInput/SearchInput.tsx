import React, { ChangeEvent, FC, useState } from 'react';

import styles from './styles/SearchInput.module.scss';

import iconSearch from 'assets/images/search.svg';

export const SearchInput: FC = () => {
  const [value, setValue] = useState<string>('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>): void =>
    setValue(e.currentTarget.value);

  const onClickHandler = (): void => {
    setValue('');
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        onChange={onChangeValue}
        value={value}
      />
      <span role="presentation" className={styles.search__btn} onClick={onClickHandler}>
        <img src={iconSearch} alt="search" />
      </span>
    </div>
  );
};
