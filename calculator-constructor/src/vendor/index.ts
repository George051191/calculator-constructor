import { createGlobalStyle } from 'styled-components';
import InterBold from './inter/Inter-ExtraBold.ttf';
import InterMedium from './inter/Inter-Medium.ttf';
import InterRegular from './inter/Inter-Regular.ttf';

const InterFonts = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterBold}) format('truetype');
        font-weight: 800;
        font-style: normal;
    }
`;

export default InterFonts;