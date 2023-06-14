"use client";
import { Provider } from 'react-redux';
import NoteApp from './component/NoteApp';
import noteStore from './services/noteStore';

export default function Home() {
  return (
   <div>
    <h2>Notes App</h2>
    <Provider store={noteStore}>
    <NoteApp />
  </Provider>
   </div>
  )
}
