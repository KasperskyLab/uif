import React from 'react';
import styled from 'styled-components';
import { Size } from '../../design-system/types';
import { Button, H4 } from '../../src';
import { ButtonSize, IButtonProps } from '../../src/button/types';
import { Text } from '../../src/typography/text';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ExampleSizingComponent = (props: IButtonProps) => {
  const sizes: ButtonSize[] = [
    Size.Small,
    Size.Medium,
    Size.Large,
    Size.ExtraLarge,
  ];

  return (
    <>
      <ButtonContainer>
        <H4>Button Sizings</H4>
        {sizes.map((size) => (
          <div style={{ display: 'flex', gap: '11px', alignItems: 'center' }}>
            <Text>{size}</Text>
            <Button text={'button'} size={size} {...props} />
          </div>
        ))}
      </ButtonContainer>
    </>
  );
};
