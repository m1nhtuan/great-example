# Tóm tắt các chương Hệ điều hành

## Chương 1: Tổng quan về hệ điều hành

- Định nghĩa hệ điều hành, vai trò trung gian giữa phần cứng và phần mềm.
- Lịch sử phát triển, phân loại (đa nhiệm, đa người dùng, nhúng, thời gian thực).
- Các chức năng cơ bản: quản lý tài nguyên, cung cấp môi trường thực thi, bảo mật.

## Chương 2: Cấu trúc Hệ điều hành

- Các mô hình cấu trúc: đơn giản, phân lớp, vi nhân, mô-đun.
- Ưu nhược điểm từng mô hình.
- Ví dụ thực tế: UNIX, Windows, Linux.

## Chương 3: Quản lý tiến trình (Processes)

- Khái niệm tiến trình, luồng, PCB.
- Các trạng thái tiến trình, chuyển đổi trạng thái.
- Tạo, hủy, đồng bộ, giao tiếp giữa các tiến trình.

## Chương 4: Định thời CPU

- Mục tiêu: tối ưu sử dụng CPU, giảm thời gian chờ.
- Các thuật toán: FCFS, SJF, RR, Priority, Multilevel Queue.
- Tiêu chí đánh giá: throughput, turnaround, waiting, response time.

## Chương 5: Đồng bộ hóa tiến trình

- Vấn đề race condition, critical section.
- Các giải pháp: semaphore, mutex, monitor, Peterson, Bakery.
- Ý nghĩa đồng bộ hóa trong đa tiến trình/đa luồng.

## Chương 6: Tắc nghẽn (Deadlocks)

- Định nghĩa deadlock, ví dụ thực tế.
- 4 điều kiện Coffman gây deadlock.
- Phòng tránh, phát hiện, phục hồi deadlock.

## Chương 7: Quản lý bộ nhớ

- Cấp phát bộ nhớ: phân vùng tĩnh/động, phân đoạn, paging.
- Fragmentation: nội bộ, bên ngoài.
- Swapping, bảo vệ bộ nhớ.

## Chương 8: Bộ nhớ ảo

- Khái niệm, vai trò bộ nhớ ảo.
- Paging, page table, TLB.
- Thuật toán thay thế trang: FIFO, LRU, Optimal, Clock.
- Hiện tượng thrashing.

## Chương 9: Hệ thống quản lý tập tin

- Cấu trúc file, thư mục, inode.
- Cấp phát file: liên tục, liên kết, đánh chỉ mục.
- Quản lý không gian trống, phân quyền truy cập.

## Chương 10: Hệ thống quản lý nhập/xuất

- Cơ chế I/O: polling, interrupt, DMA.
- Buffering, caching, spooling.
- Lập lịch đĩa: FCFS, SSTF, SCAN, LOOK.

## Chương 11: Bảo vệ và an toàn hệ thống

- Khái niệm bảo vệ (protection) và an toàn (security).
- Kiểm soát truy cập: access matrix, ACL, capability list.
- Xác thực, phân quyền, mã hóa, firewall, các mối đe dọa bảo mật.
