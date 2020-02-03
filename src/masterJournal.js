export function MasterJournal() {
  this.entries = [],
  this.currentId = 0;
}
MasterJournal.prototype.addJournalEntry = function(entry) {
  entry.id =this.assignId();
  this.entries.push(entry);
}
MasterJournal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}