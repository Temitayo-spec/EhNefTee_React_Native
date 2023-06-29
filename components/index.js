// Desc: This file is used to export all the components in the components folder

//Common components
export { default as NFTCard } from './common/NFTCard';
export { default as FocusedStatusBar } from './common/FocusedStatusBar';
import { CircleButton, RectButton } from './common/Button';
export const Buttons = { CircleButton, RectButton };
//Home components
export { default as HomeHeader } from './home/HomeHeader';
import { SubInfo, ETHPrice, NFTTile, EndDate } from './home/SubInfo';
export const HomeComponents = { SubInfo, ETHPrice, NFTTile, EndDate };
