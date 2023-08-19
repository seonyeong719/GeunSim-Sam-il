import { css } from "styled-components";

export const ModalBackground = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const FlexAllCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const FlexJustifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const FlexSpaceBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GridAllCenter = css`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const GridColumn = (num: number) => css`
  grid-template-columns: repeat(${num}, 1fr);
  row-gap: 30px;
  column-gap: 30px;
`;

export const GridGap = {
  mobile: css`
    row-gap: 15px;
    column-gap: 15px;
  `,
  tablet: css`
    row-gap: 20px;
    column-gap: 20px;
  `,
};
