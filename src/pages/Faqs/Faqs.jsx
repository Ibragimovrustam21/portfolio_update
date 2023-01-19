import React from 'react'
import { Divider } from 'antd'
import { FaqsContainer, Question, QuestionsWrapper, Respond } from './faqs.style'
import { Wrapper, DividerBox } from '../../styles/global.style'

export const Faqs = () => (
  <Wrapper>
    <FaqsContainer>
      <DividerBox>
        <Divider className='divider-title' orientation="left">
          <h3><span>04.</span>Вопросы</h3>
        </Divider>
      </DividerBox>
      <div>
        <QuestionsWrapper >
          <Question><span className='far fa-circle' /> Сколько тебе лет?</Question>
          <Respond>Родился 21 октября 2000г.Мне 22 года</Respond>
        </QuestionsWrapper>
        <QuestionsWrapper >
          <Question><span className='far fa-circle' /> Откуда ты?</Question>
          <Respond>Из города Зарафшана(Наваинская область)</Respond>
        </QuestionsWrapper>
        <QuestionsWrapper>
          <Question><span className='far fa-circle' /> Ты учишься или работаешь где-то?</Question>
          <Respond>Да, учусь в Ташкентском государственном транспортном университете</Respond>
        </QuestionsWrapper>
        <QuestionsWrapper>
          <Question><span className='far fa-circle' /> Где ты изучал программирование?</Question>
          <Respond>Изучал программирование в социальных сетях, включая Udemy.com, Youtube.com</Respond>
        </QuestionsWrapper>
      </div>
    </FaqsContainer>
  </Wrapper>
)
