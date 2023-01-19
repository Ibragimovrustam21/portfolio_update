import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 150px;
`
export const DividerBox = styled.div`
  width: 350px;
  min-width: 100px;

  .ant-divider-horizontal.ant-divider-with-text {
    border-top: #fff !important;
  }

  @media (max-width: 446.9px){
    width: 300px;
  }
`
export const MyProject = styled.div`
  position: relative;
  overflow: hidden;
`

