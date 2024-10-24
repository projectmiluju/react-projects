import { render, screen } from "@testing-library/react";
import Parent from "../components/Parent";

describe("Parent-Child 데이터 전달 테스트", () => {
    test("부모 컴포넌트가 자식 컴포넌트에 데이터를 전달한다", () => {
        render(<Parent />);

        // 부모 컴포넌트가 잘 렌더링되는지
        expect(screen.getByText("부모 컴포넌트")).toBeInTheDocument();

        // 자식 컴포넌트가 잘 렌더링되는지
        expect(screen.getByText("자식 컴포넌트")).toBeInTheDocument();

        // 부모에서 전달한 데이터가 자식에 의해 표시되는지
        expect(screen.getByText("안녕, 나는 부모야!")).toBeInTheDocument();
    });
});
