import { createContext, useMemo, useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

const data = {
  signed: false,
  user: {},
  signIn: () => {},
  signOut: () => {},
}
const AuthContext = createContext(data);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  const signIn = async () => {
    const response = await auth.signIn();
    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  };

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  const dataValue = useMemo(() => {
    return {
      signed: !!user,
      user,
      signIn,
      signOut,
    }
  }, [user]);

  if (loading) {
    return (
      <View className='flex-1 justify-center items-center bg-gray-50'>
        <ActivityIndicator size='large' color='#131313' />
      </View>
    );
  };

  return (
      <AuthContext.Provider value={dataValue}>
          {children}
      </AuthContext.Provider>
  );
};

export default AuthContext;