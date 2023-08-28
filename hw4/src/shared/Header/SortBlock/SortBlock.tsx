import React from 'react';
import styles from './sortblock.css';
import { generateId } from '../../../utils/react/generateRandomIndex';
import { Mylist } from '../../GenericList';
const LIST = [
  {value:'some'},
  {value:'some'},
  {value:'some'},
  {value:'some'},


].map(generateId)


export function SortBlock() {
  return (
    <div className={styles.sortBlock}>
      <Mylist list={LIST} onClick={console.log}/>
      sorting dropdown
    </div>
  );
}
