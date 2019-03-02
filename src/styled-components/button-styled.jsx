
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from '@material-ui/core';



const MButton = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`

export default function SButton() {


    return (
        <div>
            {/* <MButton className="btn primary" */} {/* WILL NOT WORK */}
            <MButton className="btn primary"
                href="https://github.com/styled-components/styled-components"
                target="_blank"
                rel="noopener"
                primary
            >
                GitHub
    </MButton>

            <MButton as={Link} href="https://www.styled-components.com/" prefetch>
                Documentation
    </MButton>
            <MButton
                href="https://www.styled-components.com/docs/basics#extending-styles" 
                prefetch
                target="_blank"
                primary
            >
                Extend Styled Components
    </MButton>
        </div>
    );
}

