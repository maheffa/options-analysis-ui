import * as React from 'react';
import { PageTitle } from "../../components/PageTitle";
import { Button, InputGroup, Label } from '@blueprintjs/core'

interface IChainProps {
}

export const Chain: React.FunctionComponent<IChainProps> = () => (
  <div>
    <PageTitle title="Chain Info" subtitle="Best attempt at visualizing options and risk of different strategies."/>
    <Label>
        Search stock
        <InputGroup
          placeholder="Enter a company ticker symbol ..."
          rightElement={<Button icon="arrow-right"/>}
          type="text"
        />
    </Label>
  </div>
);
