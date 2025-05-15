# Kiến thức cần nắm về Hệ điều hành (Operating System)

## 1. Khái niệm và vai trò

- Hệ điều hành (OS) là phần mềm trung gian giữa phần cứng và phần mềm ứng dụng.
- Quản lý tài nguyên hệ thống: CPU, bộ nhớ, thiết bị I/O, file...
- Cung cấp môi trường cho các chương trình chạy và giao tiếp với phần cứng.
- **Lịch sử phát triển:** Từ hệ điều hành batch, time-sharing đến hiện đại.
- **Phân loại:** Đơn nhiệm/đa nhiệm, đơn người dùng/đa người dùng, nhúng, phân tán, thời gian thực.
- **API hệ điều hành:** Giao diện lập trình ứng dụng cho phép phần mềm tương tác với OS.

## 2. Các thành phần chính

- **Kernel:** Lõi hệ điều hành, quản lý tài nguyên, thực thi lệnh hệ thống.
- **Process Management:** Quản lý tiến trình (process), tạo, hủy, chuyển đổi trạng thái tiến trình.
- **Memory Management:** Quản lý bộ nhớ, cấp phát, thu hồi, phân trang (paging), bộ nhớ ảo (virtual memory).
- **File System:** Quản lý lưu trữ, tổ chức file, thư mục, phân quyền truy cập.
- **I/O System:** Quản lý thiết bị vào/ra, driver, buffer.
- **Scheduling:** Lập lịch CPU, quyết định tiến trình nào chạy tiếp theo (FCFS, RR, SJF, Priority...).
- **Cấu trúc hệ điều hành:** Đơn giản, phân lớp, vi nhân (microkernel), mô-đun. Mỗi loại có ưu nhược điểm riêng.

## 3. Các khái niệm quan trọng

- **Process/Thread:**
  - Process: Chương trình đang thực thi, có không gian địa chỉ riêng.
    - **Giải thích:** Mỗi process là một thực thể độc lập, có vùng nhớ, tài nguyên và thông tin điều khiển riêng. Khi một chương trình được chạy, hệ điều hành tạo ra một process để quản lý việc thực thi chương trình đó.
  - Thread: Luồng thực thi nhỏ nhất trong process, chia sẻ tài nguyên với các thread khác cùng process.
    - **Giải thích:** Một process có thể chứa nhiều thread. Các thread trong cùng một process chia sẻ bộ nhớ và tài nguyên, nhưng mỗi thread có ngăn xếp (stack) và bộ đếm chương trình (program counter) riêng. Đa luồng giúp tăng hiệu suất và tận dụng CPU đa nhân.
- **PCB (Process Control Block):** Lưu trữ thông tin về tiến trình.
  - **Giải thích:** PCB là cấu trúc dữ liệu mà hệ điều hành dùng để lưu trữ trạng thái, thông tin quản lý của mỗi process như: ID, trạng thái, bộ đếm chương trình, con trỏ ngăn xếp, thông tin cấp phát tài nguyên...
- **Context Switch:** Chuyển đổi CPU từ tiến trình/luồng này sang tiến trình/luồng khác.
  - **Giải thích:** Khi CPU chuyển từ thực thi process/thread này sang process/thread khác, hệ điều hành phải lưu lại trạng thái của tiến trình hiện tại và nạp trạng thái của tiến trình tiếp theo. Quá trình này gọi là context switch, giúp thực hiện đa nhiệm nhưng cũng gây tốn thời gian hệ thống.
- **Deadlock:** Tình trạng kẹt tài nguyên, các tiến trình chờ nhau vô hạn.
  - **Giải thích:** Deadlock xảy ra khi một nhóm tiến trình đều chờ tài nguyên do các tiến trình khác trong nhóm giữ, dẫn đến tất cả đều không thể tiếp tục thực thi.
- **Điều kiện gây deadlock (Coffman conditions).**
  - **Mutual Exclusion (Bất khả xâm phạm):** Tài nguyên chỉ được một tiến trình chiếm giữ tại một thời điểm.
    - **Giải thích:** Ví dụ: máy in chỉ in cho một tiến trình tại một thời điểm, không thể chia sẻ đồng thời.
  - **Hold and Wait (Giữ và chờ):** Tiến trình đang giữ ít nhất một tài nguyên và chờ để được cấp thêm tài nguyên khác.
    - **Giải thích:** Tiến trình vừa giữ máy in, vừa chờ ổ đĩa.
  - **No Preemption (Không bị thu hồi):** Tài nguyên không thể bị thu hồi cưỡng bức từ tiến trình đang giữ nó, chỉ được giải phóng tự nguyện.
    - **Giải thích:** Hệ điều hành không thể tự ý lấy lại tài nguyên, chỉ khi tiến trình tự giải phóng.
  - **Circular Wait (Chờ vòng):** Tồn tại một chu trình các tiến trình, mỗi tiến trình chờ tài nguyên do tiến trình tiếp theo trong chu trình giữ.
    - **Giải thích:** Tiến trình A giữ tài nguyên 1, chờ tài nguyên 2; tiến trình B giữ tài nguyên 2, chờ tài nguyên 1.
