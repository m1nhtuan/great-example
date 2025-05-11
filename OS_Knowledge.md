# Kiến thức cần nắm về Hệ điều hành (Operating System)

## 1. Khái niệm và vai trò

- Hệ điều hành (OS) là phần mềm trung gian giữa phần cứng và phần mềm ứng dụng.
- Quản lý tài nguyên hệ thống: CPU, bộ nhớ, thiết bị I/O, file...
- Cung cấp môi trường cho các chương trình chạy và giao tiếp với phần cứng.

## 2. Các thành phần chính

- **Kernel:** Lõi hệ điều hành, quản lý tài nguyên, thực thi lệnh hệ thống.
- **Process Management:** Quản lý tiến trình (process), tạo, hủy, chuyển đổi trạng thái tiến trình.
- **Memory Management:** Quản lý bộ nhớ, cấp phát, thu hồi, phân trang (paging), bộ nhớ ảo (virtual memory).
- **File System:** Quản lý lưu trữ, tổ chức file, thư mục, phân quyền truy cập.
- **I/O System:** Quản lý thiết bị vào/ra, driver, buffer.
- **Scheduling:** Lập lịch CPU, quyết định tiến trình nào chạy tiếp theo (FCFS, RR, SJF, Priority...).

## 3. Các khái niệm quan trọng

- **Process/Thread:**
  - Process: Chương trình đang thực thi, có không gian địa chỉ riêng.
  - Thread: Luồng thực thi nhỏ nhất trong process, chia sẻ tài nguyên với các thread khác cùng process.
- **Context Switch:** Chuyển đổi CPU từ tiến trình/luồng này sang tiến trình/luồng khác.
- **Deadlock:** Tình trạng kẹt tài nguyên, các tiến trình chờ nhau vô hạn.
- **Virtual Memory:** Bộ nhớ ảo, cho phép chương trình dùng nhiều bộ nhớ hơn RAM vật lý.
- **Paging/Segmentation:** Kỹ thuật chia bộ nhớ thành trang/đoạn để quản lý hiệu quả.
- **Semaphore/Mutex:** Cơ chế đồng bộ hóa, tránh xung đột khi truy cập tài nguyên chung.
- **Inter-process Communication (IPC):** Giao tiếp giữa các tiến trình (pipe, message queue, shared memory...).

## 4. Ứng dụng thực tế

- Quản lý đa nhiệm, đa người dùng.
- Bảo mật, phân quyền truy cập.
- Tối ưu hiệu năng hệ thống.

## 5. Một số hệ điều hành phổ biến

- Windows, Linux, macOS, Android, iOS.
