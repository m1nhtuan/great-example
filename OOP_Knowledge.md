# Kiến Thức OOP Trong C++

## 1. Giới thiệu OOP

Lập trình hướng đối tượng (OOP - Object Oriented Programming) là một phương pháp lập trình dựa trên khái niệm "đối tượng". OOP giúp tổ chức chương trình thành các đối tượng có thuộc tính và hành vi, giúp mã nguồn dễ bảo trì, mở rộng và tái sử dụng.

## 2. Class & Object

- **Class (Lớp):** Khuôn mẫu mô tả thuộc tính và hành vi của đối tượng.
- **Object (Đối tượng):** Thể hiện cụ thể của một lớp.

```cpp
class Animal {
public:
    std::string name;
    void speak() {
        std::cout << "Animal speaks" << std::endl;
    }
};

int main() {
    Animal dog;
    dog.name = "Dog";
    dog.speak();
    return 0;
}
```

## 3. Encapsulation (Đóng gói)

- Che giấu thông tin, chỉ cho phép truy cập qua các phương thức công khai.
- Sử dụng các phạm vi truy cập: `private`, `protected`, `public`.

```cpp
class Person {
private:
    int age;
public:
    void setAge(int a) { age = a; }
    int getAge() { return age; }
};
```

## 4. Inheritance (Kế thừa)

- Cho phép lớp con kế thừa thuộc tính và phương thức từ lớp cha.

```cpp
class Animal {
public:
    void eat() { std::cout << "Eating..." << std::endl; }
};

class Dog : public Animal {
public:
    void bark() { std::cout << "Woof!" << std::endl; }
};
```

## 5. Polymorphism (Đa hình)

- Cho phép đối tượng có nhiều hình thái khác nhau.
- Sử dụng hàm ảo (`virtual`) và ghi đè (`override`).

```cpp
class Animal {
public:
    virtual void speak() { std::cout << "Animal sound" << std::endl; }
};

class Cat : public Animal {
public:
    void speak() override { std::cout << "Meow" << std::endl; }
};

void makeSound(Animal* a) {
    a->speak();
}
```

## 6. Abstraction (Trừu tượng)

- Ẩn chi tiết cài đặt, chỉ hiển thị những gì cần thiết.
- Sử dụng lớp trừu tượng với hàm thuần ảo.

```cpp
class Shape {
public:
    virtual void draw() = 0; // pure virtual function
};

class Circle : public Shape {
public:
    void draw() override { std::cout << "Draw Circle" << std::endl; }
};
```

## 7. Từ khóa quan trọng

- `public`, `private`, `protected`
- `virtual`, `override`
- `this` pointer
- `friend` function/class
- `static` member

## 8. Ví dụ tổng hợp

```cpp
#include <iostream>
#include <string>
using namespace std;

class Animal {
protected:
    string name;
public:
    Animal(string n) : name(n) {}
    virtual void speak() = 0; // pure virtual
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}
    void speak() override {
        cout << name << " says Woof!" << endl;
    }
};

class Cat : public Animal {
public:
    Cat(string n) : Animal(n) {}
    void speak() override {
        cout << name << " says Meow!" << endl;
    }
};

int main() {
    Animal* a1 = new Dog("Rex");
    Animal* a2 = new Cat("Kitty");
    a1->speak();
    a2->speak();
    delete a1;
    delete a2;
    return 0;
}
```

---

**Tài liệu này tổng hợp các kiến thức cơ bản về OOP trong C++. Nếu bạn cần thêm ví dụ hoặc giải thích chi tiết hơn, hãy bổ sung vào file này!**
