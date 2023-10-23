export const dateStringFormatter = (str, locale = false) => {
    const d = new Date(str);
  
    if (locale) {
      return d.toLocaleDateString("cs-CZ", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  
    const year = d.getFullYear();
    const month = "" + (d.getMonth() + 1);
    const day = "" + d.getDate();
  
    return [ day, month, year].join(". ");
  };
  
  export default dateStringFormatter;