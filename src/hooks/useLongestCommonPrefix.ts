const useLongestCommonPrefix = () => {
  const checkPrefix = (s: string[]) => {
    if (s.length === 1) return s[0];
    let prefixLen = 0;

    const prefix = s[0].slice(0, s[0].length);
    for (let i = 0; i < s.length; i++) {
      if (i !== 0 && prefix === s[i].slice(0, 2)) {
        prefixLen = prefixLen + 1;
      }
    }
    return prefixLen ? prefix : "";
  };

  console.log(checkPrefix(["flower"]));
};

export default useLongestCommonPrefix;
