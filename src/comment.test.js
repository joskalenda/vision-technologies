import { CommentCounter } from './set_api.js';

describe('this should test for the lenght of the task', () => {
  test('should test the task length', () => {
    const Dom = document.body;
    Dom.innerHTML += '<p class="count--com"></p>';
    const task = [
      {
        id: 'item1', data: 1,
      },
      {
        id: 'item2', data: 2,
      },
      {
        id: 'item3', data: 3,
      },
    ];
    const CounterCom = Dom.querySelector('.count--com');
    CommentCounter(task);
    expect(CounterCom.innerHTML).toEqual(`Comments (${task.length})`);
  });
});
