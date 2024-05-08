import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { updateTerm } from './searchSlice';
import styles from './search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateTerm(term));
    setTerm(() => '');
  }

  const handleChange = event => {
    setTerm(() => event.target.value)
  }

  return <form onSubmit={handleSubmit} className={styles.form}>
    <input type='text' value={term} onChange={handleChange} className={styles.input} />
    <input type='submit' value='🔎' className={styles.submit}/>
  </form>
}

export default Search;