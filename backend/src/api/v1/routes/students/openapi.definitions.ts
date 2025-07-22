import { createRoute } from "@hono/zod-openapi";
import { z } from "zod";
import {
	createStudentSchema,
	studentResponseSchema,
	studentSingleResponseSchema,
} from "./schemas";

export const createStudentRoute = createRoute({
	method: "post",
	path: "/students",
	request: {
		body: {
			content: {
				"application/json": {
					schema: createStudentSchema,
				},
			},
		},
	},
	responses: {
		201: {
			description: "Student created successfully",
		},
		400: {
			description: "Invalid input",
		},
	},
});

export const getStudentRoute = createRoute({
	method: "get",
	path: "/students",
	responses: {
		200: {
			description: "Students retrieved successfully",
			content: {
				"application/json": {
					schema: z.array(studentResponseSchema),
				},
			},
		},
		400: {
			description: "Invalid input",
		},
	},
});
export const getStudentByIdRoute = createRoute({
	method: "get",
	path: "/students/{id}",
	request: {
		params: studentSingleResponseSchema,
	},
	responses: {
		200: {
			description: "Single Student Data",
			content: {
				"application/json": {
					schema: studentResponseSchema,
				},
			},
		},
		400: {
			description: "Invalid input",
		},
		404: {
			description: "Student not found",
		},
	},
});
