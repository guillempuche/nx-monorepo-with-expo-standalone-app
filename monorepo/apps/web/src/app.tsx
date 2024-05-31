import { Journal, type JournalEntry } from "@monorepo/domain";

const journal = new Journal();

const entry: JournalEntry = {
	id: "1",
	title: "My First Entry",
	content: "This is the content of the first entry.",
	date: new Date(),
};

journal.addEntry(entry);

export function App() {
	return (
		<div>
			<h1>Journal Entries</h1>
			<ul>
				{journal.getEntries().map((entry) => (
					<li key={entry.id}>
						<h2>{entry.title}</h2>
						<p>{entry.content}</p>
						<p>{entry.date.toDateString()}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
