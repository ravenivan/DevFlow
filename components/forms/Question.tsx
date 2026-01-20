'use client';

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

const Question = () => {
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark-400_light-800">Question Title <span className='text-primary-500'>*</span></FormLabel>
              <FormControl className='mt-3.5'>
                <Input 
                  className='no-focus paragraph-regular background-light-900_dark-300 light-border-2 text-dark-300_light-700 min-h-14 border'
                   {...field} 
                />
              </FormControl>
              <FormDescription className='body-regular mt-2.5 text-light-500'>
                Be specific and imagine you’re asking a question to another person.
              </FormDescription>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark-400_light-800">Detailed explanation of your problem <span className='text-primary-500'>*</span></FormLabel>
              <FormControl className='mt-3.5'>
                {/* TODO: Add an Editor component */}
              </FormControl>
              <FormDescription className='body-regular mt-2.5 text-light-500'>
                Introduce the problem and expand on what you put in the title. Minimum 20 characters.
              </FormDescription>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark-400_light-800">Tags <span className='text-primary-500'>*</span></FormLabel>
              <FormControl className='mt-3.5'>
                <Input 
                  className='no-focus paragraph-regular background-light-900_dark-300 light-border-2 text-dark-300_light-700 min-h-14 border'
                  placeholder="Add tags..."
                   {...field} 

                />
              </FormControl>
              <FormDescription className='body-regular mt-2.5 text-light-500'>
                Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.
              </FormDescription>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Question;
