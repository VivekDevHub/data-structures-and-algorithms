function countVowelsConsonants(str) {
  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (
      ch === "a" ||
      ch === "e" ||
      ch === "i" ||
      ch === "o" ||
      ch === "u"
    ) {
      vowels++;
    } else if (ch >= "a" && ch <= "z") {
      consonants++;
    }
  }

  console.log("Vowels:", vowels);
  console.log("Consonants:", consonants);
}

countVowelsConsonants("Hello World");