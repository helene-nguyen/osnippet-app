BEGIN;

INSERT INTO "role"("id","name")
VALUES 
	(1, 'admin'), 
	(2, 'user');

INSERT INTO "user"
    ("id","username","email","password", "role_id")
VALUES 
	(1, 'admin', 'admin@admin.com','admin', 1);

SELECT setval('category_id_seq', (SELECT MAX(id) from "category"));
SELECT setval('role_id_seq', (SELECT MAX(id) from "role"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));
SELECT setval('snippet_id_seq', (SELECT MAX(id) from "snippet"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;