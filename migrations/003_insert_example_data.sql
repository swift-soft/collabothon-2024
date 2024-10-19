WITH 
    users AS (
        SELECT 
            '8595615e-bc1c-481c-a2a8-3b72ca43456a'::uuid AS jimmy_id,
            'a840b839-3c56-4c98-b380-accbd8b5e6f3'::uuid AS susanne_id,
            'd914658a-6555-4d0c-91c2-731e90513e98'::uuid AS bartek_id
    ),
    companies AS (
        SELECT 
            '562ebbb9-97e5-4d6c-a5ae-20e25e33da13'::uuid AS commerzbank_id,
            '23229f18-b9cd-4b95-a20c-2da1675da91e'::uuid AS biedronka_id
    )

INSERT INTO companies (id, name, description, created_at) 
VALUES 
    (gen_random_uuid(), 'Commerzbank', 'Commerzbank is a leading international commercial bank based in Germany, offering a range of financial services including retail, corporate, and investment banking.', CURRENT_TIMESTAMP),
    (gen_random_uuid(), 'Biedronka', 'Biedronka is one of the largest supermarket chains in Poland, offering a wide variety of groceries, fresh produce, and household goods at competitive prices.', CURRENT_TIMESTAMP);

INSERT INTO messages (id, from_user, to_user, title, message, date) 
VALUES 
    (gen_random_uuid(), (SELECT susanne_id FROM users), (SELECT jimmy_id FROM users), 'Interest Rate Update on Saving...', 'We have updated our interest rates on savings accounts. Please check your account for details.', '2024-10-16 14:37'),
    (gen_random_uuid(), (SELECT bartek_id FROM users), (SELECT jimmy_id FROM users), 'Important Security Alert...', 'There has been a recent security incident. We recommend changing your password immediately.', '2024-10-15 09:52'),
    (gen_random_uuid(), (SELECT susanne_id FROM users), (SELECT jimmy_id FROM users), 'Account Statement Ready', 'Your account statement for the last month is now available. Please check your online banking.', '2024-10-18 10:15'),
    (gen_random_uuid(), (SELECT bartek_id FROM users), (SELECT jimmy_id FROM users), 'New Investment Opportunities', 'We have some exciting new investment options available for you. Visit our website for details.', '2024-10-17 14:30'),
    (gen_random_uuid(), (SELECT susanne_id FROM users), (SELECT jimmy_id FROM users), 'Upcoming Maintenance Notice', 'Scheduled maintenance will occur on 2024-10-20 from 01:00 to 03:00. Online banking may be unavailable during this time.', '2024-10-18 08:00'),
    (gen_random_uuid(), (SELECT bartek_id FROM users), (SELECT jimmy_id FROM users), 'Loan Approval Notification', 'Your loan application has been approved. Please check your email for more details.', '2024-10-19 09:45'),
    (gen_random_uuid(), (SELECT susanne_id FROM users), (SELECT jimmy_id FROM users), 'Password Reset Request', 'We received a request to reset your password. If you did not request this, please contact support.', '2024-10-19 11:30');

INSERT INTO actions (id, from_user, to_user, title, message, date) 
VALUES 
    (gen_random_uuid(), (SELECT susanne_id FROM users), (SELECT jimmy_id FROM users), 'Transfer request', 'A request has been made to transfer funds from your account. Please review the transaction.', '2024-10-16 13:49'),
    (gen_random_uuid(), (SELECT bartek_id FROM users), (SELECT jimmy_id FROM users), 'Refund request', 'Your refund request has been submitted and is currently being processed.', '2024-10-14 11:23'),
    (gen_random_uuid(), (SELECT susanne_id FROM users), (SELECT jimmy_id FROM users), 'Account Verification Needed', 'Your account requires verification. Please provide the necessary documents to continue using your account.', '2024-10-19 15:00');

INSERT INTO to_dos (id, title, description, company_id) 
VALUES 
    (gen_random_uuid(), 'Reduce CO₂ Emissions by 10%', 'Implement carbon offset programs and switch to renewable energy sources to reduce overall emissions in the next quarter.', (SELECT biedronka_id FROM companies)),
    (gen_random_uuid(), 'Upgrade to Energy-Efficient Systems', 'Replace outdated equipment with energy-efficient alternatives, install smart meters, and utilize LED lighting in all facilities within six months.', (SELECT biedronka_id FROM companies)),
    (gen_random_uuid(), 'Implement Water Recycling', 'Install water recycling systems in manufacturing plants to decrease water consumption by 20% over the next year.', (SELECT biedronka_id FROM companies)),
    (gen_random_uuid(), 'Launch Diversity & Inclusion Program', 'Introduce mandatory diversity training and ensure gender and racial representation in leadership roles within the company by the end of the year.', (SELECT biedronka_id FROM companies)),
    (gen_random_uuid(), 'Increase Governance Transparency', 'Publish quarterly governance reports, including executive pay disclosures and decision-making processes, on the corporate website starting next quarter.', (SELECT biedronka_id FROM companies)),
    (gen_random_uuid(), 'Establish Anti-Corruption Training', 'Develop and implement an anti-corruption and ethics training program for all employees, with a focus on procurement and financial practices, by Q1 2025.', (SELECT biedronka_id FROM companies));
