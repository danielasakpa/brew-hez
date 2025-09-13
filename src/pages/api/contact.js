import clientPromise from "../../lib/mongodb"

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
      message: "This endpoint only accepts POST requests",
    })
  }

  try {
    const { name, email, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing required fields",
        message: "Name, email, and message are required",
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
        message: "Please provide a valid email address",
      })
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db("coffee_shop")
    const collection = db.collection("contact_submissions")

    // Prepare document for insertion
    const contactSubmission = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      submittedAt: new Date(),
      ipAddress: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      userAgent: req.headers["user-agent"],
    }

    // Insert the contact submission
    const result = await collection.insertOne(contactSubmission)

    // Log successful submission
    console.log("Contact form submission saved:", {
      id: result.insertedId,
      name: contactSubmission.name,
      email: contactSubmission.email,
      timestamp: contactSubmission.submittedAt,
    })

    // Return success response
    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      submissionId: result.insertedId,
    })
  } catch (error) {
    console.error("Contact form submission error:", error)

    // Return error response
    res.status(500).json({
      error: "Internal server error",
      message: "There was a problem processing your submission. Please try again later.",
    })
  }
}
