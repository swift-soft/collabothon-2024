-- Jimmy (user) uuid: 8595615e-bc1c-481c-a2a8-3b72ca43456a
-- Susanne (consultant) uuid: a840b839-3c56-4c98-b380-accbd8b5e6f3
-- Bartek (consultant) uuid: d914658a-6555-4d0c-91c2-731e90513e98

-- Commerzbank (company) uuid: 562ebbb9-97e5-4d6c-a5ae-20e25e33da13

INSERT INTO companies (id, name, description, created_at) 
VALUES 
    (gen_random_uuid(), 'Commerzbank', 'Commerzbank is a leading international commercial bank based in Germany, offering a range of financial services including retail, corporate, and investment banking.', CURRENT_TIMESTAMP);

INSERT INTO messages (id, from_user, to_user, title, message, date) 
VALUES 
    (gen_random_uuid(), 'a840b839-3c56-4c98-b380-accbd8b5e6f3', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'Interest Rate Update on Saving...', 'We have updated our interest rates on savings accounts. Please check your account for details.', '2024-10-16 14:37'),
    (gen_random_uuid(), 'd914658a-6555-4d0c-91c2-731e90513e98', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'Important Security Alert...', 'There has been a recent security incident. We recommend changing your password immediately.', '2024-10-15 09:52'),
    (gen_random_uuid(), 'a840b839-3c56-4c98-b380-accbd8b5e6f3', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'Account Statement Ready', 'Your account statement for the last month is now available. Please check your online banking.', '2024-10-18 10:15'),
    (gen_random_uuid(), 'd914658a-6555-4d0c-91c2-731e90513e98', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'New Investment Opportunities', 'We have some exciting new investment options available for you. Visit our website for details.', '2024-10-17 14:30'),
    (gen_random_uuid(), 'a840b839-3c56-4c98-b380-accbd8b5e6f3', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'Upcoming Maintenance Notice', 'Scheduled maintenance will occur on 2024-10-20 from 01:00 to 03:00. Online banking may be unavailable during this time.', '2024-10-18 08:00'),
    (gen_random_uuid(), 'd914658a-6555-4d0c-91c2-731e90513e98', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'Loan Approval Notification', 'Your loan application has been approved. Please check your email for more details.', '2024-10-19 09:45'),
    (gen_random_uuid(), 'a840b839-3c56-4c98-b380-accbd8b5e6f3', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'Password Reset Request', 'We received a request to reset your password. If you did not request this, please contact support.', '2024-10-19 11:30');

INSERT INTO actions (id, from_user, to_user, title, message, date) 
VALUES 
    (gen_random_uuid(), 'a840b839-3c56-4c98-b380-accbd8b5e6f3', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'Transfer request', 'A request has been made to transfer funds from your account. Please review the transaction.', '2024-10-16 13:49'),
    (gen_random_uuid(), 'd914658a-6555-4d0c-91c2-731e90513e98', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'Refund request', 'Your refund request has been submitted and is currently being processed.', '2024-10-14 11:23'),
    (gen_random_uuid(), 'a840b839-3c56-4c98-b380-accbd8b5e6f3', '8595615e-bc1c-481c-a2a8-3b72ca43456a', 'Account Verification Needed', 'Your account requires verification. Please provide the necessary documents to continue using your account.', '2024-10-19 15:00');

INSERT INTO to_dos (id, title, description, company_id) 
VALUES 
    (gen_random_uuid(), 'Reduce CO₂ Emissions by 10%', 'Implement carbon offset programs and switch to renewable energy sources to reduce overall emissions in the next quarter.', '562ebbb9-97e5-4d6c-a5ae-20e25e33da13'),
    (gen_random_uuid(), 'Upgrade to Energy-Efficient Systems', 'Replace outdated equipment with energy-efficient alternatives, install smart meters, and utilize LED lighting in all facilities within six months.', '562ebbb9-97e5-4d6c-a5ae-20e25e33da13'),
    (gen_random_uuid(), 'Implement Water Recycling', 'Install water recycling systems in manufacturing plants to decrease water consumption by 20% over the next year.', '562ebbb9-97e5-4d6c-a5ae-20e25e33da13'),
    (gen_random_uuid(), 'Launch Diversity & Inclusion Program', 'Introduce mandatory diversity training and ensure gender and racial representation in leadership roles within the company by the end of the year.', '562ebbb9-97e5-4d6c-a5ae-20e25e33da13'),
    (gen_random_uuid(), 'Increase Governance Transparency', 'Publish quarterly governance reports, including executive pay disclosures and decision-making processes, on the corporate website starting next quarter.', '562ebbb9-97e5-4d6c-a5ae-20e25e33da13'),
    (gen_random_uuid(), 'Establish Anti-Corruption Training', 'Develop and implement an anti-corruption and ethics training program for all employees, with a focus on procurement and financial practices, by Q1 2025.', '562ebbb9-97e5-4d6c-a5ae-20e25e33da13');
