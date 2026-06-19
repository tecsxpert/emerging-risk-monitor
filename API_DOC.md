# API Documentation

## Base URL

http://localhost:8080/api

---

## 1. Get All Risks

GET /api/risks

Response:
[
{
"id": 1,
"title": "Cyber Risk",
"description": "Testing",
"status": "OPEN"
}
]

---

## 2. Create Risk

POST /api/risks

Request:
{
"title": "Cyber Risk",
"description": "Test"
}

---

## 3. Update Risk

PUT /api/risks/{id}

---

## 4. Delete Risk

DELETE /api/risks/{id}

---

## 5. Search

GET /api/risks/search?keyword=cyber

---

## 6. Filter

GET /api/risks/filter?status=OPEN

---

## 7. Pagination

GET /api/risks?page=0&size=5
