export interface JournalEntry {
	id: string;
	title: string;
	content: string;
	date: Date;
}

export class Journal {
	private entries: JournalEntry[] = [];

	addEntry(entry: JournalEntry): void {
		this.entries.push(entry);
	}

	getEntries(): JournalEntry[] {
		return this.entries;
	}

	findEntryById(id: string): JournalEntry | undefined {
		return this.entries.find((entry) => entry.id === id);
	}
}
