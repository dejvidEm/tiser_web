"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Meno musí mať aspoň 2 znaky." }),
  email: z.string().email({ message: "Zadajte platnú emailovú adresu." }),
  phone: z.string().min(6, { message: "Zadajte platné telefónne číslo." }),
  service: z.string().min(1, { message: "Vyberte službu." }),
  message: z.string().min(10, { message: "Správa musí mať aspoň 10 znakov." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulované odoslanie
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="bg-green-100 p-3 rounded-full mb-4">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Ďakujeme!</h3>
        <p className="text-gray-600 mb-6">
          Vaša správa bola úspešne odoslaná. Čoskoro sa vám ozveme.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Poslať ďalšiu správu
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celé meno</FormLabel>
              <FormControl>
                <Input placeholder="Ján Novák" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="jan@priklad.sk" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefónne číslo</FormLabel>
                <FormControl>
                  <Input placeholder="+43 123 456 7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Služba, o ktorú máte záujem</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Vyberte službu" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="construction">Výstavba</SelectItem>
                  <SelectItem value="demolition">Demolácia</SelectItem>
                  <SelectItem value="excavation">Výkopové práce</SelectItem>
                  <SelectItem value="masonry">Murárske práce</SelectItem>
                  <SelectItem value="air-conditioning">Klimatizácia</SelectItem>
                  <SelectItem value="other">Iné</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Správa</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Napíšte nám vašu požiadavku..."
                  className="w-full p-3 border rounded-md"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Odosielam..." : "Odoslať správu"}
        </Button>
      </form>
    </Form>
  )
}