import { relations } from "drizzle-orm";
import { integer, decimal, pgTable, varchar, timestamp, serial } from "drizzle-orm/pg-core";

export const buoys = pgTable("buoys", {
    id: serial('id').primaryKey(),
    displayName: varchar("display_name", { length: 255 }),
    status: varchar({ length: 100 }).notNull(),
    minPhThreshold: decimal("min_ph_threshold"),
    maxPhThreshold: decimal("max_ph_threshold"),
    minOxygenThreshold: decimal("min_oxygen_threshold"),
    maxOxygenThreshold: decimal("max_oxygen_threshold"),
    minConductivityThreshold: decimal("min_conductivity_threshold"),
    maxConductivityThreshold: decimal("max_conductivity_threshold"),
    minTemperatureThreshold: decimal("min_temperature_threshold"),
    maxTemperatureThreshold: decimal("max_temperature_threshold"),
});

export const logs = pgTable("logs", {
    id: serial('id').primaryKey(),
    buoyId: integer("buoy_id").references(() => buoys.id),
    timestamp: timestamp(),
    ph: decimal(),
    oxygen: decimal(),
    conductivity: decimal(),
    temperature: decimal(),
});

export const logsRelations = relations(logs, ({ one }) => ({
    author: one(buoys, {
        fields: [logs.buoyId],
        references: [buoys.id],
    }),
}));
