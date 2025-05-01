"use client";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";

import { z } from "zod";
import { toast } from "sonner";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Mínimo de 2 caracteres." }).max(50),
  email: z.string().min(1).email("Entre um email válido."),
  subject: z.string().min(1, { message: "Campo obrigatório." }).max(20),
  message: z.string().min(1, { message: "Campo obrigatório." }).max(500),
});

type LabelType = "name" | "email" | "subject";

const labels: { name: string; field: LabelType }[] = [
  { name: "Nome", field: "name" },
  { name: "Email", field: "email" },
  { name: "Assunto", field: "subject" },
];

export function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values)
    form.reset()
    toast("Formulário enviado com sucesso!")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {labels.map((label) => (
          <FormField
            key={label.field}
            control={form.control}
            name={label.field}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={label.name} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Mensagem"
                  className="resize-none"
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
