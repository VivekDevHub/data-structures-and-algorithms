// Check Vowel / Consonant Using switch

let ch = "a";

switch (ch.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;

  default:
    console.log("Consonant");
}
