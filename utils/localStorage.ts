const KEY_PREFIX = 'chvlk_';

export const setItem = (key: string, data: any): { key: string; data: any } => {
  const fullKey = `${KEY_PREFIX}${key}`;
  localStorage.setItem(fullKey, JSON.stringify(data));
  return { key, data };
};

export const getItem = (key: string): any => {
  const fullKey = `${KEY_PREFIX}${key}`;
  const val = localStorage.getItem(fullKey);
  if (typeof val === 'string') {
    return JSON.parse(val);
  }
  return val;
};

export const removeItem = (key: string): string => {
  const fullKey = `${KEY_PREFIX}${key}`;
  localStorage.removeItem(fullKey);
  return key;
};

export const clear = (): void => {
  localStorage.clear();
};
