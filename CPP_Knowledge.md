# Kiến thức cơ bản về C++ và ví dụ minh họa

## 1. Giới thiệu về C++

- C++ là ngôn ngữ lập trình bậc cao, đa năng, hỗ trợ lập trình hướng đối tượng (OOP), phát triển từ C.
- Ứng dụng: phát triển phần mềm, game, hệ điều hành, nhúng, AI...

## 2. Cấu trúc chương trình C++ cơ bản

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, world!" << endl;
    return 0;
}
```

## 3. Biến, kiểu dữ liệu, hằng số

```cpp
int a = 10;           // số nguyên
float b = 3.14f;      // số thực
char c = 'A';         // ký tự
const double PI = 3.14159; // hằng số
```

## 4. Toán tử

- Toán tử số học: +, -, \*, /, %
- Toán tử so sánh: ==, !=, <, >, <=, >=
- Toán tử logic: &&, ||, !
- Toán tử gán: =, +=, -=, ...

## 5. Câu lệnh điều kiện

```cpp
if (a > 0) {
    cout << "a dương";
} else {
    cout << "a không dương";
}

switch (c) {
    case 'A': cout << "A"; break;
    default: cout << "Khác";
}
```

## 6. Vòng lặp

```cpp
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}

int j = 0;
while (j < 5) {
    cout << j << " ";
    j++;
}
```

## 7. Hàm

```cpp
int tong(int x, int y) {
    return x + y;
}

int main() {
    cout << tong(3, 4); // In ra 7
}
```

## 8. Mảng, chuỗi

```cpp
int arr[3] = {1, 2, 3};
cout << arr[0]; // 1

char str[] = "Hello";
printf("%s", str); // Cách C
cout << str; // Cách C++
```

## 9. Con trỏ

```cpp
int a = 5;
int* p = &a;
cout << *p; // 5
```

## 10. Struct và class

```cpp
struct Point {
    int x, y;
};

class Person {
public:
    string name;
    int age;
    void introduce() {
        cout << "Tên: " << name << ", Tuổi: " << age << endl;
    }
};
```

## 11. Lập trình hướng đối tượng (OOP)

- **Kế thừa:** class con kế thừa thuộc tính/hàm từ class cha.
- **Đa hình:** cùng tên hàm, hành vi khác nhau.
- **Đóng gói:** che giấu thông tin, chỉ cho phép truy cập qua hàm public.

```cpp
class Animal {
public:
    virtual void speak() { cout << "Animal"; }
};
class Dog : public Animal {
public:
    void speak() override { cout << "Gâu gâu"; }
};
```

## 12. Thư viện chuẩn (STL)

```cpp
#include <vector>
#include <string>
#include <algorithm>

vector<int> v = {1, 2, 3};
v.push_back(4);
for (int x : v) cout << x << " ";
```

## 13. Một số ví dụ tổng hợp

- **Tính tổng mảng:**

```cpp
int arr[] = {1, 2, 3, 4, 5};
int sum = 0;
for (int i = 0; i < 5; i++) sum += arr[i];
cout << sum; // 15
```

- **Đảo ngược chuỗi:**

```cpp
string s = "hello";
reverse(s.begin(), s.end());
cout << s; // olleh
```

## 14. Dịch bit trong C++ (Bitwise Shift)

- **Dịch trái (<<):** Dịch các bit sang trái, tương đương nhân với 2^n.
- **Dịch phải (>>):** Dịch các bit sang phải, tương đương chia cho 2^n (bỏ phần dư).

```cpp
int a = 5;      // 0000 0101
int b = a << 1; // 0000 1010 = 10 (dịch trái 1 bit, nhân 2)
int c = a >> 1; // 0000 0010 = 2  (dịch phải 1 bit, chia 2)
cout << b << " " << c; // 10 2
```

- **Ứng dụng:**
  - Tăng tốc tính toán nhân/chia cho 2^n.
  - Kiểm tra, thiết lập, xóa bit trong lập trình hệ thống, nhúng.
