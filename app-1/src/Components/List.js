import Todo from './Todo';

const List = props => {
    return (
        <section>
            {props.todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </section>
    )
}

export default List;