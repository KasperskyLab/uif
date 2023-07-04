import React, { ReactNode } from 'react'

import styled from 'styled-components'
import { SPACES } from '../../../../design-system/theme/themes/variables'
import { Button } from '../../../button'
import { Locale } from '../../../locale'

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 170px);
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-right: ${SPACES[27]}px;

  .select-all-item {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: ${SPACES[10]}px;
    height: 40px;
    align-items: center;

    p {
      margin-left: ${SPACES[8]}px;
    }
  }
  .grouping-item {
    p {
      display: contents;
    }
  }
`

const Content = styled.div`
  flex-grow: 1;
  overflow: auto;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  justify-self: flex-end;
  margin-top: ${SPACES[16]}px;

  button {
    margin-left: ${SPACES[5]}px;
  }
`

export interface SelectorWrapperProps {
  onSave: (value: any) => void,
  onClose: () => void,
  children: ReactNode,
  isSaveDisabled?: boolean
}

export const SelectorWrapper = ({ isSaveDisabled = false, onSave, onClose, children }: SelectorWrapperProps) => {
  return (
    <Wrapper>
      <Content>
        {children}
      </Content>
      <Buttons>
        <Button
          kl-id="save"
          className="selector-button"
          disabled={isSaveDisabled}
          onClick={onSave}
        >
          <Locale localizationKey="actionBar.save" />
        </Button>
        <Button
          kl-id="cancel"
          className="selector-button"
          mode="secondary"
          onClick={onClose}
        >
          <Locale localizationKey="actionBar.cancel" />
        </Button>
      </Buttons>
    </Wrapper>
  )
}
