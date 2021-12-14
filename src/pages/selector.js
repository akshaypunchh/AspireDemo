import {useSelector} from 'react-redux';

const useSelect = () => {
  const {screen} = useSelector(({locale}) => locale.translations.data);

  const {isLoading, cardLimit, cardDetails} = useSelector(
    ({debitCard: DC}) => DC,
  );

  return {
    isLoading,
    cardLimit,
    cardDetails,
    translations: {
      ...screen,
    },
  };
};

export default useSelect;
