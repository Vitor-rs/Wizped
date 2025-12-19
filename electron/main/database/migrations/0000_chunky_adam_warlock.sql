CREATE TABLE `estudantes` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`book` text,
	`class_time` text,
	`birth_date` text,
	`responsible_name` text,
	`phone` text,
	`active` integer DEFAULT true,
	`notes` text,
	`created_at` integer DEFAULT (unixepoch()),
	`updated_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text,
	`password` text NOT NULL,
	`role` text DEFAULT 'teacher',
	`created_at` integer DEFAULT (unixepoch()),
	`updated_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);