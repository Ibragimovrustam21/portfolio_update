import styled from "styled-components";

export const FaqsContainer = styled.div`
  height: auto;
`

export const QuestionsWrapper = styled.div`
  margin-top: 30px;
  @media (max-width: 446.9px){
    margin-top: 20px;
  }
`

export const Question = styled.h4`
  font-size: 22px;
  color: #a8b2d1;

  span {
    color: #64ffda;
    font-size: 12px;
  }
  @media (max-width: 446.9px){
    font-size: 20px;
  }
`
export const Respond = styled.p`
  width: 70%;
  font-size: 18px;
  color: #8792af;
  @media (max-width: 446.9px){
    width: 100%;
    font-size: 16px;
  }
`

