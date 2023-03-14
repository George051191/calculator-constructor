import React, { FC } from 'react';
import BasicButton from '../ui-lib/BasicButton';
import SwitchButton from '../ui-lib/SwitchButton';
import EqualButton from '../ui-lib/EqualButton';
import { IconEnum } from '../types/switch-button-type';
import BasicScreen from '../ui-lib/Screen';
import ConstructorArea from '../ui-lib/ConstructorArea';
import img from '../vendor/images/image.svg';

const App: FC = () => (
  <ConstructorArea isDragging={false} isVisible={false} image={img} />
);
export default App;
