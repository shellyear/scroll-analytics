export const addResult = (data, flag) => {
    return {
        type: "ADD_RESULT",
        payload: {
            data,
            flag
        }
    };
};