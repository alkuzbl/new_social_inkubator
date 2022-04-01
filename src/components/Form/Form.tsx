import React, { FC } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type FormPropsType = {
  defaultValues: any;
  onSubmit: any;
  children: any;
};
export const Form: FC<FormPropsType> = ({ defaultValues, children, onSubmit }) => {
  const methods = useForm({ resolver: yupResolver(defaultValues), mode: 'onTouched' });
  const { handleSubmit, formState, register } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child =>
        child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                key: child.props.name,
                errors: formState.errors,
              },
            })
          : child,
      )}
    </form>
  );
};
