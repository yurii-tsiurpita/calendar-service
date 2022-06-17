export interface UnknownObject {
    [index: string]: unknown;
}

const filterObject = (object: UnknownObject, nonAllowedKeys: string[]): unknown => {
    const filteredObject: UnknownObject = {};
    Object.keys(object).forEach(key => {
        if (!nonAllowedKeys.includes(key)) filteredObject[key] = object[key];
    });
    return filteredObject;
};

export default filterObject;