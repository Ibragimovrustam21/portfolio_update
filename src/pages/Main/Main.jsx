import React from 'react';
import { useNavigate } from 'react-router-dom';
import { animateUp } from '../../utils/animation-settings'
import { HomePage, MyButton, Name, Text, Title } from './main.style';

export const Main = () => {
  const navigate = useNavigate()
  const navigateHandler = () => navigate('/portfolio')

  return (
    <HomePage>
      <Title>Здравствуйте, Я</Title>
      <Name>Ибрагимов Рустам</Name>
      <Text>
        Рад вас видеть на моём веб сайте.В этом сайте находиться все мои проекты и моё резюме.Вы можете ближе познакомиться
        с ними.
        Желаю хорошего просмотра:)
      </Text>
      <MyButton onClick={navigateHandler}>
        Портфолио
      </MyButton>
    </HomePage>
  )
}