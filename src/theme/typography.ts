import {scaleFont} from '../helpers/fonts';
import {completeText, parseLiterals} from '../helpers/templateLiterals';

export const fontSizes = {
  fontSize10: scaleFont(10),
  fontSize11: scaleFont(11),
  fontSize12: scaleFont(12),
  fontSize13: scaleFont(13),
  fontSize34: scaleFont(34),
  fontSize14: scaleFont(14),
  fontSize16: scaleFont(16),
  fontSize18: scaleFont(18),
  fontSize22: scaleFont(22),
  fontSize28: scaleFont(28),
};

export const leadings = {
  leading14: scaleFont(14),
  leading23: scaleFont(23),
  leading24: scaleFont(24),
  leading27: scaleFont(27),
  leading32: scaleFont(32),
  leading40: scaleFont(40),
  leading46: scaleFont(46),
};

export function fontSize(literals: TemplateStringsArray) {
  const name = completeText(parseLiterals(literals), 'fontSize');
  if (!(name in fontSizes)) {
    throw new Error(`Requested font size ${name} not found. You can compose it with scaleFont helper`);
  }
  return fontSizes[name as keyof typeof fontSizes];
}

export function leading(literals: TemplateStringsArray) {
  const name = completeText(parseLiterals(literals), 'leading');
  if (!(name in leadings)) {
    throw new Error(`Requested font size ${name} not found. You can compose it with scaleFont helper`);
  }
  return leadings[name as keyof typeof leadings];
}
