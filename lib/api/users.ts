import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "../auth";

export interface User {
  id: number;
  name: string;
  email: string;
  authProvider: string;
  accessToken?: string;
  googleId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  googleId?: string;
  password?: string;
  authProvider?: string;
}

export const getCurrentUser = async (): Promise<User | null> => {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as User)?.accessToken) {
    return null;
  }

  return session.user as User;
};

const getHeaders = async () => {
  const session = await getSession();
  const token = (session?.user as User)?.accessToken ?? null;
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:9000";

export const UserService = {
  /**
   * Get all registered users.
   */
  async getAllUsers(): Promise<User[]> {
    const headers = await getHeaders();
    const response = await fetch(`${getBaseUrl()}/auth/users`, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  },

  /**
   * Get a specific user by their numeric ID.
   */
  async getUserById(id: number): Promise<User> {
    const headers = await getHeaders();
    const response = await fetch(`${getBaseUrl()}/auth/users/${id}`, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user with id ${id}`);
    }
    return response.json();
  },

  /**
   * Update partial user data by their ID.
   */
  async updateUser(id: number, payload: UpdateUserPayload): Promise<User> {
    const headers = await getHeaders();
    const response = await fetch(`${getBaseUrl()}/auth/users/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to update user with id ${id}`);
    }
    return response.json();
  },

  /**
   * Permanently delete a user account from the database.
   */
  async deleteUser(id: number): Promise<void> {
    const headers = await getHeaders();
    const response = await fetch(`${getBaseUrl()}/auth/users/${id}`, {
      method: "DELETE",
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to delete user with id ${id}`);
    }
  },
};
