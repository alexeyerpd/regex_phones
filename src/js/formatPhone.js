function clearIncorrectSymbols(str) {
  return str.replace(/[^\d+]/g, '');
}

function replacer(_match, p1) {
  return `+7${clearIncorrectSymbols(p1)}`;
}

export function formatPhone(str) {
  if (/^\+/.test(str)) {
    return clearIncorrectSymbols(str);
  }

  if (str.startsWith('8')) {
    return str.replace(/(?:8)(.*)/s, replacer);
  }

  return clearIncorrectSymbols(str);
}
