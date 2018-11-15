/* eslint-disable no-console */

export const loadTeas = () => {
  const data = localStorage.getItem("state");
  try {
    return data ? JSON.parse(data) : undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveTeas = (data: any) => {
  try {
    localStorage.setItem("state", JSON.stringify(data));
  } catch (err) {
    // Ignore write errors
  }
};
