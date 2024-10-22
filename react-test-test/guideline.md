# 리액트 테스트 가이드 라인

***

## 테스트 작성 철학

> 사용자 관점에서 테스트한다.
>> 컴포넌트의 구조가 아니라, 동작을 테스트한다.   
>> DOM 구조나 내부 구현 세부사항에 의존하지 않는다.

> 작고 명확한 테스트를 작성한다.
>> 하나의 테스트 케이스는 하나의 동작만 검증한다.

> 변경에 강한 테스트를 작성한다.
>> UI 구조가 바뀌더라도 테스트가 쉽게 깨지지 않도록 한다.

***

## 테스트 코드 작성 모범 사례

> 구조적이고 읽기 쉽게 작성하기
>> `describe` `test` 블록으로 논리적으로 구분한다.   
>> Given-When-Then 패턴을 명시적으로 따른다.

```javascript
describe('Form 컴포넌트', () => {
  test('입력창에 텍스트를 입력할 수 있다', () => {
    // Given
    render(<Form />);

    // When
    fireEvent.change(screen.getByPlaceholderText('할 일 입력'), {
      target: { value: '공부하기' }
    });

    // Then
    expect(screen.getByDisplayValue('공부하기')).toBeInTheDocument();
  });
});
```

> 명확한 설명을 작성하기
>> 테스트 이름을 실제 시나리오처럼 작성한다.   
>> "무엇을 검증하는지"를 명확히 표현한다.
>>> 좋은 예 : `버튼 클릭 시 카운터가 1 증가한다.`
>>
>>> 나쁜 예 : `버튼 테스트`

> 데이터-테스트-셋업 최소화
>> 최대한 공통 준비 코드를 재사용한다.   
>> `beforeEach`를 적절히 활용한다.

```javascript
beforeEach(() => {
  render(<App />);
});
```

***

## 테스트 가독성 높이는 팁

> query를 명확하게 사용하자.
>> `getByRole` `getByText` `getByPlaceholderText` 를 적절히 선택한다.   
>> `getByTestId`는 최후의 수단으로 사용한다.

> 불필요한 await/async 사용을 피하자.
>> 비동기 작업이 아닐 경우 굳이 `await`를 쓰지 않는다.

>중복을 줄이자.
>> 동일한 요소 찾기, 입력값 변경 등은 헬퍼 함수로 분리할 수 있다.


***

## 리팩토링 시 테스트 유지 방법

> 리팩토링 전 테스트를 먼저 돌리기
>> 기존 테스트가 모두 통과하는지 확인한다.

> 리팩토링 후 테스트를 바로 수정하지 않기
>> 먼저 리팩토링된 코드가 동일한 기능을 수행하는지 테스트로 검증한다.

> DOM 구조에 덜 의존하기
>> 특정 태그 구조(div > span > a 같은 계층)를 가정하는 테스트는 피한다.   
>> 사용자가 보는 요소를 기준으로 테스트한다.


***

## 실패하는 테스트를 다루는 방법

> 실패했을 때, 에러 메시지를 읽고 무엇이 잘못됐는지 분석한다.   
> 테스트를 무조건 삭제하거나 주석처리하지 않는다.   
> 실제 코드 수정이 필요한지, 테스트 코드 수정이 필요한지 구분한다.

***

## 권장하는 테스트 스타일

| 추천 | 비추천 |
|:-----|:------|
| 사용자 행동 중심 테스트 | 내부 상태 확인 테스트 |
| 명확하고 긴 테스트 이름 | "짧고 모호한" 테스트 이름 |
| 접근성 고려 (getByRole 등 사용) | className, id에 의존 |
| 비동기 작업에 async/await 사용 | 무조건 setTimeout 사용하는 비정상 동기화 |

***

## 참고 자료

- [React Testing Library 공식 문서](https://testing-library.com/docs/)
- [Jest 공식 문서](https://jestjs.io/docs/getting-started)
- [Testing Trophy by Kent C. Dodds](https://testingjavascript.com/)

***