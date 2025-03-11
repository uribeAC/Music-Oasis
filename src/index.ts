import { records } from "./records/data.js";
import { renderHeader } from "./ui/renderHeader.js";
import { renderRecordsList } from "./ui/renderRecordsList.js";

renderHeader();
renderRecordsList(records);
