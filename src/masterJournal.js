export function MasterJournal() {
  this.entries = [],
  this.currentId = 0;
}
MasterJournal.prototype.addJournalEntry = function(entry) {
  entry.id =this.assignId();
  this.entries.push(entry);
};
MasterJournal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

export function displayJournalDetails(journalEntryToDisplay) {
  var entryList = $("ul#entries");
  var htmlForEntryInfo = "";
  journalEntryToDisplay.entries.forEach(function(journalEntry){
    htmlForEntryInfo += "<li id=" + journalEntry.id + "><span class='day'>" + journalEntry.title + "</span> " + journalEntry.entry + " Vowels in entry: " + journalEntry.vowelTotal + " Consonants in entry: " + journalEntry.consonantTotal +  "</li>";
  });
  entryList.html(htmlForEntryInfo)
}

MasterJournal.prototype.findId = function(id) {
  for (var i=0; i < this.entries.length; i++) {
    if (this.entries[i]) {
      if (this.entries[i].id == id) {
        return this.entries[i];
      }
    }
  }
  return false;
};