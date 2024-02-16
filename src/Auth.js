import firebase from './firebase';

export const signUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error signing in:', error.message);
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

export const isAuthenticated = () => {
  return !!getCurrentUser();
};
