import styled from "styled-components";

export const TableContent = styled.table`
  text-align: center;
  width: 50%;
  border-collapse: collapse;
  margin: auto;
  min-width: 300px;
  margin-top: 50px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  
  th {
    text-align: center;
  }
`;