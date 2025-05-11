# Ôn tập Design Patterns (Mẫu thiết kế) - C++

## 1. Singleton Pattern

**Ý tưởng:**

- Đảm bảo một lớp chỉ có duy nhất một instance (đối tượng) và cung cấp phương thức truy cập toàn cục.

**Giải thích code:**

```cpp
class Singleton {
private:
    static Singleton* instance;
    Singleton() {} // Constructor private
public:
    static Singleton* getInstance() {
        if (!instance)
            instance = new Singleton();
        return instance;
    }
};
Singleton* Singleton::instance = nullptr;
```

- `instance` là con trỏ tĩnh lưu instance duy nhất.
- Constructor private để không tạo được đối tượng bên ngoài.
- `getInstance()` tạo instance nếu chưa có, trả về instance.

**Lưu ý:**

- Dùng khi cần duy nhất một đối tượng quản lý tài nguyên (config, logger,...).
- Cần chú ý thread-safe nếu dùng đa luồng.

**Code C# tương đương:**

```csharp
public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static Singleton Instance {
        get {
            if (instance == null)
                instance = new Singleton();
            return instance;
        }
    }
}
```

---

## 2. Factory Pattern

**Ý tưởng:**

- Tạo đối tượng mà không cần biết chính xác lớp cụ thể sẽ được khởi tạo.

**Giải thích code:**

```cpp
class Product {
public:
    virtual void use() = 0;
};
class ConcreteProductA : public Product {
public:
    void use() override { cout << "A\n"; }
};
class ConcreteProductB : public Product {
public:
    void use() override { cout << "B\n"; }
};
class Factory {
public:
    static Product* createProduct(char type) {
        if (type == 'A') return new ConcreteProductA();
        else return new ConcreteProductB();
    }
};
```

- `Factory` quyết định tạo loại sản phẩm nào dựa vào tham số.
- Client chỉ cần gọi `Factory::createProduct` mà không cần biết chi tiết lớp con.

**Lưu ý:**

- Dễ mở rộng, thêm loại sản phẩm mới chỉ cần thêm lớp con.

**Code C# tương đương:**

```csharp
public abstract class Product {
    public abstract void Use();
}
public class ConcreteProductA : Product {
    public override void Use() { Console.WriteLine("A"); }
}
public class ConcreteProductB : Product {
    public override void Use() { Console.WriteLine("B"); }
}
public class Factory {
    public static Product CreateProduct(char type) {
        if (type == 'A') return new ConcreteProductA();
        else return new ConcreteProductB();
    }
}
```

---

## 3. Observer Pattern

**Ý tưởng:**

- Khi một đối tượng thay đổi trạng thái, tất cả các đối tượng phụ thuộc sẽ được thông báo và cập nhật tự động.

**Giải thích code:**

```cpp
class Observer {
public:
    virtual void update(int value) = 0;
};
class Subject {
    vector<Observer*> observers;
    int state;
public:
    void attach(Observer* obs) { observers.push_back(obs); }
    void setState(int val) {
        state = val;
        for (auto obs : observers) obs->update(state);
    }
};
class ConcreteObserver : public Observer {
public:
    void update(int value) override { cout << "Updated: " << value << endl; }
};
```

- `Subject` quản lý danh sách observer và thông báo khi có thay đổi.
- `Observer` định nghĩa phương thức update.

**Lưu ý:**

- Dùng cho các hệ thống event, GUI, hoặc khi nhiều đối tượng cần đồng bộ trạng thái.

**Code C# tương đương:**

```csharp
public interface IObserver {
    void Update(int value);
}
public class Subject {
    private List<IObserver> observers = new List<IObserver>();
    private int state;
    public void Attach(IObserver obs) { observers.Add(obs); }
    public void SetState(int val) {
        state = val;
        foreach (var obs in observers) obs.Update(state);
    }
}
public class ConcreteObserver : IObserver {
    public void Update(int value) { Console.WriteLine($"Updated: {value}"); }
}
```

---

## 4. Strategy Pattern

**Ý tưởng:**

- Cho phép thay đổi thuật toán thực thi tại runtime bằng cách đóng gói các thuật toán thành các class riêng biệt.

**Giải thích code:**

```cpp
class Strategy {
public:
    virtual void execute() = 0;
};
class ConcreteStrategyA : public Strategy {
public:
    void execute() override { cout << "A\n"; }
};
class ConcreteStrategyB : public Strategy {
public:
    void execute() override { cout << "B\n"; }
};
class Context {
    Strategy* strategy;
public:
    void setStrategy(Strategy* s) { strategy = s; }
    void doSomething() { strategy->execute(); }
};
```

- `Context` sử dụng một strategy, có thể thay đổi strategy động.

**Lưu ý:**

- Dễ mở rộng, thay đổi thuật toán mà không sửa code client.

**Code C# tương đương:**

```csharp
public interface IStrategy {
    void Execute();
}
public class ConcreteStrategyA : IStrategy {
    public void Execute() { Console.WriteLine("A"); }
}
public class ConcreteStrategyB : IStrategy {
    public void Execute() { Console.WriteLine("B"); }
}
public class Context {
    private IStrategy strategy;
    public void SetStrategy(IStrategy s) { strategy = s; }
    public void DoSomething() { strategy.Execute(); }
}
```

---

## 5. Decorator Pattern

**Ý tưởng:**

- Thêm chức năng cho đối tượng một cách linh hoạt mà không thay đổi code lớp gốc.

**Giải thích code:**

```cpp
class Component {
public:
    virtual void operation() = 0;
};
class ConcreteComponent : public Component {
public:
    void operation() override { cout << "Base\n"; }
};
class Decorator : public Component {
protected:
    Component* comp;
public:
    Decorator(Component* c) : comp(c) {}
    void operation() override {
        comp->operation();
        cout << " + Decorated\n";
    }
};
```

