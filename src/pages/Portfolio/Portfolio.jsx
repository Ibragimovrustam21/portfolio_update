import React from 'react';
import { Divider } from 'antd';
import { MyProject } from '../../components/MyProject';
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
            const { title, text, technologies, url, urlGithub, img } = item
            return (
              <MyProject
                key={key}
                title={title}
                text={text}
                img={img}
                technologies={technologies}
                url={url}
                urlGithub={urlGithub}
              />
            )
          })
        }
      </MyProjectsContainer>
    </Wrapper>
  )
}
