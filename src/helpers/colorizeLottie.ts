import set from 'lodash.set';

type RGB = {r: number; g: number; b: number};
// TO DO: move to types
type LottieFile = {[key: string]: unknown};
type ObjectStr = {[key: string]: string};

function hexToRgb(hex: string): null | RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1] || '0', 16),
        g: parseInt(result[2] || '0', 16),
        b: parseInt(result[3] || '0', 16),
      }
    : null;
}

export default function colorizeLottie(json: LottieFile, colorByPath: ObjectStr) {
  const nextJson = JSON.parse(JSON.stringify(json));

  Object.entries(colorByPath).forEach(([path, color]) => {
    if (!color) {
      return;
    }

    const rgbValues = hexToRgb(color);
    if (!rgbValues) {
      return;
    }

    const rFraction = rgbValues.r / 255;
    const gFraction = rgbValues.g / 255;
    const bFraction = rgbValues.b / 255;

    const pathParts = path.split('.');
    set(nextJson, [...pathParts, 0], rFraction);
    set(nextJson, [...pathParts, 1], gFraction);
    set(nextJson, [...pathParts, 2], bFraction);
  });

  return nextJson;
}
