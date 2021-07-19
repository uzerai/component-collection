import React from 'react';
import { ColorIndicator } from '../ColorIndicator/ColorIndicator';
import { Table, VARIATIONS } from './Table';


export default {
  title: 'Layout/Table',
  component: Table,
};

const SimpleTableTemplate = (args) => <Table {...args}>
  <Table.Header>
    <Table.Row>
      <Table.Cell><p>Report</p></Table.Cell>
      <Table.Cell><p>Awarded by</p></Table.Cell>
      <Table.Cell><p>Awarded at</p></Table.Cell>
      <Table.Cell><p>Bounty</p></Table.Cell>
      <Table.Cell><p>Status</p></Table.Cell>
    </Table.Row>
  </Table.Header>
  <Table.Row>
    <Table.Cell><div>#1337</div></Table.Cell>
    <Table.Cell><div>HackerOne</div></Table.Cell>
    <Table.Cell><div>May 20th, 2420</div></Table.Cell>
    <Table.Cell><div>$5,318,008</div></Table.Cell>
    <Table.Cell><div><ColorIndicator variation='green' /> Resolved</div></Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell><div>#1338</div></Table.Cell>
    <Table.Cell><div>BugCrowd</div></Table.Cell>
    <Table.Cell><div>April 1st,  9999</div></Table.Cell>
    <Table.Cell><div>$0</div></Table.Cell>
    <Table.Cell><div><ColorIndicator variation='red' /> Closed due to inactivity</div></Table.Cell>
  </Table.Row>
</Table>;

const AllRowTemplate = (args) => <Table {...args}>
  <Table.Header>
    <Table.Row>
      <Table.Cell><p>Variation</p></Table.Cell>
      <Table.Cell><p>Col 1</p></Table.Cell>
      <Table.Cell><p>Col 2</p></Table.Cell>
      <Table.Cell><p>Col 3</p></Table.Cell>
      <Table.Cell><p>Col 4</p></Table.Cell>
    </Table.Row>
  </Table.Header>
  {
    Object.keys(VARIATIONS).map((variation) => <Table.Row variation={variation} key={`${variation}-row`}>
      <Table.Cell><p className='capitalize'>{variation}</p></Table.Cell>
      <Table.Cell><p>Cell 1</p></Table.Cell>
      <Table.Cell><p>Cell 2</p></Table.Cell>
      <Table.Cell><p>Cell 3</p></Table.Cell>
      <Table.Cell><p>Cell 4</p></Table.Cell>
    </Table.Row>)
  }
</Table>;

export const SimpleTable = SimpleTableTemplate.bind({});
SimpleTable.args = {
  size: 'default',
  variation: 'default',
};

export const RowVariations = AllRowTemplate.bind({});
RowVariations.args = {
  size: 'default',
  variation: 'default',
};