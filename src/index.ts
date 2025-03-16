import { records } from "./records/data.js";
import { renderHeader } from "./ui/renderHeader.js";
import { renderRecordsList } from "./ui/renderRecordsList.js";
import { renderRecordOfTheMonth } from "./ui/renderRecordOfTheMonth.js";

renderHeader();
renderRecordsList(records);
renderRecordOfTheMonth(records);
