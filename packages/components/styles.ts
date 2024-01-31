import styled, {css} from 'styled-components';
import {ButtonVariant} from './MeaninglessButton';

type StyledMeaninglessButtonProps = {
  $variant: ButtonVariant;
};

export const MeaninglessButton = styled.button<StyledMeaninglessButtonProps>`
  background: gray;
  color: #fff;
  border-width: 1px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  min-height: 28px;
  min-width: 120px;
  padding: 0px 12px;
  font-size: 14px;
  transition:
    color 0.16s ease-in-out,
    background-color 0.16s ease-in-out;

  ${({$variant}) => {
    switch ($variant) {
      case 'danger':
        return css`
          background-color: red;
          border-color: red;
          color: white;

          &:hover {
            background-color: white;
            color: red;
          }
        `;
      case 'primary':
      default:
        return css`
          background-color: #6366f1;
          border-color: #6366f1;
          color: white;

          &:hover {
            background-color: white;
            color: #6366f1;
          }
        `;
    }
  }}
`;
