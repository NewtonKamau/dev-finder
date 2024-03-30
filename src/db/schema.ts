import { pgTable, text } from 'drizzle-orm/pg-core';

export const test = pgTable('test', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    age: text('age').notNull(),
    email: text('email').notNull(),
})