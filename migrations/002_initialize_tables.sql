CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    from_user UUID NOT NULL REFERENCES profiles(id),
    to_user UUID NOT NULL REFERENCES profiles(id),
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE actions (
    id SERIAL PRIMARY KEY,
    from_user UUID NOT NULL REFERENCES profiles(id),
    to_user UUID NOT NULL REFERENCES profiles(id),
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
