/* Hook - gắn vào components
 1. Chỉ dùng cho function components
 2. Components đơn giản và trở nên dễ hiểu 
    - Không bị chia logic ra như methods trong lifecycle của Class Components
    - Không cần sử dụng "this"
 3. Sử dụng hooks khi nào 
    - Dự án mới =>> Hooks
    - Dự án cũ 
      + Component mới => function component + Hooks
      + Component cũ => giữ nguyên , có thời gian ưu sau
    - Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class component
 4. Người mới nên bắt đầu với Function hay Class component
 5. Có kết hợp sử dụng Function component & class component 
*/
//Syntax 
import { useState } from 'react';

// Chưa dùng Hooks, chỉ là UI components
function ComponentsA() {
    return <h1>Haven't used hooks yet</h1>
}

// Sử dụng Hooks, hỗ trợ thêm nhiều tính năng
function ComponentsB() {
    const initState = 0;
    //useState - trạng thái của dữ liệu
    const [state, setState] = useState(initState)
}