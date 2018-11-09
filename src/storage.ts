/* eslint-disable no-console */
const teaList = "teaList";

export const saveTeas = data => {
  localStorage.setItem(teaList, JSON.stringify(data));
};

export const loadTeas = () => {
  const data = localStorage.getItem(teaList);
  return data ? JSON.parse(data) : [];
};

// https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2
// export const hydrateStateWithLocalStorage = () => {
//   // for all items in state
//   for (let key in this.state) {
//     // if the key exists in localStorage
//     if (localStorage.hasOwnProperty(key)) {
//       // get the key's value from localStorage
//       let value = localStorage.getItem(key);

//       // parse the localStorage string and setState
//       try {
//         value = JSON.parse(value);
//         this.setState({ [key]: value });
//       } catch (e) {
//         // handle empty string
//         this.setState({ [key]: value });
//       }
//     }
//   }
// };
