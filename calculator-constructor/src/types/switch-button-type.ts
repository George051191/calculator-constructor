export enum IconEnum {
  RUN_TIME = 'Runtime',
  CONSTRUCTOR = 'Constructor',
}

export type TSwithButtonType = {
  isClicked: boolean;
  width: string;
  iconType: IconEnum;
  buttonText: IconEnum;
};
