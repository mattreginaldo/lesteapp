import React, { ReactNode, memo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Radio, RadioContent } from './styles';

interface IInputCheckbox extends TouchableOpacityProps {
  active: boolean;
  value?: string;
  color?: string;
  children?: ReactNode;
}

const InputCheckboxComponent: React.FC<IInputCheckbox> = ({
  active,
  value = 'Default Label',
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Radio active={active} color={rest.color}>
        <RadioContent active={active} color={rest.color} />
      </Radio>
      {children ? (
        children
      ) : (
        <Title adjustsFontSizeToFit color={rest.color}>
          {value}
        </Title>
      )}
    </Container>
  );
};

export default memo(InputCheckboxComponent);
