// Counter.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Counter 컴포넌트가 정상적으로 렌더링된다", () => {
    render(<Counter />);
    expect(screen.getByText(/현재 카운트:/)).toBeInTheDocument();
});

test("증가 버튼을 클릭하면 카운트가 1 증가한다", () => {
    render(<Counter />);
    const button = screen.getByText("증가");
    fireEvent.click(button);
    expect(screen.getByText("현재 카운트: 1")).toBeInTheDocument();
});

test("감소 버튼을 클릭하면 카운트가 1 감소한다", () => {
    render(<Counter />);
    const button = screen.getByText("감소");
    fireEvent.click(button);
    expect(screen.getByText("현재 카운트: -1")).toBeInTheDocument();
});
