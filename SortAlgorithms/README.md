# Ôn tập thuật toán Sort & Search (Sắp xếp & Tìm kiếm) - C++

## I. Thuật toán Sắp xếp (Sorting Algorithms)

### 1. Bubble Sort (Sắp xếp nổi bọt)

**Ý tưởng:**

- Lặp qua mảng nhiều lần, mỗi lần so sánh từng cặp phần tử kề nhau.
- Nếu phần tử đứng trước lớn hơn phần tử đứng sau thì đổi chỗ cho nhau.
- Sau mỗi vòng lặp, phần tử lớn nhất sẽ "nổi" về cuối mảng.
- Lặp lại cho đến khi không còn đổi chỗ nào nữa (mảng đã sắp xếp).

**Giải thích code:**

```cpp
void bubbleSort(int a[], int n) {
    for (int i = 0; i < n - 1; ++i) { // Lặp qua từng phần tử (trừ phần tử cuối)
        for (int j = 0; j < n - i - 1; ++j) { // So sánh từng cặp kề nhau
            if (a[j] > a[j + 1]) // Nếu sai thứ tự
                std::swap(a[j], a[j + 1]); // Đổi chỗ
        }
    }
}
```

- Vòng lặp ngoài đảm bảo mỗi lần "nổi" phần tử lớn nhất còn lại về cuối.
- Vòng lặp trong thực hiện so sánh và đổi chỗ.

**Lưu ý:**

- Đơn giản, dễ nhớ, nhưng chậm (O(n^2)).
- Có thể tối ưu dừng sớm nếu không còn đổi chỗ.

---

### 2. Selection Sort (Sắp xếp chọn)

**Ý tưởng:**

- Ở mỗi lượt, tìm phần tử nhỏ nhất trong đoạn chưa sắp xếp và đưa về đầu đoạn đó.
- Lặp lại cho đến hết mảng.

**Giải thích code:**

```cpp
void selectionSort(int a[], int n) {
    for (int i = 0; i < n - 1; ++i) { // Duyệt từng vị trí đầu đoạn chưa sắp xếp
        int minIdx = i; // Giả sử phần tử đầu là nhỏ nhất
        for (int j = i + 1; j < n; ++j) // Tìm phần tử nhỏ nhất còn lại
            if (a[j] < a[minIdx]) minIdx = j;
        std::swap(a[i], a[minIdx]); // Đưa phần tử nhỏ nhất về đầu đoạn
    }
}
```

- Vòng ngoài chọn vị trí đầu đoạn chưa sắp xếp.
- Vòng trong tìm chỉ số phần tử nhỏ nhất.
- Đổi chỗ phần tử nhỏ nhất với đầu đoạn.

**Lưu ý:**

- Đơn giản, dễ cài đặt.
- Không ổn định, tốc độ O(n^2).

---

### 3. Insertion Sort (Sắp xếp chèn)

**Ý tưởng:**

- Xây dựng dãy đã sắp xếp từ trái sang phải.
- Lấy từng phần tử, chèn vào đúng vị trí trong dãy đã sắp xếp bên trái.

**Giải thích code:**

```cpp
void insertionSort(int a[], int n) {
    for (int i = 1; i < n; ++i) { // Bắt đầu từ phần tử thứ 2
        int key = a[i]; // Lưu giá trị cần chèn
        int j = i - 1;
        while (j >= 0 && a[j] > key) { // Dịch các phần tử lớn hơn sang phải
            a[j + 1] = a[j];
            --j;
        }
        a[j + 1] = key; // Chèn key vào đúng vị trí
    }
}
```

- Vòng ngoài chọn phần tử cần chèn.
- Vòng while dịch các phần tử lớn hơn sang phải.
- Chèn phần tử vào đúng vị trí.

**Lưu ý:**

- Tốt cho mảng nhỏ hoặc gần như đã sắp xếp.
- Ổn định, O(n^2).

---

### 4. Quick Sort (Sắp xếp nhanh)

**Ý tưởng:**

