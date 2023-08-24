import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("products", (table) => {
    table.increments("id");
    table.string("title");
    table.double("price");
    table.text("description");
    table.string("category");
    table.string("image");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("products");
}
