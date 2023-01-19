import styled from "styled-components";

export const HomePage = styled.div`
  width: 90%;
  margin: 0 auto;
  left: 10%;
  right: 10%;
  padding: 0 20px;
  box-sizing: border-box;
  padding-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  @media (max-width: 446.9px) {
    width: 100%;
    padding: 0;
    height: auto;
    padding-top: 120px;
    overflow: hidden !important;
  }
`
export const Title = styled.h4`
  font-size: 25px;
  color: #64ffda;
  @media (max-width: 446.9px){
    font-size: 20px;
  }
`
export const Name = styled.h2`
  font-size: 50px;
  color: #ccd6f6;
  text-align: center;
  
  @media (max-width: 446.9px) {
   font-size: 30px;
  }
`
export const Text = styled.p`
  width: 60%;
  font-size: 20px;
  color: #8892b0;
  text-align: center;
  @media (max-width: 446.9px) {
    width: 90%;
    font-size: 18px;
  }
`
export const MyButton = styled.button`
  color: #64ffda;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 14px 20px;
  font-size: 16px;
  text-align: center;
  letter-spacing: 1px;
  margin-top:15px;
  cursor: pointer;
  
  &:hover {
    background-color: #64ffda;
    color: #0a192f;
    border: 1px solid transparent;
  }
`