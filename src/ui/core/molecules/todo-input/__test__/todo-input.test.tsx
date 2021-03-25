import { TodoInput } from '../todo-input';

describe('todo-input tests', () => {
  it('should match snapshot', () => {
    const component = (
      <TodoInput value="Test value..." onCreateClick={() => null} />
    );
    expect(component).toMatchSnapshot();
  });
});
