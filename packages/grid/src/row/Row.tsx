import React from 'react';
import { StyledCell, RowStyled } from '../styled/styled';
import { IColumn, IRow, IRowProps } from '../interfaces';


export const Row: React.FC<IRow> = React.memo((props: IRowProps) => {
  const {
    row,
    isSelected,
    rowId,
    onChangeActiveRow,
    columns,
    theme,
  } = props;

  return (
    <RowStyled
      isSelected={ isSelected }
      theme={ theme }
      onClick={ (): undefined => onChangeActiveRow(rowId) }
    >
      { columns.map((column: IColumn) => {
        const { render, field, width } = column;
        const cellContent = render ? render(row) : row[field];

        return (
          <StyledCell
            key={ field }
            theme={ theme.cell }
            width={ width }
          >
            { cellContent }
          </StyledCell>
        );
      }) }
    </RowStyled>
  );
});