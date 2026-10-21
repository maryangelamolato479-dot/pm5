// App.js
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { AppCard } from './components/ui/AppCard';
import { AppButton } from './AppButton';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Student Profile Card */}
      <AppCard style={styles.marginBottom} bgColor="#e0f2fe">
        {/* Step 1: Add Good Morning greeting text here */}
        <Text style={styles.greetingText}>Good morning!</Text>
        <Text style={styles.title}>Student Profile</Text>
        <Text style={styles.nameText}>Name: Mary Angel Amolato</Text>
        <Text style={styles.text}>Course: Information Technology</Text>
        <Text style={styles.noteText}>Note: Profile verified by department admin.</Text>
      </AppCard>

      {/* Lab Activity Card */}
      <AppCard bgColor="#ffffff">
        <Text style={styles.title}>Lab Activity Presentation</Text>
        <Text style={styles.noteText}>Note: Press the button below to test interactivity.</Text>
        <AppButton
          title="Test Component Props"
          onPress={() => Alert.alert('Success', 'Props & reusable component working!')}
        />
      </AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  marginBottom: {
    marginBottom: 16,
  },
  // Step 2: Add style for the greeting text
  greetingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0284c7',
    textAlign: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1e293b',
    textAlign: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0369a1',
    marginBottom: 4,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 4,
    textAlign: 'center',
  },
  noteText: {
    fontSize: 12,
    color: '#c5899d',
    fontStyle: 'italic',
    marginTop: 6,
    marginBottom: 10,
    textAlign: 'center',
  },
});