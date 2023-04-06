import React from 'react';
import { Divider } from 'antd';
import my_photo from '../../assets/i am.jpg'
import { DividerBox, Wrapper } from '../../styles/global.style'
import { AboutMeContainer, MyInformation, MyInformationWrapper, MyPhoto, MySkills, MySkillsTitle, MySkillsWrapper } from './about.style';

export const About = () => (
  <Wrapper>
    <DividerBox>
      <Divider className='divider-title' orientation="left">
        <h3><span>02.</span>Про меня</h3>
      </Divider>
    </DividerBox>
    <AboutMeContainer>
      <MyInformationWrapper>
        <MyInformation>
          Меня зовут Рустам. Я являюсь фронтенд React разработчиком. Изучал программирование в социальных сетях,
          включая Udemy.com, Youtube.com.
          Я считают себя позитивным, стремительным, целеустремленным, ответственным.
          Знаю русский и английский.На русском могу свободно общаться.
        </MyInformation>
        <MySkillsTitle>Мои навыки:</MySkillsTitle>
        <MySkillsWrapper>
          <MySkills>HTML5</MySkills>
          <MySkills>CSS3 / SASS</MySkills>
          <MySkills>Bootstrap</MySkills>
          <MySkills>Ant Design</MySkills>
          <MySkills>Tailwind CSS</MySkills>
          <MySkills>Javascript (ES6)</MySkills>
          <MySkills>React js (Redux,Xook)</MySkills>
          <MySkills>Next js</MySkills>
          <MySkills>Typescript</MySkills>
          <MySkills>Git</MySkills>
        </MySkillsWrapper>
      </MyInformationWrapper>
      <MyPhoto>
        <img src={my_photo} alt='mening_rasmim' />
      </MyPhoto>
    </AboutMeContainer>
  </Wrapper>
);
