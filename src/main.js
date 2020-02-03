import { JournalEntry } from './journalEntry';
import { MasterJournal } from './masterJournal';

import './styles.css';


var masterJournal = new MasterJournal

$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    var text = $("textarea#entry").val();
    var title = $("input#title").val();
    var journalEntry = new JournalEntry();
    journalEntry.setTitle(title);
    journalEntry.setEntry(text);
    masterJournal.addJournalEntry(journalEntry);
    console.log(masterJournal);
  });
});