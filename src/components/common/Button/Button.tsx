import { FC } from 'react';

import styles from 'components/common/Button/styles/Button.module.scss';

type ButtonPropsType = {
  title: string;
  callBack: () => void;
  customStyle: 'default' | 'transparent';
  customClassName?: string;
};
export const Button: FC<ButtonPropsType> = props => {
  const { title, callBack, customStyle, customClassName } = props;

  const styleButton =
    customStyle === 'transparent' ? styles.button__transparent : styles.button;

  const handleClick = (): void => {
    callBack();
  };

  return (
    <button
      className={customClassName ? `${styleButton} ${customClassName}` : styleButton}
      type="submit"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
