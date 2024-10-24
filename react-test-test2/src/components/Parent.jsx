import Child from "./Child";

export default function Parent() {
    const message = "안녕, 나는 부모야!";

    return (
        <div>
            <h1>부모 컴포넌트</h1>
            <Child text={message} />
        </div>
    );
}
