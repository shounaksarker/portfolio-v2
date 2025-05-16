"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = ({ contactRef }: any) => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    user_sub: "",
    message: "",
  });
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    emailjs
      .sendForm(
        "snkncssnkncs",
        "template_bj0htkq",
        e.target as HTMLFormElement,
        "k8g7ZUz1gN5IR-YJE"
      )
      .then(
        () => {
          toast("Email sent successfully!", {
            icon: "✅",
            duration: 3000,
            style: {
              background: "black",
              color: "white",
              border: "1px solid blue",
            },
          });
          setFormData({
            from_name: "",
            user_email: "",
            user_sub: "",
            message: "",
          });
        },
        (error) => {
          toast("Failed to send Email!!", {
            icon: "😓",
            duration: 3000,
            style: {
              background: "red",
              color: "white",
              border: "1px solid black",
            },
          });
        }
      );
  };
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>

      <div className="container px-4 mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="relative inline-block">
              Get In Touch
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </span>
          </h2>

          <div className="max-w-2xl mx-auto mt-16">
            <div className="card-container p-4">
              <form onSubmit={handleFormSubmit}>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                      required
                      className="input-styled"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      value={formData.user_email}
                      onChange={handleFormChange}
                      placeholder="your.email@example.com"
                      required
                      className="input-styled"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="asubject"
                      name="user_sub"
                      type="text"
                      value={formData.user_sub}
                      onChange={handleFormChange}
                      placeholder="Your subject"
                      className="input-styled"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="input-styled"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button type="submit" className="w-full gap-2 btn-gradient">
                      <Send size={18} className="relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </Button>
                  </motion.div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
