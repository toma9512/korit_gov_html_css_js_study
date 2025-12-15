// 실패 시 사용자 이름없을 에러객체 전달
function login(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username !== undefined) {
                console.log("로그인 성공")
                resolve(username);
            } else {
                reject(new Error("사용자 이름없음"));
            }
        }, 1000);
    });
}

// 실패 시 상품이 없음 에러 객체 전달
function addToCart(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product !== undefined) {
                console.log(`${product} 장바구니 추가 성공`)
                resolve(product);
            } else {
                reject(new Error("상품이 없음"));
            }
        }, 1000);
    });
}

// 실패 시 카드번호 또는 제품없음 에러 객체 전달
function checkout(cardNumber, product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cardNumber !== undefined && product !== undefined) {
                console.log(`${product} 결제 완료. 결제 카드: ${cardNumber}`)
                resolve({cardNumber, product});
            } else {
                reject(new Error("카트번호 또는 제품없음"));
            }
        }, 1000);
    });
}

const promise = login("홍길동")
    .then((username) => {
        console.log(username);
        return addToCart("아이폰");
    })
    .then((product) => {
        console.log(product);
        return checkout("1234-5678-1234-5678", "아이폰");
    })
    .then(({cardNumber, product}) => {
        console.log(cardNumber, product);
    })
    .catch((error) => {
        console.log(error.message);
    });
