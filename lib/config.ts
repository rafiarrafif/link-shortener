"use server";

export const config = () => {
  return {
    apiUrl: process.env.ADMIN_PREFIX as string,
  };
};
