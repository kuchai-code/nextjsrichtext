"use client"

import Image from 'next/image'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import Tiptap from '@/components/Tiptap'


export default function Home() {

  const formSchema = z.object ({
    title: z
      .string()
      .min(5, {message: "Title needs to be at least 5 characters."})
      .max(100, {message:"Title too long!"}),
    price: z
      .number()
      .min(4, {message: "Add more numbers"}),
    description: z
      .string()
      .min(5, {message: "Title needs to be at least 5 characters."})
      .max(100, {message:"Title too long!"})
      .trim(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      price: 149.99,
      description: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>){
    values.title
  }
  return (
    <main className="p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name = "title"
            render={({ field }) =>
            (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Main title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name = "description"
            render={({ field }) =>
            (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Tiptap description={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='my-4' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </main>
  )
}
