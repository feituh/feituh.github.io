---
layout: blog-post
title: Setup neovim tối giản nhất cho cp
thumbnail:
    link: "https://i.imgur.com/cWkIaqS.jpeg"
    src: "https://unsplash.com/photos/a-skateboarder-is-doing-a-trick-on-a-ramp-MEDc-HSJdKY"
    desc: "Một vận động viên trượt ván đang thực hiện trò lừa trên đoạn đường dốc"
    author:
        name: "Sam Ladley"
        link: "https://unsplash.com/@samotion"
tags:
    - Setup
    - neovim
date: '2024-07-20T08:11:43.00+07:00'
---

Dùng mấy IDE như Code::blocks, Dev-c++,... đã lâu có thể bạn đã chán 
vậy thì [Neovim](https://neovim.io/) là một làn gió mới đáng để bạn thử. 

## Ngoài lề

Nếu là một người mới thì chắc chắn bạn sẽ thấy _neovim_ dùng khá là kì. 
Tuy nhiên đừng vì vậy mà bỏ em nó, cứ dùng đi rồi bạn sẽ thấy nó vip :smile:

Mình rất đề cao cái đẹp, nên config neovim là một điều không thể tránh khỏi 
và chính vì vậy mà mình tốn rất nhiều thời gian, có khi ngồi cả ngày chỉ để config. 
Sau thì mình thấy rằng chỉ cần thêm mấy cái đủ dùng vào là được, cứ tối giản mới là chân ái.

Một điều nữa là dù mình khuyên bạn dùng Neovim thế thôi nhưng bạn cứ dùng cái gì mà thấy thoải mái 
nhất là được.

## Cài đặt 

Mình lưu dotfile của mình [ở đây](https://github.com/theryou/dotfiles), bạn có thể vào tham khảo, 
nếu không biết dùng như thế nào thì có thể xem cách cài bên dưới.

Ở bài viết này mình chỉ hướng dẫn cài đặt ở Windows, nên nếu bạn đang dùng Linux hay Macos thì chỉ tham khảo thôi nha :smile:

### Chuẩn bị

#### Cài đặt `Code::Blocks`

Dù là neovim nhưng để tốt nhất cho cp thì mình vẫn config tính năng cốt lõi dựa trên Code::Blocks, 
cụ thể là `compile` và `run code`. Lý do tại sao lại dùng compiler và code runner của Code::Blocks 
thì mình sẽ nói ở phần sau.

Trước tiên bạn tải và cài đặt Code::Block-20.03-mingw-setup [ở đây][code-block-download], 
nhớ để ý thư mục mà bạn cài đặt nó nha, vì những bước sau sẽ cần tới nó đó 
(tốt nhất thì bạn nên để ở thư mục mặc định của Windows: `C:\Program Files\Codeblocks\`)

#### Cài đặt `Neovim`

Bây giờ hãy vào [trang chủ Neovim](https://neovim.io/) và tải về phiên bản mới nhất 
(không phải nightly để tránh lỗi không đáng có).

#### Cài đặt `Windows Terminal`

Bạn có thể cài đặt [Microsoft store](https://apps.microsoft.com/detail/9n0dx20hk701).

Nếu đang dùng Windows 10 thì bạn bắt buộc phải cài Windows Terminal, vì Win10 không có sẵn 
(nếu bạn đã cài rồi thì có thể bỏ qua). 

Còn nếu dùng Windows 11 thì bạn có thể cài lại hoặc không, tuy nhiên mình khuyên bạn nên cài lại 
vì Windows Terminal có sẵn ở Win11 mình thấy chức năng của nó bị thiếu một cách kì lạ.

#### Cài đặt `Windows Powershell 7+`

Bạn cũng có thể cài đặt ở [Microsoft store](https://apps.microsoft.com/detail/9mz1snwt0n5d)



[code-block-download]: https://www.fosshub.com/Code-Blocks.html?dwl=codeblocks-20.03mingw-setup.exe

