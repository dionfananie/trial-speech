const useWordBreak = () => {
  const mainFunc = (s: string, dict: string[]) => {
    let value = 0;

    const looping = () => {
      for (let i = 0; i < dict.length; i++) {
        if (s.includes(dict[i])) {
          value = value + 1;
          s = s.replace(dict[i], "");
        }
      }
    };

    console.log(s);

    return s.length === 0;
  };

  console.log(mainFunc("applepenapple", ["apple", "pen"]));
};

export default useWordBreak;
