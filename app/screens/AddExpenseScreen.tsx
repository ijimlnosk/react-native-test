import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import useExpenseStore from '../store/expenseStore';
import {AddExpenseScreenProps} from './type';

const AddExpenseScreen: React.FC<AddExpenseScreenProps> = ({navigation}) => {
  // const {control, handleSubmit} = useForm();
  const {addExpense} = useExpenseStore();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = () => {
    if (description.trim() === '' || amount.trim() === '') {
      Alert.alert(
        'Validation Error',
        '사용 내역 및 금액이 작성되지 않았습니다.',
        [{text: 'OK'}],
      );
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      description,
      amount: amount === '' ? 0 : parseFloat(amount),
      date: new Date().toISOString(),
    };

    addExpense(newExpense);
    navigation.goBack();
  };

  const onCancle = () => {
    navigation.goBack();
  };

  return (
    <View className="w-full">
      <Text>사용 내역 추가하기</Text>

      <TextInput
        placeholder="사용 내역을 입력해주세요."
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        placeholder="금액을 입력해주세요."
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Button title="Add Expense" onPress={onSubmit} />
      <Button title="Cancle" onPress={onCancle} />
    </View>
  );
};

export default AddExpenseScreen;
