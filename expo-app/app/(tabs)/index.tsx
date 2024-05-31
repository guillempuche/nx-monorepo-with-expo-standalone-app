import { Journal, type JournalEntry } from "@monorepo/domain";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Initialize the journal and add an entry
const journal = new Journal();

const entry: JournalEntry = {
	id: "1",
	title: "My First Entry",
	content: "This is the content of the first entry.",
	date: new Date(),
};

journal.addEntry(entry);

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Journal Entries</Text>
			{journal.getEntries().map((entry) => (
				<View key={entry.id} style={styles.entry}>
					<Text style={styles.entryTitle}>{entry.title}</Text>
					<Text>{entry.content}</Text>
					<Text>{entry.date.toDateString()}</Text>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	entry: {
		marginBottom: 15,
		padding: 15,
		borderColor: "#ddd",
		borderWidth: 1,
		borderRadius: 5,
	},
	entryTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
});
