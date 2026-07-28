"use client";

import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./BookingForm.module.css";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  serviceType?: string;
  preferredDate?: string;
}

export default function BookingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type.";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a preferred date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="book"
      className="bg-[var(--color-canvas)] py-[var(--space-5xl)] px-[var(--space-md)]"
    >
      <div className="max-w-[640px] mx-auto">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[var(--color-semantic-success)] font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] leading-[1.6]"
            >
              We received your request. Expect a confirmation within 24 hours.
            </motion.div>
          ) : (
            <motion.div
              key="form"
              exit={{ opacity: 0, y: -10 }}
            >
              <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] font-[500] leading-[1.2] text-[var(--color-text-primary)] mb-[var(--space-xl)]">
                Book a Service
              </h2>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[var(--space-lg)]"
                noValidate
              >
                <div className="flex flex-col gap-[var(--space-xs)]">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="form-input"
                    required
                  />
                  {errors.name && <span className="form-helper error">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-[var(--space-xs)]">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="form-input"
                    required
                  />
                  {errors.email && <span className="form-helper error">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-[var(--space-xs)]">
                  <label htmlFor="phone" className="form-label">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(212) 555-0100"
                    className="form-input"
                  />
                </div>

                <div className="flex flex-col gap-[var(--space-xs)]">
                  <label htmlFor="serviceType" className="form-label">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="Standard Clean — $140">Standard Clean — $140</option>
                    <option value="Deep Clean — $240">Deep Clean — $240</option>
                  </select>
                  {errors.serviceType && <span className="form-helper error">{errors.serviceType}</span>}
                </div>

                <div className="flex flex-col gap-[var(--space-xs)]">
                  <label htmlFor="preferredDate" className="form-label">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                  {errors.preferredDate && <span className="form-helper error">{errors.preferredDate}</span>}
                </div>

                <div className="flex flex-col gap-[var(--space-xs)]">
                  <label htmlFor="message" className="form-label">
                    Anything we should know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Pets, access instructions, specific areas to focus on…"
                    className={`form-input ${styles.textarea}`}
                  />
                </div>

                <div className="flex flex-col gap-[var(--space-sm)] mt-[var(--space-md)]">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-disabled={status === "submitting"}
                    className="btn-primary w-full md:w-auto self-start"
                  >
                    {status === "submitting" ? "Sending…" : "Request a Booking"}
                  </button>

                  {status === "error" && (
                    <p className="form-helper error">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