- `Decorator` nhận một đối tượng gốc, mở rộng chức năng bằng cách override method.

**Lưu ý:**

- Dùng khi muốn mở rộng chức năng mà không sửa code gốc.

**Code C# tương đương:**

```csharp
public abstract class Component {
    public abstract void Operation();
}
public class ConcreteComponent : Component {
    public override void Operation() { Console.WriteLine("Base"); }
}
public class Decorator : Component {
    protected Component comp;
    public Decorator(Component c) { comp = c; }
    public override void Operation() {
        comp.Operation();
        Console.WriteLine(" + Decorated");
    }
}
```

---

## 6. Một số Design Pattern phổ biến khác (Lý thuyết tóm tắt)

### Creational Patterns (Nhóm khởi tạo)

- **Abstract Factory**

  - Tạo ra các họ đối tượng liên quan mà không cần chỉ rõ lớp cụ thể.
  - Dùng khi hệ thống cần làm việc với nhiều họ sản phẩm liên quan.
  - Ví dụ: GUI toolkit cho nhiều hệ điều hành.

- **Builder**

  - Tách rời việc xây dựng một đối tượng phức tạp khỏi biểu diễn của nó.
  - Dùng khi đối tượng có nhiều bước khởi tạo hoặc nhiều cấu hình khác nhau.

- **Prototype**
  - Tạo đối tượng mới bằng cách sao chép một đối tượng mẫu (clone).
  - Dùng khi việc khởi tạo đối tượng tốn kém hoặc phức tạp.

---

### Structural Patterns (Nhóm cấu trúc)

- **Adapter**

  - Chuyển đổi interface của một lớp thành interface khác mà client mong muốn.
  - Dùng khi muốn tích hợp các class không tương thích.

- **Bridge**

  - Tách phần trừu tượng và phần triển khai để chúng có thể thay đổi độc lập.
  - Dùng khi cần mở rộng cả hai chiều abstraction và implementation.

- **Composite**

  - Gom nhóm các đối tượng thành cấu trúc dạng cây để xử lý như một đối tượng đơn lẻ.
  - Dùng cho các cấu trúc phân cấp (menu, file system,...).

- **Facade**

  - Cung cấp interface đơn giản cho một hệ thống phức tạp.
  - Dùng để giảm sự phụ thuộc giữa client và hệ thống con.

- **Proxy**
  - Đại diện cho đối tượng khác để kiểm soát truy cập, thêm chức năng (bảo mật, cache,...).
  - Dùng khi cần kiểm soát hoặc tối ưu hóa truy cập đối tượng thật.

---

### Behavioral Patterns (Nhóm hành vi)

- **Command**

  - Đóng gói một yêu cầu thành đối tượng, cho phép tham số hóa, xếp hàng, undo/redo.
  - Dùng cho các hệ thống menu, macro, undo.

- **Iterator**

  - Cung cấp cách duyệt các phần tử của một tập hợp mà không lộ cấu trúc bên trong.
  - Dùng cho các container, collection.

- **Mediator**

  - Định nghĩa đối tượng trung gian điều phối giao tiếp giữa các đối tượng khác.
  - Dùng để giảm sự phụ thuộc trực tiếp giữa các đối tượng.

- **Memento**

  - Lưu lại trạng thái nội tại của đối tượng để có thể khôi phục lại sau này.
  - Dùng cho undo/redo, checkpoint.

- **State**

  - Cho phép đối tượng thay đổi hành vi khi trạng thái nội tại thay đổi.
  - Dùng cho máy trạng thái (state machine).

- **Template Method**

  - Định nghĩa khung của thuật toán, cho phép các bước cụ thể được override ở lớp con.
  - Dùng khi có quy trình chung nhưng một số bước có thể thay đổi.

- **Visitor**

  - Cho phép định nghĩa thêm thao tác trên cấu trúc đối tượng mà không thay đổi class của chúng.
  - Dùng cho các cấu trúc phức tạp cần nhiều thao tác khác nhau.

- **Chain of Responsibility**

  - Truyền yêu cầu dọc theo chuỗi các handler cho đến khi có handler xử lý được.
  - Dùng cho hệ thống xử lý sự kiện, middleware.

- **Flyweight**

  - Tiết kiệm bộ nhớ bằng cách dùng chung các đối tượng giống nhau.
  - Dùng khi có nhiều đối tượng nhỏ giống nhau (ký tự, icon,...).

- **Interpreter**
  - Định nghĩa ngữ pháp và trình thông dịch cho ngôn ngữ đơn giản.
  - Dùng cho các ngôn ngữ kịch bản, biểu thức logic.

---

## Phân loại các Design Pattern

- **Creational Patterns (Nhóm khởi tạo):**
  - Singleton, Factory, Abstract Factory, Builder, Prototype
- **Structural Patterns (Nhóm cấu trúc):**
  - Adapter, Bridge, Composite, Decorator, Facade, Proxy, Flyweight
- **Behavioral Patterns (Nhóm hành vi):**
  - Observer, Strategy, Command, Iterator, Mediator, Memento, State, Template Method, Visitor, Chain of Responsibility, Interpreter

---

## Tổng kết mở rộng

- Design Pattern giúp code dễ bảo trì, mở rộng, tái sử dụng.
- Mỗi pattern giải quyết một vấn đề thiết kế cụ thể, nên chọn đúng hoàn cảnh.
- Không cần nhớ hết code, chỉ cần hiểu ý tưởng, ứng dụng và ưu nhược điểm.
