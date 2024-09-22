import { API_URL } from "../../constants";
import { SignupResponse } from "../../types/interfaces";

export const signup = async (email: string, password: string): Promise<SignupResponse> => {
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Signup failed');
    }

    return await response.json() as SignupResponse;
};






