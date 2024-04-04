import React from 'react'
import { Button } from '@src/button'
import { Locale } from '@src/locale'
import styled from 'styled-components'

type ColumnSelectionActionsProps = {
  onSave: () => void,
  onClose: () => void,
  isSaveDisabled?: boolean
};

const Buttons = styled.div`
  display: flex;
  gap: 12px;
`

const ColumnSelectionActions: React.FC<ColumnSelectionActionsProps> = ({
  onSave,
  onClose,
  isSaveDisabled
}) => {
  return (
    <Buttons>
      <Button
        data-testid="table-settings-save"
        kl-id="save"
        className="selector-button"
        disabled={isSaveDisabled}
        onClick={onSave}
      >
        <Locale localizationKey="actionBar.save" />
      </Button>
      <Button
        data-testid="table-settings-cancel"
        kl-id="cancel"
        className="selector-button"
        mode="secondary"
        onClick={onClose}
      >
        <Locale localizationKey="actionBar.cancel" />
      </Button>
    </Buttons>
  )
}

export default React.memo(ColumnSelectionActions)
