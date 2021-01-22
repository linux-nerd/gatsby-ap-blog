import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

const SubTitle = styled.p`
  margin-bottom: 0.25rem;
`
const Dot = styled.span`
  margin-left: .5rem;
  margin-right: .5rem;
  display: inline-block;
  text-transform: uppercase;
  font-size: .875rem;
  color: #4a4a4a;
`;

const Small = styled.small`
  text-transform: uppercase;
  font-size: .875rem;
  color: #4a4a4a;
  font-family: Open Sans,sans-serif;
  line-height: 1.5;
`

export const BlogInfo = ({date, timeToRead }) => {
  return (
    <SubTitle>
      <Small>{date}</Small>
      <Dot>·</Dot>
      <Small><FontAwesomeIcon icon={faMugHot} /> {timeToRead} min read</Small>
    </SubTitle>
  )
}