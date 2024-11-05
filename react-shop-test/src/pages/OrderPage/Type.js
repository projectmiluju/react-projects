import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";

function Type({ orderType }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [orderDatas, updateItemCount] = useContext(OrderContext);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        loadItems(orderType);
    }, [orderType]);

    const loadItems = async (orderType) => {
        try {
            const response = await axios.get(`http://localhost:5000/${orderType}`);
            setItems(response.data);
        } catch (error) {
            setError(true);
        }
    };

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다." />;
    }

    const ItemComponents = orderType === "products" ? Products : Options;

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const optionItems = filteredItems.map((item) => (
        <ItemComponents
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
            updateItemCount={(itemName, newItemCount) =>
                updateItemCount(itemName, newItemCount, orderType)
            }
        />
    ));

    let orderTypeKorean = orderType === "products" ? "상품" : "옵션";
    return (
        <>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>
                {orderTypeKorean} 총 가격: {orderDatas.totals[orderType]}
            </p>

            {orderType === "products" && (
                <input
                    type="text"
                    placeholder="상품 검색"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    data-testid="search-input"
                    style={{ marginBottom: "12px", padding: "4px" }}
                />
            )}

            <div
                style={{
                    display: "flex",
                    flexDirection: orderType === "options" && "column",
                }}
            >
                {optionItems}
            </div>
        </>
    );
}

export default Type;