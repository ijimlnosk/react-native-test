import React, {useState} from 'react';
// import {useForm} from 'react-hook-form';
import {Button, Text, TextInput, View} from 'react-native';
import useExpenseStore from '../store/expenseStore';
import {AddExpenseScreenProps} from './type';

const AddExpenseScreen: React.FC<AddExpenseScreenProps> = ({navigation}) => {
  // const {control, handleSubmit} = useForm();
  const {addExpense} = useExpenseStore();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = () => {
    addExpense({
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    });

    navigation.goBack();
  };

  return (
    <View>
      <Text>Add Expense Screen</Text>

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Button title="Add Expense" onPress={onSubmit} />
    </View>
  );
};

export default AddExpenseScreen;