- **Virtual Memory:** Bộ nhớ ảo, cho phép chương trình dùng nhiều bộ nhớ hơn RAM vật lý.
  - **Giải thích:** Virtual Memory là kỹ thuật cho phép hệ điều hành tạo ra không gian địa chỉ bộ nhớ lớn hơn bộ nhớ vật lý thực tế (RAM) bằng cách sử dụng một phần ổ đĩa làm bộ nhớ tạm thời (swap/page file). Nhờ đó, các chương trình có thể chạy mà không bị giới hạn bởi dung lượng RAM vật lý, đồng thời giúp cách ly không gian bộ nhớ giữa các tiến trình, tăng tính bảo mật và ổn định hệ thống.
  - **Cơ chế hoạt động:** Khi bộ nhớ vật lý đầy, các trang (page) dữ liệu ít sử dụng sẽ được chuyển tạm sang ổ đĩa. Khi cần truy cập lại, hệ điều hành sẽ nạp trang đó từ ổ đĩa vào RAM (gây ra hiện tượng page fault).
  - **Ưu điểm:** Chạy được nhiều chương trình lớn, tăng hiệu quả sử dụng bộ nhớ, bảo vệ tiến trình.
  - **Nhược điểm:** Nếu sử dụng quá nhiều sẽ gây hiện tượng thrashing (hệ thống liên tục chuyển trang giữa RAM và ổ đĩa, làm chậm hệ thống).
- **Paging/Segmentation:** Kỹ thuật chia bộ nhớ thành trang/đoạn để quản lý hiệu quả.
  - **Giải thích:**
    - **Paging:** Bộ nhớ được chia thành các khối nhỏ có kích thước bằng nhau gọi là trang (page). Quản lý theo trang giúp loại bỏ fragmentation bên ngoài và dễ cấp phát bộ nhớ.
    - **Segmentation:** Bộ nhớ được chia thành các đoạn (segment) có kích thước khác nhau, phù hợp với cấu trúc logic của chương trình (code, data, stack...).
- **Semaphore/Mutex:** Cơ chế đồng bộ hóa, tránh xung đột khi truy cập tài nguyên chung.
  - **Giải thích:**
    - **Semaphore:** Biến đếm dùng để kiểm soát truy cập tài nguyên dùng chung, hỗ trợ đồng bộ hóa nhiều tiến trình.
    - **Mutex:** Đối tượng khóa, chỉ cho phép một tiến trình/luồng truy cập tài nguyên tại một thời điểm, thường dùng cho đồng bộ hóa trong đa luồng.
- **Các giải pháp đồng bộ hóa: Peterson, Bakery, test-and-set, monitor, condition variable.**
  - **Giải thích:** Đây là các thuật toán và cơ chế phần mềm/hardware giúp đảm bảo chỉ một tiến trình/luồng vào vùng tới hạn (critical section) tại một thời điểm, tránh race condition.
- **Inter-process Communication (IPC):** Giao tiếp giữa các tiến trình (pipe, message queue, shared memory...).
  - **Giải thích:** IPC là tập hợp các cơ chế cho phép các tiến trình trao đổi dữ liệu, đồng bộ hóa hoạt động với nhau. Ví dụ: pipe truyền dữ liệu dạng luồng, message queue gửi/nhận thông điệp, shared memory chia sẻ vùng nhớ chung.

## 4. Ứng dụng thực tế

- Quản lý đa nhiệm, đa người dùng.
- Bảo mật, phân quyền truy cập.
- Tối ưu hiệu năng hệ thống.
- Ứng dụng trong hệ thống nhúng, máy chủ, thiết bị di động.
- Đảm bảo an toàn, phục hồi sau lỗi, bảo vệ dữ liệu.

## 5. Một số hệ điều hành phổ biến

- Windows, Linux, macOS, Android, iOS.
- **Ví dụ về cấu trúc và đặc điểm từng hệ điều hành:**
  - Windows: giao diện đồ họa mạnh, hỗ trợ đa nhiệm, bảo mật tích hợp.
  - Linux: mã nguồn mở, đa dạng bản phân phối, mạnh về server.
  - macOS: giao diện đẹp, tối ưu cho phần cứng Apple.
  - Android/iOS: hệ điều hành di động phổ biến, tối ưu cho cảm ứng và ứng dụng di động.

## 6. Một số chủ đề mở rộng cần lưu ý

- **Định thời CPU:** Các thuật toán định thời (FCFS, SJF, RR, Priority, Multilevel Queue...).
- **Quản lý bộ nhớ:** Phân vùng tĩnh/động, phân đoạn, cấp phát bộ nhớ, fragmentation.
- **Bộ nhớ ảo:** Page table, TLB, thay thế trang (FIFO, LRU, Optimal, Clock), thrashing.
- **Quản lý tập tin:** Cấu trúc file, thư mục, inode, phân quyền, journaling file system.
- **Quản lý nhập/xuất:** Polling, interrupt, DMA, buffering, disk scheduling (SSTF, SCAN, LOOK).
- **Bảo vệ và an toàn:** Access matrix, ACL, capability list, xác thực, phân quyền, mã hóa, firewall.
