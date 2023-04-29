import * as S from "../Style";

function InputAera(
  subtitle,
  onSubtitleHandler,
  todoBody,
  onTodoBodyHandler,
  onSubmitHandler
) {

    console.log("subtitle",subtitle)
  return (
    <>
      <S.StCreateTodo>
        <h3>Do it!</h3>
        <ul>
          제목:
          <br />
          <textarea
            value={subtitle}
            placeholder="제목을 입력하세요"
            rows="1"
            type="text"
            style={{ width: "95%" }}
            onChange={onSubtitleHandler}
          />
        </ul>
        <ul>
          내용:
          <br />
          <textarea
            value={todoBody}
            placeholder="내용을 입력하세요"
            rows="5"
            type="text"
            style={{ width: "95%" }}
            onChange={onTodoBodyHandler}
          />
        </ul>
        <button onClick={onSubmitHandler}>Submit</button>
      </S.StCreateTodo>
    </>
  );
}

export default InputAera;
