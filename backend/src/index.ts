import { serve } from "@hono/node-server";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import studentRoutes from "./api/v1/routes/students";
import { openApiDocument } from "./openapi";

// Create base app and openapi app
const app = new Hono();
const openApiApp = new OpenAPIHono();

// Middleware
app.use(logger());
app.use(cors());
app.use(prettyJSON());

// Home route
app.get("/", (c) => {
	return c.text(
		"Welcome to the Student Management API! Visit /docs for API documentation.",
	);
});

// Register REST routes
app.route("/api/v1/students", studentRoutes);

// Register OpenAPI routes (for Swagger UI)
openApiApp.doc("/openapi.json", openApiDocument);
app.route("/", openApiApp);
app.get("/docs", swaggerUI({ url: "/openapi.json" }));

// Start server
serve({
	fetch: app.fetch,
	port: 3000,
});
