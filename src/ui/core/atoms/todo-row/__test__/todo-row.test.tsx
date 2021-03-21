import { TodoRow } from '../todo-row';

describe('todo-row tests', () => {
  it('should match snapshot', () => {
    const component = (
      <TodoRow
        todoText="Todo something..."
        checked={false}
        onRemoveClick={() => null}
        onCheckboxClick={() => null}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
