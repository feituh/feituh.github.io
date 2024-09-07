---
aside: right
---

# Xâu nhị phân

## Nhắc lại yêu cầu bài toán

In ra tất cả các xâu nhị phân có độ dài là $n$.

## Ý tưởng

Ta sẽ xây dựng lần lượt từng kí tự từ $1$ tới $n$.

Cụ thể, gọi xâu kí tự ta cần xây dựng là $S$, với kí tự thứ $i$ ta đang xây dựng: 
$S[i] = 0$ hoặc $S[i] = 1$

::: details Code tham khảo
```cpp
#include <bits/stdc++.h>
using namespace std;

int n;

void go(int i, string s) {
	if (i > n) return void(cout << s << '\n');
	for (char x = '0'; x <= '1'; ++x) go(i + 1, s + x);
}

int main() {
	ios::sync_with_stdio(NULL); cin.tie(0);
	cin >> n;
	go(1, "");
	return 0;
}
```
:::
