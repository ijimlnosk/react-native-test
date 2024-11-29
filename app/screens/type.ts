import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AddExpense: undefined;
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

export type AddExpenseScreenProps = StackScreenProps<
  RootStackParamList,
  'AddExpense'
>;
