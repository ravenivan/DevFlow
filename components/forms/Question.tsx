'use client';

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { QuestionsSchema } from '@/lib/validations';
import { useTheme } from '@/context/ThemeProvider';

const Question = () => {
  
  const { mode } = useTheme();
  const editorRef = useRef(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: '',
      explanation: '',
      tags: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  console.log(mode)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark-400_light-800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light-900_dark-300 light-border-2 text-dark-300_light-700 min-h-14 border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Be specific and imagine you&apos;re asking a question to another person.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark-400_light-800">
                Detailed explanation of your problem <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  key={mode}
                  init={{
                    height: 350,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'codesample',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                    ],
                    toolbar:
                      'undo redo | ' +
                      'codesample | bold italic forecolor | alignleft aligncenter |' +
                      'alignright alignjustify | bullist numlist',
                    skin: mode === 'dark' ? 'oxide-dark' : 'oxide',
                    content_css: mode === 'dark' ? 'dark' : 'default',
                    content_style: 'body { font-family:Inter; font-size:16px }',
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Introduce the problem and expand on what you put in the title. Minimum 20
                characters.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark-400_light-800">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light-900_dark-300 light-border-2 text-dark-300_light-700 min-h-14 border"
                  placeholder="Add tags..."
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Add up to 3 tags to describe what your question is about. You need to press enter to
                add a tag.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Question;
