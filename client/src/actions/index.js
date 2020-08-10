export const storeUser = ({ googleId, googleUsername, googleProfileImg }) => {
    return {
        type: "STORE_USER",
        userID: googleId,
        username: googleUsername,
        userImg: googleProfileImg,
    };
};
