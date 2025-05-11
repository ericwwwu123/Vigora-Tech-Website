import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body against the schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      return res.status(201).json({
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      // Handle other errors
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });

  // Get contact submissions (admin endpoint)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.status(200).json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({
        message: "An error occurred while fetching contact submissions"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