- Chọn một phần tử làm pivot (chốt), chia mảng thành 2 phần: nhỏ hơn và lớn hơn pivot.
- Đệ quy sắp xếp 2 phần này.

**Giải thích code:**

```cpp
int partition(int a[], int l, int r) {
    int pivot = a[r]; // Chọn pivot là phần tử cuối
    int i = l - 1; // i là chỉ số cuối cùng của phần nhỏ hơn pivot
    for (int j = l; j < r; ++j) {
        if (a[j] < pivot) {
            ++i;
            std::swap(a[i], a[j]); // Đưa phần tử nhỏ hơn pivot về bên trái
        }
    }
    std::swap(a[i + 1], a[r]); // Đưa pivot vào đúng vị trí
    return i + 1; // Trả về vị trí pivot
}
void quickSort(int a[], int l, int r) {
    if (l < r) {
        int pi = partition(a, l, r); // Chia mảng
        quickSort(a, l, pi - 1); // Đệ quy bên trái
        quickSort(a, pi + 1, r); // Đệ quy bên phải
    }
}
```

- Hàm partition chia mảng dựa trên pivot.
- Đệ quy sắp xếp hai nửa.

**Lưu ý:**

- Trung bình O(n log n), tệ nhất O(n^2) (nếu chọn pivot xấu).
- Không ổn định.

---

### 5. Merge Sort (Sắp xếp trộn)

**Ý tưởng:**

- Chia mảng thành 2 nửa, đệ quy sắp xếp từng nửa rồi trộn lại.

**Giải thích code:**

```cpp
void merge(int a[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2];
    for (int i = 0; i < n1; ++i) L[i] = a[l + i]; // Copy nửa trái
    for (int i = 0; i < n2; ++i) R[i] = a[m + 1 + i]; // Copy nửa phải
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) // Trộn hai nửa
        a[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    while (i < n1) a[k++] = L[i++]; // Thêm phần còn lại
    while (j < n2) a[k++] = R[j++];
}
void mergeSort(int a[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(a, l, m); // Sắp xếp nửa trái
        mergeSort(a, m + 1, r); // Sắp xếp nửa phải
        merge(a, l, m, r); // Trộn hai nửa
    }
}
```

- Hàm merge trộn hai nửa đã sắp xếp.
- Đệ quy chia nhỏ mảng cho đến khi chỉ còn 1 phần tử.

**Lưu ý:**

- Ổn định, luôn O(n log n).
- Tốn bộ nhớ phụ.

---

## II. Thuật toán Tìm kiếm (Searching Algorithms)

### 1. Tìm kiếm tuyến tính (Linear Search)

**Ý tưởng:**

- Duyệt từng phần tử trong mảng, so sánh với giá trị cần tìm.
- Nếu tìm thấy thì trả về vị trí, nếu không thì trả về -1.

**Giải thích code:**

```cpp
int linearSearch(int a[], int n, int x) {
    for (int i = 0; i < n; ++i) { // Duyệt từng phần tử
        if (a[i] == x) // Nếu tìm thấy
            return i; // Trả về vị trí
    }
    return -1; // Không tìm thấy
}
```

- Vòng lặp duyệt từng phần tử, so sánh với x.
- Độ phức tạp O(n).

---

### 2. Tìm kiếm nhị phân (Binary Search)

**Ý tưởng:**

- Áp dụng cho mảng đã sắp xếp.
- So sánh giá trị cần tìm với phần tử ở giữa:
  - Nếu bằng thì trả về vị trí.
  - Nếu nhỏ hơn thì tìm bên trái.
  - Nếu lớn hơn thì tìm bên phải.
- Lặp lại cho đến khi tìm thấy hoặc hết mảng.

**Giải thích code:**

```cpp
int binarySearch(int a[], int n, int x) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2; // Tìm chỉ số giữa
        if (a[m] == x) return m; // Tìm thấy
        if (a[m] < x) l = m + 1; // Tìm bên phải
        else r = m - 1; // Tìm bên trái
    }
    return -1; // Không tìm thấy
}
```

