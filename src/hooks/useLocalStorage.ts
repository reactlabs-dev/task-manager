import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {

    // get from local storage then
    // parse and set to state
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;    

    const [value, setValue] = useState<T>(initial);

    // return a wrapped version of useState's setter function
    // that persists the new value to localStorage
    const setStoredValue = (valueToStore: T) => {
        setValue(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
    }

    return [value, setStoredValue];
}

export default useLocalStorage;