import React, { FC } from 'react';
import BasicButton from '../ui-lib/BasicButton';
import SwitchButton from '../ui-lib/SwitchButton';
import { IconEnum } from '../types/switch-button-type';

const App: FC = () => (
  <SwitchButton isClicked={false} width='108px' iconType={IconEnum.RUN_TIME} buttonText={IconEnum.RUN_TIME} />
);
export default App;