- Vòng lặp chia đôi mảng liên tục.
- Độ phức tạp O(log n).

---

## III. Thuật toán duyệt đồ thị (Graph Traversal Algorithms)

### 1. Biểu diễn đồ thị

- **Ma trận kề (Adjacency Matrix):**
  - Sử dụng mảng 2 chiều `adj[n][n]`, `adj[i][j] = 1` nếu có cạnh từ i đến j, ngược lại là 0.
- **Danh sách kề (Adjacency List):**
  - Sử dụng mảng vector `vector<int> adj[n]`, mỗi phần tử lưu các đỉnh kề với đỉnh đó.

### 2. Duyệt theo chiều rộng (Breadth-First Search - BFS)

**Ý tưởng:**

- Duyệt các đỉnh theo từng lớp, bắt đầu từ đỉnh xuất phát, sau đó đến các đỉnh kề, rồi đến các đỉnh kề của các đỉnh đó, v.v.
- Sử dụng hàng đợi (queue) để lưu các đỉnh sẽ duyệt tiếp theo.

**Giải thích code:**

```cpp
void bfs(int start, const vector<vector<int>>& adj, vector<bool>& visited) {
    queue<int> q;
    q.push(start); // Đưa đỉnh xuất phát vào hàng đợi
    visited[start] = true; // Đánh dấu đã thăm
    while (!q.empty()) {
        int u = q.front(); q.pop(); // Lấy đỉnh đầu hàng đợi
        cout << u << " "; // Xử lý đỉnh u
        for (int v : adj[u]) { // Duyệt các đỉnh kề
            if (!visited[v]) {
                q.push(v); // Đưa vào hàng đợi
                visited[v] = true; // Đánh dấu đã thăm
            }
        }
    }
}
```

- Sử dụng queue để duyệt theo từng lớp.
- Đánh dấu các đỉnh đã thăm để tránh lặp vô hạn.

**Lưu ý:**

- Tìm đường đi ngắn nhất trên đồ thị không trọng số.
- Độ phức tạp O(V + E) với V là số đỉnh, E là số cạnh.

---

### 3. Duyệt theo chiều sâu (Depth-First Search - DFS)

**Ý tưởng:**

- Duyệt càng sâu càng tốt, đi hết một nhánh rồi mới quay lại các nhánh khác.
- Có thể cài đặt bằng đệ quy hoặc stack.

**Giải thích code (đệ quy):**

```cpp
void dfs(int u, const vector<vector<int>>& adj, vector<bool>& visited) {
    visited[u] = true; // Đánh dấu đã thăm
    cout << u << " "; // Xử lý đỉnh u
    for (int v : adj[u]) { // Duyệt các đỉnh kề
        if (!visited[v])
            dfs(v, adj, visited); // Đệ quy sang đỉnh kề
    }
}
```

- Đánh dấu đã thăm trước khi duyệt các đỉnh kề.
- Đệ quy sang các đỉnh kề chưa thăm.

**Lưu ý:**

- Dùng để kiểm tra liên thông, tìm thành phần liên thông, duyệt toàn bộ đồ thị.
- Độ phức tạp O(V + E).

---

### 4. Một số ứng dụng quan trọng

- Kiểm tra liên thông đồ thị.
- Tìm đường đi ngắn nhất (BFS cho đồ thị không trọng số).
- Tìm thành phần liên thông mạnh/yếu.
- Tìm chu trình, topo sort (DFS).

## Tổng kết

- Sắp xếp: O(n^2): Bubble, Selection, Insertion (dễ nhớ, dễ cài, dùng cho mảng nhỏ). O(n log n): Quick Sort (nhanh, phổ biến), Merge Sort (ổn định, dùng cho dữ liệu lớn).
- Tìm kiếm: Linear Search (mọi mảng, chậm), Binary Search (mảng đã sắp xếp, rất nhanh).
- Nên nhớ ưu nhược điểm, tính ổn định, độ phức tạp và khi nào nên dùng từng thuật toán.
