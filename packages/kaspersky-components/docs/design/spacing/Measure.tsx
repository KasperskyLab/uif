import styled from 'styled-components';
import spacing, { SpacingName } from '../../../design-system/spacing';

const Measure = styled('div')<{ spacing: SpacingName }>`
  border-top: 1px solid #FF6060;
  border-bottom: 1px solid #FF6060;
  height: ${props => spacing(props.spacing)};
  position: relative;
  display: block;
  margin-right: 14px;
  
  &:after {
    position: absolute;
    background: #FF6060;
    color: white;
    right: -2px;
    font-size: 12px;
    border-radius: 2px;
    height: 20px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    content: '${props => spacing[props.spacing]}';
    top: 50%;
    transform: translate(100%, -50%);
  }
`

export default Measure
