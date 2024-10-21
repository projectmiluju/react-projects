// App.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


describe("To-Do App", () => {
  test("할 일 입력창과 입력 버튼이 렌더링된다", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("해야 할 일을 입력하세요.")).toBeInTheDocument();
    expect(screen.getByDisplayValue("입력")).toBeInTheDocument();
  });

  test("할 일을 입력하고 추가할 수 있다", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("해야 할 일을 입력하세요.");
    const button = screen.getByDisplayValue("입력");

    fireEvent.change(input, { target: { value: "테스트 할 일" } });
    fireEvent.click(button);

    expect(screen.getByText("테스트 할 일")).toBeInTheDocument();
  });

  test("추가된 할 일을 완료 처리할 수 있다", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("해야 할 일을 입력하세요.");
    const button = screen.getByDisplayValue("입력");

    fireEvent.change(input, { target: { value: "완료 테스트" } });
    fireEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

  test("추가된 할 일을 다시 미완료 처리할 수 있다", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("해야 할 일을 입력하세요.");
    const button = screen.getByDisplayValue("입력");

    fireEvent.change(input, { target: { value: "취소 테스트" } });
    fireEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox); // 체크
    fireEvent.click(checkbox); // 체크 해제

    expect(checkbox.checked).toBe(false);
  });

  test("Delete All 버튼 클릭 시 모든 할 일이 삭제된다", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("해야 할 일을 입력하세요.");
    const button = screen.getByDisplayValue("입력");

    fireEvent.change(input, { target: { value: "삭제 테스트" } });
    fireEvent.click(button);

    const deleteButton = screen.getByText("Delete All");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("삭제 테스트")).toBeNull();
  });
});
