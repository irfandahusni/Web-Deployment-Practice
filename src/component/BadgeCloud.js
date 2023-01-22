import React from 'react'
import Badge from './Badge'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:25%;
    gap:10px;
`

const BadgeCloud = () => {
  return (
    <StyledDiv>
        <Badge text="Figma" className="badge-primary"/> 
        <Badge text="Framer JS" className="badge-secondary"/> 
        <Badge text="Framer X" className="badge-secondary"/> 
        <Badge text="Invision" className="badge-primary"/> 
        <Badge text="UXPin" className="badge-secondary"/> 
        <Badge text="youjizz" className="badge-primary"/> 
        <Badge text="brazzer" className="badge-secondary"/> 
        <Badge text="adobeXD" className="badge-secondary"/> 
        <Badge text="Affinity" className="badge-primary"/> 
        <Badge text="Justinmind" className="badge-secondary"/> 
        <Badge text="Atome.io" className="badge-secondary"/> 
        <Badge text="Damn" className="badge-primary"/> 
    </StyledDiv>
  )
}

export default BadgeCloud