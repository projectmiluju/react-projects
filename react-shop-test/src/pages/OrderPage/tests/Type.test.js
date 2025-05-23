import { render, screen } from "../../../test-utils";
import { server } from "../../../mocks/server";
import userEvent from "@testing-library/user-event";
import Type from "../Type";
import { rest } from "msw";

test("displays product images from server", async () => {
  render(<Type orderType="products" />);

  // 이미지 찾기
  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(["America product", "England product"]);
});

test("fetch option information from server", async () => {
  render(<Type orderType="options" />);

  // 체크박스 가져오기
  const optionCheckboxes = await screen.findAllByRole("checkbox");

  expect(optionCheckboxes).toHaveLength(2);
});

test("when fetching product datas, face an error", async () => {
  server.resetHandlers(
      rest.get("http://localhost:5000/products", (req, res, ctx) => {
        return res(ctx.status(500));
      })
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.")
});

test("search filter displays only matching product", async () => {
  render(<Type orderType="products" />);

  const searchInput = screen.getByTestId("search-input");

  // 검색어 입력: 'ame'
  userEvent.type(searchInput, "ame");

  // America만 보이는지 확인
  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });

  expect(productImages).toHaveLength(1);
  expect(productImages[0]).toHaveAttribute("alt", "America product");
});