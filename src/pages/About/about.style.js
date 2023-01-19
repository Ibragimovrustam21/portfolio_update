import styled from "styled-components";

export const AboutMeContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 20px 0;

  @media (max-width: 446.9px) {
    flex-direction: column-reverse;
  }
`
export const MyInformationWrapper = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 446.9px) {
    width: 100% !important;
  }
`
export const MyInformation = styled.div`
  width: 90%;
  color: #8892b0;
  font-size: 18px;
  letter-spacing: 0.2px;
  margin-bottom: 20px;

  @media (max-width: 446.9px) {
    width: 100% !important;
    margin-top: 20px;
  }
`
export const MySkillsTitle = styled.p`
  color: #8892b0;
  font-size: 20px;
`
export const MySkillsWrapper = styled.ul`
  padding-left: 22px;
`
export const MySkills = styled.li`
  color: #8892b0;
  font-size: 18px;

  &::marker {
    color: #64ffda;
  }
`
export const MyPhoto = styled.div`
  width: 40%;
  height: 100%;

  img {
    width: 100%;
    border-radius: 45px;
  }

  @media (max-width: 446.9px) {
    width: 100% !important;
  }
`



