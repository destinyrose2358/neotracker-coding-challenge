
export const normalizeBy = (data, field = "id") => {
    let normalizedData = {};
    let stndData;

    switch (data.constructor) {
        case Array:
            stndData = data;
            break;
        case Object:
            stndData = Object.values(data);
            break;
        default:
            return;
    }

    stndData.forEach(entry => normalizedData[entry[field]] = entry);
    return normalizedData;
}