export const [API_URL, Base_URL] =
        !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ?
        ["http://localhost:3001", "http://localhost:3000"]
    :
        [];
