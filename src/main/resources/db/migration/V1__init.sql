-- This creates the main table for storing risks

CREATE TABLE IF NOT EXISTS emerging_risk (
    id              BIGSERIAL PRIMARY KEY,
    title           VARCHAR(200)    NOT NULL,
    description     TEXT,
    category        VARCHAR(100)    NOT NULL,
    severity        VARCHAR(50)     NOT NULL DEFAULT 'MEDIUM',
    status          VARCHAR(50)     NOT NULL DEFAULT 'OPEN',
    risk_score      INTEGER         CHECK (risk_score BETWEEN 1 AND 10),
    identified_date DATE            NOT NULL DEFAULT CURRENT_DATE,
    due_date        DATE,
    owner_name      VARCHAR(150),
    owner_email     VARCHAR(200),
    ai_description  TEXT,
    ai_category     VARCHAR(100),
    created_by      VARCHAR(150),
    updated_by      VARCHAR(150),
    created_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_deleted      BOOLEAN         NOT NULL DEFAULT FALSE
);

CREATE INDEX idx_risk_status   ON emerging_risk(status);
CREATE INDEX idx_risk_category ON emerging_risk(category);
CREATE INDEX idx_risk_severity ON emerging_risk(severity);
CREATE INDEX idx_risk_due_date ON emerging_risk(due_date);

-- This creates the users table

CREATE TABLE IF NOT EXISTS users (
    id           BIGSERIAL PRIMARY KEY,
    username     VARCHAR(100) UNIQUE NOT NULL,
    email        VARCHAR(200) UNIQUE NOT NULL,
    password     VARCHAR(300)        NOT NULL,
    role         VARCHAR(50)         NOT NULL DEFAULT 'VIEWER',
    is_active    BOOLEAN             NOT NULL DEFAULT TRUE,
    created_at   TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email    ON users(email);