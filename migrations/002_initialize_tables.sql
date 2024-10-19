CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    from_user UUID NOT NULL REFERENCES profiles(id),
    to_user UUID NOT NULL REFERENCES profiles(id),
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE actions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    from_user UUID NOT NULL REFERENCES profiles(id),
    to_user UUID NOT NULL REFERENCES profiles(id),
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE to_dos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    company_id UUID NOT NULL REFERENCES companies(id)
);
