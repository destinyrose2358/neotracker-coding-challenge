
export const startQueryParams = (baseURL = "", queryParams = {}) => (
    addQueryParams(`${baseURL}?`, queryParams)
)

export const addQueryParams = (currentURL="", queryParams = {}) => (
    `${currentURL}${Object.entries(queryParams).reduce((acc, [param, value]) => (
        `${acc}&${param}=${value}`
    ))}`
);