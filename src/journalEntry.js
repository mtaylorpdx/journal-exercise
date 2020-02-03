export function JournalEntry() {
  this.title = "default";
  this.entry = "default";
  this.vowelTotal = 0;
  this.consonantTotal = 0;
  this.tease = "default";
}

JournalEntry.prototype.setTitle = function(title) {
  this.title = title;
};

JournalEntry.prototype.setEntry = function(entry) {
  this.entry = entry;
};

JournalEntry.prototype.findVowel = function(entry) {
  var vowel = ["a", "e", "i", "o", "u"];
  var vowelTotal = 0;
  var entryArray = entry.toLowerCase().split("");
  entryArray.forEach(function(char) {
    if (vowel.includes(char)) {
      vowelTotal += 1;
    }
  });
  this.vowelTotal = vowelTotal;
  console.log(vowelTotal);
};

JournalEntry.prototype.findConsonant = function(entry) {
  var consonantTotal = 0;
  var consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var entryArray = entry.toLowerCase().split("");
  entryArray.forEach(function(char) {
    if (consonant.includes(char)) {
      consonantTotal += 1;
    }
  });
  this.consonantTotal = consonantTotal;
};

JournalEntry.prototype.createTease = function(entry) {
  var teaseSentence = []
  var entryArray = entry.split(" ");
  for (var i = 0; i < 8; i++) {
    if (entryArray[i].includes("!")) {
      teaseSentence.push(entryArray[i]);
      break
    } else if (entryArray[i].includes(".")) {
      teaseSentence.push(entryArray[i]);
      break
    } else if (entryArray[i].includes("?")) {
      teaseSentence.push(entryArray[i]);
      break
    } else {
      teaseSentence.push(entryArray[i]);
      if(i === entryArray.length - 1){
        break
      } console.log (i);
    }
  }
  this.tease = teaseSentence;
}