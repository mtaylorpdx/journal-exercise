import { JournalEntry } from './journalEntry';
import { MasterJournal } from './masterJournal';
import { displayJournalDetails } from './masterJournal';
import './styles.css';


var masterJournal = new MasterJournal;

$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    var text = $("textarea#entry").val();
    var title = $("input#title").val();
    var journalEntry = new JournalEntry();
    journalEntry.setTitle(title);
    journalEntry.setEntry(text);
    journalEntry.findVowel(journalEntry.entry);
    journalEntry.findConsonant(journalEntry.entry);
    journalEntry.createTease(journalEntry.entry);
    masterJournal.addJournalEntry(journalEntry);
    displayJournalDetails(masterJournal)
    console.log(journalEntry);
  });
});