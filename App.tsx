import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';

export type Listing = {
  id: string;
  title: string;
  description: string;
  imageUri?: string;
  userId: string;
};

export default function App() {
  const [items, setItems] = useState<Listing[]>([]);
  const currentUserId = 'user-123'; // Dummy current user

  const addItem = (item: Listing) => {
    setItems((prev) => [item, ...prev]);
  };

  return (
    <NavigationContainer>
      <TabNavigator items={items} addItem={addItem} currentUserId={currentUserId} />
    </NavigationContainer>
  );
}
