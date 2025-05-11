# Kiến thức cần nắm về Pointer (Con trỏ) trong C++

## 1. Khái niệm

- Con trỏ (pointer) là biến lưu địa chỉ của biến khác trong bộ nhớ.
- Cho phép truy cập, thao tác trực tiếp trên vùng nhớ.

## 2. Khai báo và sử dụng

```cpp
int a = 10;
int* p = &a; // p lưu địa chỉ của a
std::cout << *p << std::endl; // *p truy cập giá trị tại địa chỉ p (in ra 10)
```

## 3. Con trỏ và mảng

- Tên mảng là con trỏ tới phần tử đầu tiên.

```cpp
int arr[5] = {1,2,3,4,5};
int* p = arr;
std::cout << *(p+2) << std::endl; // in ra 3
```

## 4. Con trỏ hàm

- Lưu địa chỉ hàm, gọi hàm qua con trỏ.

```cpp
int sum(int a, int b) { return a+b; }
int (*fptr)(int,int) = sum;
std::cout << fptr(2,3) << std::endl; // in ra 5
```

## 5. Cấp phát động với con trỏ

```cpp
int* p = new int[10]; // cấp phát mảng 10 int
// ... sử dụng p
delete[] p; // giải phóng bộ nhớ
```

## 6. Con trỏ null, void

- `nullptr` là con trỏ không trỏ tới đâu (thay cho NULL trong C++ hiện đại).
- `void*` là con trỏ đa dụng, cần ép kiểu khi sử dụng.

## 7. Smart pointer (con trỏ thông minh)

- Quản lý bộ nhớ tự động, tránh memory leak.

```cpp
#include <memory>
std::unique_ptr<int> p1(new int(5));
std::shared_ptr<int> p2 = std::make_shared<int>(10);
```

## 8. Lỗi thường gặp

- **Dangling pointer:** Con trỏ trỏ tới vùng nhớ đã giải phóng.
- **Memory leak:** Không giải phóng bộ nhớ đã cấp phát (dùng new mà không delete).
- **Wild pointer:** Con trỏ chưa khởi tạo.

## 9. Ứng dụng

- Truyền tham chiếu, quản lý bộ nhớ động, cấu trúc dữ liệu động (linked list, tree...), callback function, thao tác với mảng động, quản lý tài nguyên.

## 10. Ví dụ tổng hợp

- **Truyền tham chiếu qua con trỏ:**

```cpp
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
int x = 3, y = 5;
swap(&x, &y);
std::cout << x << " " << y << std::endl; // 5 3
```

- **Con trỏ đối tượng:**

```cpp
class Person {
public:
    void sayHello() { std::cout << "Hello!" << std::endl; }
};
Person p;
Person* ptr = &p;
ptr->sayHello();
```
