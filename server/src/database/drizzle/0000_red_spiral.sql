CREATE TABLE `accounts` (
	`acc_id` varchar(40) NOT NULL,
	`acc_type` varchar(20) NOT NULL,
	`acc_description` text NOT NULL,
	`acc_is_active` boolean NOT NULL DEFAULT true,
	`acc_created_at` datetime NOT NULL DEFAULT '2024-03-20 04:42:58.305',
	`acc_updated_at` datetime NOT NULL DEFAULT '2024-03-20 04:42:58.305',
	CONSTRAINT `accounts_acc_id` PRIMARY KEY(`acc_id`)
);
--> statement-breakpoint
CREATE TABLE `cheques` (
	`chq_id` varchar(40) NOT NULL,
	`chq_payee_name` varchar(50) NOT NULL,
	`chq_amount` int NOT NULL,
	`chq_issue_date` date NOT NULL,
	`chq_description` text NOT NULL,
	`chq_status` enum('APPROVED','PENDING','REJECTED'),
	`chq_account_id` varchar(40),
	`chq_created_at` datetime NOT NULL DEFAULT '2024-03-20 04:42:58.310',
	`chq_updated_at` datetime NOT NULL DEFAULT '2024-03-20 04:42:58.310',
	CONSTRAINT `cheques_chq_id` PRIMARY KEY(`chq_id`)
);
--> statement-breakpoint
CREATE TABLE `customers` (
	`cust_id` varchar(40) NOT NULL,
	`cust_name` varchar(50) NOT NULL,
	`cust_address` varchar(50) NOT NULL,
	`cust_contact_info` int NOT NULL,
	`cust_email` varchar(50) NOT NULL,
	`cust_is_active` boolean NOT NULL DEFAULT true,
	CONSTRAINT `customers_cust_id` PRIMARY KEY(`cust_id`),
	CONSTRAINT `customers_cust_email_unique` UNIQUE(`cust_email`)
);
--> statement-breakpoint
CREATE TABLE `employees` (
	`emp_id` varchar(40) NOT NULL,
	`emp_address` varchar(50) NOT NULL,
	`emp_contact_info` int NOT NULL,
	`emp_email` varchar(50) NOT NULL,
	`emp_birthdate` date NOT NULL,
	`emp_date_hired` date NOT NULL,
	`emp_date_terminated` date NOT NULL,
	`emp_salary` int NOT NULL,
	CONSTRAINT `employees_emp_id` PRIMARY KEY(`emp_id`),
	CONSTRAINT `employees_emp_email_unique` UNIQUE(`emp_email`)
);
--> statement-breakpoint
CREATE TABLE `inventory` (
	`inv_id` varchar(40) NOT NULL,
	`inv_asset_name` varchar(40) NOT NULL,
	`inv_stocks` int NOT NULL,
	`inv_status` enum('GOOD','WARNING','DEPLETED'),
	CONSTRAINT `inventory_inv_id` PRIMARY KEY(`inv_id`),
	CONSTRAINT `inventory_inv_asset_name_unique` UNIQUE(`inv_asset_name`)
);
--> statement-breakpoint
CREATE TABLE `payrolls` (
	`pr_id` varchar(40) NOT NULL,
	`pr_employee_id` varchar(40) NOT NULL,
	`pr_total_deduction` int NOT NULL,
	`pr_date_from` date NOT NULL,
	`pr_date_to` date NOT NULL,
	`pr_final_amount` int NOT NULL,
	CONSTRAINT `payrolls_pr_id` PRIMARY KEY(`pr_id`)
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`tran_id` varchar(40) NOT NULL,
	`tran_account_id` varchar(40) NOT NULL,
	`tran_description` text NOT NULL,
	`tran_amount` int NOT NULL,
	`tran_employee_id` varchar(40),
	`tran_vendor_id` varchar(40),
	`tran_customer_id` varchar(40),
	`tran_transaction_date` datetime NOT NULL,
	`tran_created_at` datetime NOT NULL DEFAULT '2024-03-20 04:42:58.335',
	`tran_updated_at` datetime NOT NULL DEFAULT '2024-03-20 04:42:58.335',
	CONSTRAINT `transactions_tran_id` PRIMARY KEY(`tran_id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`user_id` varchar(40) NOT NULL,
	`user_type` enum('FINANCE','HIGHER_DEPARTMENT'),
	`user_username` varchar(16) NOT NULL,
	`user_password` varchar(16) NOT NULL,
	`user_is_active` boolean NOT NULL DEFAULT true,
	CONSTRAINT `users_user_id` PRIMARY KEY(`user_id`)
);
--> statement-breakpoint
CREATE TABLE `vendors` (
	`vd_id` varchar(40) NOT NULL,
	`vd_name` varchar(50) NOT NULL,
	`vd_address` varchar(50) NOT NULL,
	`vd_contact_info` int NOT NULL,
	`vd_email` varchar(50) NOT NULL,
	`vd_is_active` boolean NOT NULL DEFAULT true,
	CONSTRAINT `vendors_vd_id` PRIMARY KEY(`vd_id`),
	CONSTRAINT `vendors_vd_email_unique` UNIQUE(`vd_email`)
);
--> statement-breakpoint
ALTER TABLE `cheques` ADD CONSTRAINT `cheques_chq_account_id_accounts_acc_id_fk` FOREIGN KEY (`chq_account_id`) REFERENCES `accounts`(`acc_id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `payrolls` ADD CONSTRAINT `payrolls_pr_employee_id_employees_emp_id_fk` FOREIGN KEY (`pr_employee_id`) REFERENCES `employees`(`emp_id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_tran_account_id_accounts_acc_id_fk` FOREIGN KEY (`tran_account_id`) REFERENCES `accounts`(`acc_id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_tran_employee_id_employees_emp_id_fk` FOREIGN KEY (`tran_employee_id`) REFERENCES `employees`(`emp_id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_tran_vendor_id_vendors_vd_id_fk` FOREIGN KEY (`tran_vendor_id`) REFERENCES `vendors`(`vd_id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_tran_customer_id_customers_cust_id_fk` FOREIGN KEY (`tran_customer_id`) REFERENCES `customers`(`cust_id`) ON DELETE cascade ON UPDATE no action;