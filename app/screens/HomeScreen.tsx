import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {HomeScreenProps} from './type';
import useExpenseStore from '../store/expenseStore';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {expenses, getTotal} = useExpenseStore();
  const total = getTotal();

  return (
    <View>
      <Text>Total: {total}</Text>
      <FlatList
        data={expenses}
        renderItem={({item}) => (
          <View>
            <Text>
              {item.description} - ${item.amount}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
  );
};

export default HomeScreen;
