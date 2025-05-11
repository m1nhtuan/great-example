const STORAGE_PREFIX = 'todo_app_';

export const storage = {
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage:`, error);
      return null;
    }
  },

  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item ${key} in localStorage:`, error);
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error);
    }
  },

  clear: (): void => {
    try {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(STORAGE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
}; 