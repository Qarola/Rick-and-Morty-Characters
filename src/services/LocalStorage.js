const get = (key, defaultData) => {
    const data = localStorage.getItem(key);
    if (data === null) {
        return defaultData;
    } else {
        return data;
    }
};

const set = (key, value) => {
    localStorage.setItem(key, value)
};

const LocalStorage = { get: get, set: set};

export default LocalStorage;