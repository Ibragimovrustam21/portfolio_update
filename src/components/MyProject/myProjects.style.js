import styled from "styled-components";

export const MyProjectLink = styled.a`
  margin: 0;
  width: 30%;
  text-decoration: none;
  margin-right: 20px;
  margin-top: 20px;

  @media (max-width: 446.9px) {
    width: 100%;
  }
`
export const HoverLink = styled.h4`
  height: auto;
  max-height: 60px;
  font-size: 20px;
  color: #a8b2d1;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 446.9px) {
    font-size: 18px
  }
`
export const ProjectItem = styled.div`
  max-height: 570px;
  background-color: #112240;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-sizing: border - box;
  padding: 20px;
  margin: 0;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    transition: all 0.25s cubic - bezier(0.645, 0.045, 0.355, 1);
  }
  &:hover ${HoverLink}{
    color: #64ffda;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`
export const IconWrapper = styled.div`
  /* height: 10%; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const IconFolder = styled.div`
  span {
    padding: 10px;
    padding-left: 0;
    font-size: 40px;
    cursor: pointer;
    color: #64ffda;
  }
`
export const IconSource = styled.div`
  a{
    text-decoration: none;
    margin: 0!important;
    padding: 10px;

    span {
      font-size: 20px;
      color: #a8b2d1;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
`
export const ProjectItemName = styled.div`
  /* height: 65%; */
  width: 100%;
  margin: 10px 0;
`
export const Text = styled.p`
  color: #8792af;
  font-size: 18px;
  margin-top: 15px;
  height: auto;
  max-height: 120px;

  span {
    color: #64ffda;
  }
  @media (max-width:446.9px) {
    font-size: 16px;
  }
`
export const ProjectImg = styled.img`
  height: 180px;
  width: 100%;
  border-radius: 10px;
  /* margin-top: 15px; */
`
export const ProjectItemTechnologies = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`
export const TechnologiesText = styled.p`
  margin-right: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #8792af;
  
  @media (max-width:446.9px) {
    font-size: 12px;
  }
`