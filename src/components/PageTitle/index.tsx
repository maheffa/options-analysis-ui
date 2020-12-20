import * as React from 'react';
import styled from "styled-components";

interface IPageTitleProps {
  title: string;
  subtitle?: string;
}

const Header = styled.header`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const PageTitle: React.FunctionComponent<IPageTitleProps> = ({title, subtitle}) => (
  <Header>
    <h1 className="bp3-heading">{title}</h1>
    {subtitle
      ? <p className="bp3-text-small bp3-text-muted">Best attempt at visualizing options and risk of different
        strategies.</p>
      : null
    }
  </Header>
);
