export function JournalEntry() {
  this.title = "default";
  this.entry = "default";
}

JournalEntry.prototype.setTitle = function(title) {
  this.title = title;
}

JournalEntry.prototype.setEntry = function(entry) {
  this.entry = entry;
}