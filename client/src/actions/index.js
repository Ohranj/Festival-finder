export const storeUser = ({
    googleId,
    googleUsername,
    googleProfileImg,
    name,
}) => {
    return {
        type: "STORE_USER",
        userID: googleId,
        username: googleUsername,
        userImg: googleProfileImg,
        name,
    };
};
