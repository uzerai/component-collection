import React from 'react';
import { ColorIndicator } from '../ColorIndicator/ColorIndicator';
import { Table } from './Table';


export default {
  title: 'Layout/Table',
  component: Table,
};

const Template = (args) => <Table {...args}>
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

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [],
};