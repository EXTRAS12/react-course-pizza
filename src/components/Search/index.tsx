import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { setSearchValue } from '../../redux/filter/slice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img
        alt='search'
        className={styles.icon}
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABTUlEQVRIS8WUjVECMRBGoQItQSsQK1A7kAo4KkAqECpQKgAqACsQOoAKtASpAL7HbJwMJCEMAXbmm8zdZfP2L1evndnqZz6/FgPcCtyRXqWGBbHQOpUG0l9uYCFAJecPCUjIOLwrjXIguwAOH5rjl9ZPaWbPz1p70pM9Ny2jJMcHEPGPRd5ORAjk3cp0b2sU4gOcI5FT+5SRFZn0LassAE18kF68ssQcKde3hM9jKhI/g7VtzB3drP0XBRxTIno0kZaSuyfBSoWazGViBIs3mTH9lW5sMpiQkPX0kjFdSXdS8lanLtrMQHOjMDkczIodHFE2xX4V3GAyCRmR8x0YQYykcWRv8mf3Jieayd3AaCj94XDK4oaCb0C4/XuWO/Mh30ov3X8rCjkF4A5tefS9TE4FHISUAOxCaDjl21opgIOw/h9eGhAahKIZXAewAdh4Qxm4MtzTAAAAAElFTkSuQmCC'
      />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder='Поиск...'
      />
      {value && (
        <img
          alt='close'
          onClick={onClickClear}
          className={styles.clearIcon}
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyElEQVRIS+1U2w2DMAwMG3QTGKHdACaFDegI7SYdoT6JSIH4SRX1ByR/YMV3vrOTLjX+usb46SIwHf67RSO1+KT4CK3eKH+nWCQpmgKAzxQvigdDAvCVYqCYJBKNAADovmdISvD3poJVac2AI4EbuXMVHActApw5kiAHW0xwL8GRBP8u8ChBtgV10uCrZfJaVHoOEG7wFbhHAbctqJO2K6RAW0VthXcknosmDbQkOXXR0EnTp4IdWjTp2aIopnsGPwHn4kuBaeMXDAg0GT/3wNsAAAAASUVORK5CYII='
        />
      )}
    </div>
  );
};

export default Search;
