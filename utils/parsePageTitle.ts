export const parsePageTitle = (pathname: string) => {
  if (pathname === "/") {
    return "HOME";
  }
  const string = pathname.replace("/", "");
  const stringArr = string.split("_");
  stringArr.forEach((s, index, theArray) => {
    theArray[index] = s.toUpperCase();
  });

  return stringArr.join(" ");
};
