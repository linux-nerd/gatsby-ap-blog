import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

const TagItem = styled.span`
  margin-right: 5px;
  font-size: 0.75rem;
  color: #4a4a4a;
  font-family: Open Sans,sans-serif;
  line-height: 1.5;
  text-transform: lowercase; 
`

export const Tags = ({tags}) => {
  return (
    <section>
      {
        tags.map(tag => <TagItem key={tag}><FontAwesomeIcon icon={faHashtag} /> {tag}</TagItem>)
      }
    </section>
  )
}