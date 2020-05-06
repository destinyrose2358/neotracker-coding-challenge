
export const startQueryParams = (baseURL = "", queryParams = {}) => (
    addQueryParams(`${baseURL}?`, queryParams)
);

export const addQueryParams = (currentURL="", queryParams = {}) => (
    Object.entries(queryParams).reduce((acc, [param, value]) => (
        value instanceof Array ?
            acc + value.reduce((attrAcc, entry) => (
                attrAcc + `${param}=${entry}&`
            ), "")
        :
            `${acc}${param}=${value}&`
    ), currentURL)
);