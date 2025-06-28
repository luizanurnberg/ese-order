# ese-order

Microservice responsible for managing **quotations**, **offers**, and **customer interactions** within the NHS Log platform. This service is part of a broader service-oriented architecture built with Node.js and Docker.

## 📦 Description

The `ese-order` service handles critical business processes such as:

- Quotation requests
- Offer creation and validation
- Scheduling pickups
- Customer acceptance of offers
- Retrieving existing quotations

It plays a central role in the logistics workflow, acting as the bridge between customer inputs and internal processing handled by other services.

---

## 🧩 Functional Requirements

This service implements the following system-level requirements:

| Requirement ID | Description |
|----------------|-------------|
| RF003          | Request transport quotation |
| RF004          | Define the type of material to be transported |
| RF006          | Admin creates offers |
| RF007          | Customer accepts an offer |
| RF008          | Schedule collection |
| RF014          | Admin views existing quotations |

---

## ⚙️ Technologies

- **Node.js** (TypeScript)
- **Express.js** for HTTP routing
- **PostgreSQL** with Sequelize ORM
- REST communication
- Docker & Docker Compose

---

## 🐳 Docker Setup

The `ese-order` service is containerized and defined in the main `docker-compose.yml` as `ese-order`. It includes:

- A dedicated PostgreSQL database instance named `postgres-order`, running on port `5433`.
- Environment variables for database connection and service configuration.
- Dependency declaration to ensure the database starts before the service.
