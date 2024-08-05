// utils/api.js
export const getUserByEmail = async (email: string) => {
    try {
        const response = await fetch(
            `http://localhost:8080/api/user/email/${email}`,
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error fetching user by email:", error);
        return null;
    }
};

export const getUserById = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:8080/api/user/id/${id}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        return null;
    }
};
