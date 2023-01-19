import React from 'react';
import { animateUp } from '../../utils/animation-settings';
import {
  MyProjectLink,
  ProjectItem,
  IconWrapper,
  IconFolder,
  IconSource,
  ProjectItemName,
  HoverLink,
  Text,
  ProjectImg,
  ProjectItemTechnologies,
  TechnologiesText
} from './myProjects.style.js'

export const MyProject = (props) => {
  const {
    title,
    text,
    technologies,
    url,
    urlGithub,
    adaptive,
    img
  } = props

  return (
    <MyProjectLink target='_blank' rel="noreferrer" href={url}>
      <ProjectItem>
        <IconWrapper>
          <IconFolder>
            <span className='far fa-folder' />
          </IconFolder>
          <IconSource>
            <a target='_blank' rel="noreferrer" href={urlGithub}><span className='fab fa-github hoverLink' /></a>
            <a target='_blank' rel="noreferrer" href={url}><span className='fas fa-external-link-alt hoverLink' /></a>
          </IconSource>
        </IconWrapper>
        <ProjectItemName>
          <HoverLink>{title}</HoverLink>
          <Text>{text} <span>{adaptive}</span></Text>
          <ProjectImg src={img} alt="" />
        </ProjectItemName>

        <ProjectItemTechnologies>
          {technologies.map(item => <TechnologiesText key={item}>{item}</TechnologiesText>)}
        </ProjectItemTechnologies>
      </ProjectItem>
    </MyProjectLink>
  )
}


