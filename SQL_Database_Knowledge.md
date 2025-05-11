# Kiến thức cơ bản về Cơ sở dữ liệu và SQL

## 1. Cơ sở dữ liệu là gì?

- Cơ sở dữ liệu (Database) là nơi lưu trữ, tổ chức và quản lý dữ liệu có cấu trúc.
- Cơ sở dữ liệu quan hệ (RDBMS) như MySQL, PostgreSQL, SQL Server, Oracle dùng bảng (table) để lưu dữ liệu.

## 2. Các khái niệm cơ bản

- **Table (Bảng):** Tập hợp các dòng (record/row) và cột (field/column).
- **Row (Bản ghi):** Một dòng dữ liệu trong bảng.
- **Column (Trường):** Một thuộc tính của bảng.
- **Primary Key:** Khóa chính, định danh duy nhất cho mỗi bản ghi.
- **Foreign Key:** Khóa ngoại, liên kết giữa các bảng.
- **Index:** Chỉ mục, tăng tốc truy vấn.

## 3. Các lệnh SQL cơ bản

- **Tạo bảng:**

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);
```

- **Chèn dữ liệu:**

```sql
INSERT INTO users (name, email) VALUES ('Nguyen Van A', 'a@gmail.com');
```

- **Truy vấn dữ liệu:**

```sql
SELECT * FROM users;
SELECT name FROM users WHERE id = 1;
```

- **Cập nhật dữ liệu:**

```sql
UPDATE users SET name = 'Nguyen Van B' WHERE id = 1;
```

- **Xóa dữ liệu:**

```sql
DELETE FROM users WHERE id = 1;
```

## 4. Truy vấn nâng cao

- **Sắp xếp:**

```sql
SELECT * FROM users ORDER BY name DESC;
```

- **Lọc dữ liệu:**

```sql
SELECT * FROM users WHERE email LIKE '%gmail.com';
```

- **Kết hợp bảng (JOIN):**

```sql
SELECT users.name, orders.amount
FROM users
JOIN orders ON users.id = orders.user_id;
```

- **Nhóm và tổng hợp:**

```sql
SELECT COUNT(*), email FROM users GROUP BY email;
```

## 5. Thực tiễn tốt khi làm việc với SQL

- Đặt tên bảng, cột rõ ràng, nhất quán.
- Luôn dùng khóa chính cho mỗi bảng.
- Sử dụng chỉ mục (index) cho các cột thường truy vấn.
- Tránh lặp dữ liệu, thiết kế chuẩn hóa (normalization).
- Sao lưu dữ liệu định kỳ.

## 6. Ví dụ thực tế

- **Tạo bảng sản phẩm và đơn hàng:**

```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    amount INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

- **Truy vấn tổng số đơn hàng của mỗi người dùng:**

```sql
SELECT users.name, COUNT(orders.id) AS total_orders
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.name;
```

## 7. Một số hệ quản trị cơ sở dữ liệu phổ biến

- MySQL, PostgreSQL, SQLite, SQL Server, Oracle.
