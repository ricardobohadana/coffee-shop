interface PersistentStorage {
  getItem<T>(key: string): T | null | undefined;
  setItem(key: string, value: any): void;
}

class LocalStorage implements PersistentStorage {
  getItem<T>(key: string): T | null | undefined {
    const item = localStorage.getItem(key);

    if (item === null) return undefined;

    if (item === "null") return null;
    if (item === "undefined") return undefined;

    try {
      return JSON.parse(item) as T;
    } catch {
      console.log(null);
      return null;
    }
  }
  setItem(key: string, value: any) {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}

class MockStorage implements PersistentStorage {
  getItem(key: string) {
    return null;
  }
  setItem(key: string, value: any) {}
}

const persistentStorage = window?.localStorage
  ? new LocalStorage()
  : new MockStorage();

export function useLocalStorage() {
  return {
    getItem: persistentStorage.getItem,
    setItem: persistentStorage.setItem,
  };
}
