---
layout: blog-post
title: It's new blog
thumbnail:
    link: "https://i.imgur.com/mBVrmaW.jpeg"
    src: "https://unsplash.com/photos/assorted-color-lockers-VLaKsTkmVhk"
    desc: "Đôi khi chúng ta thích một bức ảnh không phải vì bố cục hay tông màu của nó mà vì tâm trạng lúc đó"
    author:
        name: "moren hsu"
        link: "https://unsplash.com/@moren"
tags:
    - Chuyện chill
    - Setup
date: '2024-07-11T20:19:57.00+07:00'
---

Đây là bài viết đầu tiền trong blog mới này của mình. 
Hmm... thật ra không có gì nhiều để nói nhưng mình sẽ điểm qua một vài điều đặc biệt ở blog này.

## Công nghệ

Điều đầu tiên mình muốn nói là về cái mà mình dùng để tạo ra blog này. 

Mình đã chọn một [static site generator][static-site-generator] có tên là [Vitepress](https://vitepress.dev/).

Lý do mình chọn _static site generator_ và deploy nó trên [github](https://github.com/) vì nó tương đối dễ quản lí, 
tiện sửa chữa và free...

Lý do thứ hai khiến mình chọn nó là vì nó sử dụng `typescript` -- một ngôn ngữ lập trình mà mình chưa dùng nó bao giờ.
Yes sir, chắc chắn là thật rồi :skull: Tại thời điểm viết blog này, mình chỉ là một đứa học sinh cấp 3.
Cách đây 3 năm mình có dành ra 1 tháng hè để học qua về `html`, `css` và `javascript`,
Mình biết `typescript` được phát triển dựa trên `javascript` nên khả năng cao mình hoàn toàn có thể sử dụng nó.

Ngoài ra, mình thấy blog của anh Lộc ([darkkcyan blog](https://quangloc99.github.io/)) có một cái theme đẹp quá,
nên mình cũng tìm thử xem nó là theme gì và thật tuyệt mình đã thấy nó :sunglasses:

::: info Ngoài lề
Trước đây mình đã thử qua rất nhiều _static site generator_ như: `hugo`, `hexo`, `jekyll`, `mkdocs`,...
Tuy nhiên hình thức là cái đầu tiên mà người đọc nhìn thấy, nên cho dù nội dụng như thế nào cứ phải đẹp trước đã.
Chính vì điều này mà mình tốn kha khá thời gian ngồi mod theme, mà mấy cái món này thì khó xào nấu,
cook được mấy cái component là đã mửa ra rồi.
:::

## Nguồn cảm hứng

Bạn có thể ghé qua [darkkcyan blog](https://quangloc99.github.io/) mà mình đã nói ở trên, 
đây là cảm hứng chính để mình tạo ra theme cho blog này (_fact: thật ra mình copy hết về rồi config theo ý mình_).
Mình đã ~~lấy~~ tham khảo rất nhiều thứ từ blog của anh Darkkcyan, từ cái layout bài viết tới mấy cái component,...v.v

Ngoài ra một nguồn cảm hứng khác chính là blog [Ehkoo](https://ehkoo.com/). Mình đã tham khảo cái home page style của blog này
và cái font chữ tuyệt đẹp mà bạn đang thấy (mình sẽ để nó [ở đây][space-grotesk-font] cho bạn nào cần). 
Ngoài ra còn một thứ nữa là cái ảnh ở đầu bài viết (bạn có thể soi 2 blog để thấy sự tương đồng :smile:)

## Tính năng nổi bật

### Math support

Đã là một blog kĩ thuật thì chắc không thể thiếu cái này. 
Ban đầu mình định dùng `Katex` vì nó nhẹ mà vẫn đủ dùng, nhưng không hiểu là nó bị conflict css hay gì đó
mà cái biểu thức toán học nó kiểu bị nhảy lung tung hết lên theo chiều dọc 
(kiểu cái $x^2$ sẽ thành $x_2$ và cái căn nó còn bay tít lên trên)

### Code blocks

Cái này thì không có gì nhiều để nói vì nó được hỗ trợ mặc định

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello, im here!";
}
```
### Table of content 

Chính là cái mục lục ở bên trái màn hình hoặc khi bạn nhấn vào `On this page` ở mobile.

### Theme switcher

Cái này theme mặc định của vitepress đã có sẵn

### Tags

Tính năng này mình cũng chỉ đi tham khảo tài liệu của một mẫu theme khác và đem về cấu hình cho phù hợp với blog của mình. 
Bạn có thể tới [Tags](/tags/) để xem thử.

Tags giúp phân loại bài viết dễ hơn, qua đó thì bạn có thể dễ dàng tìm kiếm, truy xuất bài viết. 
Nói chung cũng là một tính năng hay và quan trọng.

### Comment

Blog có độc giả là điều tốt, vui hơn nữa là nhận được tương tác từ phía độc giả, 
mình cũng không tài giỏi gì nên dù khen hay chê thì đều là cái để mình nhìn vào mà phát triển hoặc sửa đổi. 
Do đó, bình luận cũng là một tính năng mà mình nghĩ là thực sự cần thiết cho mọi blog thời nay.

Mình đã sử dụng công cụ [Giscus](https://giscus.app/). Cái này nó giúp người dùng Github tạo comment một cách dễ dàng.
Khi một người dùng nào đó tạo comment đầu tiên thì nó sẽ tạo một cái discussion ở trên repo github được chỉ định.

Trước đây ở Hugo, Hexo,... thì mình phải embed cái script của _giscus_ vào 
nhưng giờ mình có thể dùng [component vue có sẵn ](https://github.com/giscus/giscus-component), khá tiện.

Có một cái khác nữa tên là [Utterances](https://utteranc.es/) nhưng mà mình thấy nó hơi xấu hơn cái _giscus_ nên mình bỏ qua luôn.

Ngoài ra trước đây khi đổi `dark/light` mode ở trên blog thì mình phải load lại trang rồi truyền lại tham số theme 
để đồng bộ theme của _giscus_ theo trang, nhưng mà giờ thì mình chỉ cần để một cái biến vào attribute theme của _giscus_ 
và khi đổi theme của trang giá trị của biến cũng cập nhật kéo theo đó là theme của _giscus_ được đổi mà không cần load 
lại trang. Mình cũng không chắc tính năng này của vitepress là cái gì vì mình không tìm hiểu kĩ, chỉ xem doc rồi làm theo. 

### Codeforces handle

Cái này mình đã tham khảo ở blog của anh Darkkcyan, bạn có thể trải nghiệm thử ở dưới

<script lang="ts" setup>
  import { ref } from 'vue';
  const nickname = ref('darkkcyan');
  const displayMaxRank = ref(true);
</script>

Nhập nickname của bạn trên CF: <input :value="nickname" @change="event => nickname = event.target.value" style="border: 1px solid gray" /> (Enter)

Hiển thị max rank: <input :checked="displayMaxRank" @change="event => displayMaxRank = event.target.checked" type="checkbox" />

---

Nickname trên Codeforces của bạn với màu rank:
<center>
<cf-handle
    :nickname="nickname"
    :displayMaxRank="displayMaxRank"
    prefixWithRank="true"
/>
</center>

## Lời cuối cùng

Mình rất cảm ơn anh Darkkcyan đã cho mình rất nhiều cảm hứng để tạo ra blog này, ngoài ra thì cũng cảm ơn tác giả của Ehkoo. 
Nếu 2 anh có đọc được blog này thì cho em gửi lời cảm ơn sâu đậm ạ :grin:

Quay trở lại, mình rất thích việc viết blog (hoặc ít nhất là thích chia sẻ suy nghĩ của bản thân lên một nơi nào đó), 
nên mình đã nhiều lần muốn viết và cũng có nhiều ý tưởng nhưng đến lúc đụng vào chả biết viết gì, 
bỏ ra cả ngày ngồi custom cho blog đẹp xong lại bỏ xó. 
Tuy nhiên mình thấy rằng nếu lúc nào cũng chỉ nghĩ mà không làm thì sẽ chả nhận được kết quả gì, 
nên mình quyết định dù ít dù nhiều cũng sẽ bắt đầu viết blog. 

Thật sự mà nói mình chẳng có tí kinh nghiệm nào cả nên việc xuất bản bài viết mới sẽ lâu và nội dung có thể chưa tốt 
vì vậy mình cũng rất mong sẽ nhận được lời góp từ bạn - có thể là ở mục bình luận bên dưới chẳng hạn.

Trên đây là về việc mình đã tạo ra blog này. Hẹn gặp lại bạn trong bài viết tiếp theo...

[static-site-generator]: https://en.wikipedia.org/wiki/Static_site_generator
[space-grotesk-font]: https://fonts.google.com/specimen/Space+Grotesk