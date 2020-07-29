import { criminalList } from "./criminals/CriminalList.js";
import { convictionSelect } from "./convictions/ConvictionSelect.js";
import { officerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./notes/NoteForm.js";
import { knownAssociates,  } from "./criminals/KnownAssociates.js";
import { NoteButton } from "./notes/NoteButton.js";
import  "./notes/NoteList.js";

criminalList()
convictionSelect()
officerSelect()
NoteForm()
knownAssociates()
NoteButton()