import React, { FC } from 'react';

import { NewPost } from 'components/PostBar/NewPost';

type ModalWindowPropsType = {
  active: boolean;
  setActive: (active: boolean) => void;
};

export const ModalWindow: FC<ModalWindowPropsType> = props => {
  const { active, setActive } = props;

  const handleClickCloseWindow = (): void => setActive(false);

  return (
    <div
      role="presentation"
      className={active ? 'modal active' : 'modal'}
      onClick={handleClickCloseWindow}
    >
      <NewPost setActive={setActive} />
    </div>
  );
};
