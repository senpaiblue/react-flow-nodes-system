// toolbar.js
// this is where styles for each node is managed

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => (
  <div style={{ padding: '10px',background:"#FFFFFF" }}>
    <div style={{ marginTop: '20px', marginBottom: '20px',display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
      <DraggableNode type='customInput' label='Input' />
      <DraggableNode type='llm' label='LLM' />
      <DraggableNode type='customOutput' label='Output' />
      <DraggableNode type='text' label='Text' />
      <DraggableNode type='newNode1' label='New Node 1' />
      <DraggableNode type='newNode2' label='New Node 2' />
      <DraggableNode type='newNode3' label='New Node 3' />
      <DraggableNode type='newNode4' label='New Node 4' />
      <DraggableNode type='newNode5' label='New Node 5' />
    </div>
  </div>
);
