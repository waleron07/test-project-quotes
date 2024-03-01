import { useState } from 'react';
import { ItemQuotesType } from '@/rtk_qwery/types';
import { Spinner, Modal } from '@/Components';
import classes from './Table.module.scss';
interface handleType {
  handleDataColumn: (content: string) => void;
}
interface PropsTypesItem extends handleType {
  item: ItemQuotesType;
}

interface PropsTypesTable extends handleType {
  data: ItemQuotesType[];
  visible: boolean;
}

const TableBody = ({ item, handleDataColumn }: PropsTypesItem) => {
  return (
    <tr
      onClick={() => {
        const content = `Symbol: ${item.symbol} \nPrice: ${item.price}\nSequence: ${item.sequence}`;
        handleDataColumn(content);
      }}>
      <td>{item.symbol}</td>
      <td>{item.price}</td>
      <td>{item.sequence}</td>
      <td>{item.side}</td>
      <td>{item.size}</td>
    </tr>
  );
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Price</th>
        <th>Sequence</th>
        <th>Side</th>
        <th>Size</th>
      </tr>
    </thead>
  );
};

const Table = (props: PropsTypesTable) => {
  const { data, visible, handleDataColumn } = props;

  if (visible) {
    return <Spinner visible />;
  }
  if (!data.length) {
    return null;
  }

  return (
    <>
      <table className={classes.Table}>
        <TableHeader />
        {data.map((item) => {
          return (
            <tbody key={item.tradeId}>
              <TableBody item={item} handleDataColumn={handleDataColumn} />
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Table;
