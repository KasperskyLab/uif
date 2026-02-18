import { ActionButton } from '@src/action-button'
import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  border: 1px solid var(--code_compare--border);
  overflow: hidden;

  .diff-code, .diff-gutter {
    font-family: "Kaspersky Sans Mono", monospace;
  }

  .diff-gutter-col {
    width: 52px;
  }

  .diff-gutter {
    text-align: center;
    color: var(--code_compare--text--secondary);
  }

  .diff-gutter-delete, .diff-gutter-insert {
    color: inherit;
  }

  .diff-code {
    padding-left: 32px;
  }

  .diff-code-delete {
    position: relative;
    &::before {
      content: "-";
      font-size: 16px;
      line-height: 1.3;
      left: 12px;
      position: absolute;
    }
  }

  .diff-code-insert {
    position: relative;
    &::before {
      content: "+";
      font-size: 16px;
      line-height: 1.3;
      left: 12px;
      position: absolute;
    }
  }

  .diff-code-insert .diff-code-edit {
    display: inline-block;
    border-radius: 1px;
    border: 1px solid var(--code_compare_line_modified--border--added_change);
  }

  .diff-code-delete .diff-code-edit {
    display: inline-block;
    border-radius: 1px;
    border: 1px solid var(--code_compare_line_modified--border--removed_change);
  }

  .diff-line:hover {
    background: var(--code_compare_line--unselected--bg--hover);

    .diff-code {
      background: var(--code_compare_line--unselected--bg--hover);
    }
  }

  --diff-background-color: var(--code_compare--bg--base);
  --diff-text-color: var(--code_compare--text--primary);
  --diff-font-family: 'Kaspersky Sans Mono', monospace;
  --diff-selection-text-color: var(--diff-text-color);
  --diff-gutter-insert-background-color: var(--code_compare_line_modified--bg--added_change);
  --diff-gutter-insert-text-color: var(--diff-text-color);
  --diff-gutter-delete-background-color: var(--code_compare_line_modified--bg--removed_change);
  --diff-gutter-delete-text-color: var(--diff-text-color);

  --diff-gutter-selected-text-color: var(--diff-text-color);
  --diff-code-insert-background-color: var(--code_compare_line_modified--bg--added);
  --diff-code-insert-text-color: var(--diff-text-color);
  --diff-code-delete-background-color: var(--code_compare_line_modified--bg--removed);
  --diff-code-delete-text-color: var(--diff-text-color);

  --diff-code-insert-edit-background-color: var(--code_compare_line_modified--bg--added_change);
  --diff-code-insert-edit-text-color: var(--diff-text-color);
  --diff-code-delete-edit-background-color: var(--code_compare_line_modified--bg--removed_change);
  --diff-code-delete-edit-text-color: var(--diff-text-color);

  --diff-code-selected-text-color: var(--diff-text-color);
  --diff-omit-gutter-line-color: initial;
`

export const Header = styled.header`
  padding: 2px 12px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--code_compare--border); 
`

export const Changes = styled.div`
  color: var(--code_compare--text--primary);
  display: flex;
  align-items: center;
  gap: 4px;
`

export const CodeExpandButton = styled(ActionButton)`
  margin-left: 4px;
`
