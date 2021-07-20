import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Card, CardContent, CardFooter, CardHeader } from '../Card/Card';
import { Timeline, TimelineHead, TimelineItem, TimelineTail } from '../Timeline/Timeline';
import { Modal } from './Modal';



export default {
  title: 'Layout/Modal',
  component: Modal,
};

const Default = (args) => {
  const [visible, setVisible] = useState(true);

  return <>
    <div className='fixed w-screen h-screen flex items-center justify-center'>
      <Button onClick={ () => setVisible(true)} label='Show modal' />
    </div>
    <Modal {...args} onClose={() => setVisible(false)} onAccept={() => setVisible(false)} visible={visible} />
  </>

}

const ModalOverContent = (args) =>  {
  const [visible, setVisible] = useState(true);

  return <>
    <Timeline>
      <TimelineHead key="timeline-header">
        <Card>
          <CardHeader>
            <p className="font-bold">TimelineHead</p>
          </CardHeader>
          <CardContent>
            <p className="font-thin">This is the TimelineHead</p>
          </CardContent>
        </Card>
      </TimelineHead>
      <TimelineTail key="timeline-tail">
        <Card>
          <CardFooter>
            <p className="font-bold">Timeline Tail</p>
          </CardFooter>
          <CardContent>
            <p className="font-thin">This is the TimelineTail</p>
          </CardContent>
        </Card>
      </TimelineTail>
      <TimelineItem key="content">
        <Card>
          <CardContent>
            <div className="flex items-center justify-center h-60 mx-auto">
              <Button onClick={() => setVisible(true)}>Show modal</Button>
            </div>
          </CardContent>
        </Card>
      </TimelineItem>
    </Timeline>
    <Modal {...args} onClose={() => setVisible(false)} onAccept={() => setVisible(false)} visible={visible} />
  </>
}
;

export const OverContent = ModalOverContent.bind({});
OverContent.args = {
  title: 'Modal over content',
  acceptText: 'Accept',
  closeText: 'Cancel',
  size: 'default',
  variation: 'default',
  children: [
    <p key={'modalcontent'}>
      There should be some content here so that we can 
      have something to look at over the other content.

      It could be pretty long content too, and stuff can
      be all over the place when taking modals.
    </p>
  ],
};

export const Isolated = Default.bind({});
Isolated.args = {
  title: 'Isolated modal',
  acceptText: 'Accept',
  closeText: 'Cancel',
  size: 'default',
  variation: 'default',
  children: [
    <div key={'modalcontent'} className='flex flex-col gap-4'>
      <p>
        This is an isolated modal, and should be used when an action warrants serious thinking.
      </p>
      <p>
        It will require you to maintain some state in another component to control the `visible`
        property; an example for how to achieve this is available elsewhere but usually involves a state to
        reference as the `visible` value.
      </p>
    </div>
  ],
};