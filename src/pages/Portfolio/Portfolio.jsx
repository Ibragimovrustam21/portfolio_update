import React from 'react';
import { Divider } from 'antd';
import { MyProject } from '../../components/MyProject/MyProject';
import { projectData } from '../../data/project-data'
import { DividerBox, Wrapper } from '../../styles/global.style'
import { MyProjectsContainer } from './portfolio.style';

export const Portfolio = () => {
  return (
    <Wrapper>
      <DividerBox>
        <Divider className='divider-title' orientation="left">
          <h3><span>03.</span>Портфолио</h3>
        </Divider>
      </DividerBox>
      <MyProjectsContainer>
        {
          projectData.map((item, key) => {
            const { title, text, adaptive, technologies, url, urlGithub, animeTime, img } = item
            return (
              <MyProject
                key={key}
                title={title}
                text={text}
                adaptive={adaptive}
                technologies={technologies}
                url={url}
                urlGithub={urlGithub}
                animeTime={animeTime}
                img={img}
              />
            )
          })
        }
      </MyProjectsContainer>
    </Wrapper>
  )
}
