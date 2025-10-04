import { capitalize } from "lodash";

export const formatString = (string) => {
  if (string.includes("&")) {
    const stringArray = string.split("&");
    const formattedString = stringArray.map((element) => capitalize(element)).join(" & ");
    return formattedString;
  }

  return capitalize(string);
};
