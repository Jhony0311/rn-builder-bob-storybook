export function completeText(str: string, value: string, position: 'leading' | 'trailing' = 'leading') {
  if (str.includes(value)) {
    return str;
  }
  if (position === 'leading') {
    return `${value}${str}`;
  }
  return `${str}${value}`;
}

export function parseLiterals(literals: TemplateStringsArray) {
  return literals.join('');
}
